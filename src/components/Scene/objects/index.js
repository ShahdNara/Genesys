import React, { useRef, useState, useEffect,  useMemo, useCallback } from 'react'
import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { BufferGeometry, ShaderMaterial, Vector3, BufferAttribute, RedFormat, AdditiveBlending, FrontSide, BackSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import mars from "../../../media/mars2.jpg"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

const SPEED = 0.0002
const textures = {
	"mars": mars,
	"moon": "https://solartextures.b-cdn.net/2k_moon.jpg",
	"sun": "https://solartextures.b-cdn.net/2k_sun.jpg",
	"jupiter": "https://solartextures.b-cdn.net/2k_jupiter.jpg",
	"neptune": "https://solartextures.b-cdn.net/2k_neptune.jpg",
}

export function Planet({ speed = SPEED, name, pos, move = false, target_vector, light_pos, radius=3, scale=1 }) {
	const ref = useRef()
	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false)
	const [clicked, click] = useState(false)
	const colorMap = useLoader(TextureLoader,textures[name])
	//const colorMap = useLoader(TextureLoader, mars)

	useFrame(() => {
		if (move) {
			const targetVector = new Vector3(...target_vector)
			const direction = new Vector3()
			const { position } = ref.current
			//console.log(position)
			direction.subVectors(targetVector, position)
			const vector = direction.multiplyScalar(0.01, 0.01, 0.01)

      ref.current.position.x += vector.x
			ref.current.position.y += vector.y
			ref.current.position.z += vector.z
		}
		
		ref.current.rotation.y += speed*1.6
		// ref.current.rotation.x += speed
		//ref.current.rotation.z += speed
	})
    return (
		<mesh
			ref={ref}
			//   onClick={(event) => click(!clicked)}
			position={pos}
      scale={scale}
			>
			
			{/* <spotLight target={pos} angle={0.5} intensity={1} color="#FDF4DC" distance={360}/> */}
			<sphereGeometry args={[radius, 40, 40]} />
			{/* <Particles pointCount={70} /> */}
			
			<meshStandardMaterial map={colorMap} />
        </mesh>
	);
  }

export function Particles({ pointCount }) {
    const [positions, colors] = useMemo(() => {
      let positions = [],
        colors = []
      for (let i = 0; i < pointCount; i++) {
        positions.push(5 - Math.random() * 10)
        positions.push(5 - Math.random() * 10)
        positions.push(5 - Math.random() * 10)
        colors.push(255)
        colors.push(255)
        colors.push(255)
      }
      return [new Float32Array(positions), new Float32Array(colors)]
    }, [pointCount])
  
    const attrib = useRef()
    const hover = useCallback(e => {
      e.stopPropagation()
      attrib.current.array[e.index * 3] = 1
      attrib.current.array[e.index * 3 + 1] = 1
      attrib.current.array[e.index * 3 + 2] = 1
      attrib.current.needsUpdate = true
    }, [])
  
    const unhover = useCallback(e => {
      attrib.current.array[e.index * 3] = 1
      attrib.current.array[e.index * 3 + 1] = 0.5
      attrib.current.array[e.index * 3 + 2] = 0.5
      attrib.current.needsUpdate = true
    }, [])
  
    return (
      <points onPointerOver={hover} onPointerOut={unhover}>
        <bufferGeometry attach="geometry">
          <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute ref={attrib} attachObject={["attributes", "color"]} count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial attach="material" vertexColors size={1} sizeAttenuation={false} />
      </points>
    )
  }


  export const Asteroid = ({ obj, mtl, image, pos }) => {
    const [geometry, setGeometry] = useState();
    const [toggle, setToggle] = useState(true);
    const [counter, setCounter] = useState(0);
    const [hover, setHover] = useState(false);

    const mesh = useRef();
    const materialLoaded = useLoader(MTLLoader, mtl);
    const texture = useLoader(TextureLoader, image)
    const object = useLoader(OBJLoader, obj);
      // init
    if (!geometry) {
      // Scene settings
      const scene = object.clone(true); // so we can instantiate multiple copies of this geometry
      setGeometry(scene);
    }

    const primitiveProps = {
      object: geometry,
      position: pos,
      scale: 7
    };

    useEffect(() => {
      const timeout = setTimeout(() => {
        setCounter(counter + 1);
        setToggle(!toggle)
      }, 2000);
  
      return () => {
        clearTimeout(timeout);
      };
    }, [counter]);

    return (
      <mesh
        ref={mesh}
        materials={materialLoaded.materials}
        position={pos}
      >
        <primitive {...primitiveProps} />
        <meshBasicMaterial map={texture}/>
      </mesh>
    );
  };
  

  export const Ring = ({ center, number, r_max, r_min }) => {
    const asteroids_arr = []
    const asteroids = useMemo(() => {
      const temp = []
      for (let i = 0; i < number; i++) {
        const theta = 360 * Math.random(0, Math.PI);
        const A = 2/(r_max*r_max - r_min*r_min);
        const r = Math.sqrt(2*Math.random()/A + r_min*r_min)
        const x = -Math.abs(r * Math.cos(theta)) + center[0]/2 -10;
        const y = r * Math.sin(theta) + center[2]/2;
        const z = x/2.1 + Math.random();
        const type = Math.ceil(Math.random() * 4);
        temp.push({ x, z, y, type })
      }
      return temp
    }, [number])

    asteroids.forEach((asteroid, i) => {
      let { x, z, y, type } = asteroid
      asteroids_arr.push(
        <Asteroid
          obj={`asteroids/asteroid${type}.obj`}
          mtl={`asteroids/asteroid${type}.mtl`}
          image={`asteroids/asteroid${type}.png`}
          pos={[x, z, y]}
        />)
    })

    return(asteroids_arr.map((c, k) =><mesh key={k}>{c}</mesh>))
  }

  export function Blackhole({pos}) {
    const obj="blackhole/scene.gltf"
    // const image="sun/sun.jpeg"

    const mesh = useRef();
    // // const materialLoaded = useLoader(MTLLoader, mtl);
    // const texture = useLoader(TextureLoader, image)
    const object = useLoader(GLTFLoader, obj);

    useFrame(() => {
      mesh.current.rotation.y += 0.005

    })
    return (
      <mesh
        ref={mesh}
        // materials={materialLoaded.materials}
        rotation={[Math.PI / 2, 0, 0]}
        position={pos}
      >
        <primitive object={object.scene} />
      </mesh>
    );
  }
  export function Spaceship({position,...props}) {
    const [geometry, setGeometry] = useState();
    const obj="spaceship/scene.gltf"
    console.log(position)
    const mesh = useRef();
    const object = useLoader(GLTFLoader, obj);

    if (!geometry) {
      // Scene settings
      const scene = object.scene.clone(true); // so we can instantiate multiple copies of this geometry
      setGeometry(scene);
    }

    const primitiveProps = {
      object: geometry,
      position: position
    };

    if (mesh.current) {
      mesh.current.rotation.y = 2
    }
    
    useFrame(() => {
      mesh.current.position.z += 0.5
    })

    useEffect(() => {
      mesh.current.rotation.y = -1.7
      console.log(props.resetOnTab)
      if (props.resetOnTab == 1) {
        mesh.current.position.z = position[2]
      }
    }, [props.resetOnTab])

    return (
      <mesh
        ref={mesh}
      >
        <primitive {...primitiveProps} scale={0.1}/>
      </mesh>
    );
  }

  export function Spaceships({pos,...props}) {
    const p1 = [pos[0]-220, pos[1]-150, pos[2]+100] // left one
    const p2 = [pos[0]-10, pos[1]-30, pos[2] -80] // middle one
    const p3 = [pos[0]+100, pos[1]-150, pos[2]-300] // right one
    const p4 = [pos[0]-100, pos[1]-120, pos[2]-100] // right one
    const spaceship_arr = [<Spaceship position={p1} resetOnTab={props.resetOnTab}/>, <Spaceship position={p2} resetOnTab={props.resetOnTab}/>, <Spaceship position={p3} resetOnTab={props.resetOnTab}/>, <Spaceship position={p4} resetOnTab={props.resetOnTab}/>]
    return(spaceship_arr.map((c, k) =><mesh position={pos} key={k}>{c}</mesh>))
  }

  export function Spacestation({pos}) {
    const obj="battleship/scene.gltf"
    // const image="sun/sun.jpeg"

    const mesh = useRef();
    // // const materialLoaded = useLoader(MTLLoader, mtl);
    // const texture = useLoader(TextureLoader, image)
    const object = useLoader(GLTFLoader, obj);

    useFrame(() => {
      // mesh.current.rotation.y -= 0.00005

    })
    useEffect(() => {
      mesh.current.rotation.y = -Math.PI/4;
      mesh.current.rotation.x = Math.PI;

    })
    return (
      <mesh
        ref={mesh}
        position={pos}
      >
        <primitive object={object.scene} scale={8}/>
      </mesh>
    );
  }

  export function Saturn2({pos}) {
    
    return (
      <mesh>
        <Planet name="jupiter" pos={pos} radius={50}/>
        <Ring center={pos} number={300} r_max={50} r_min={10}/>
      </mesh>
    );
    
  }

  export function Bloom({ children }) {
    const { gl, camera, size } = useThree()
    const [scene, setScene] = useState()
    const composer = useRef()

    return (
      <>
        <scene ref={setScene}>{children}</scene>
        <effectComposer ref={composer} args={[gl]}>
          <renderPass attachArray="passes" scene={scene} camera={camera} />
          <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
        </effectComposer>
      </>
    )
  }

  export function Saturn({pos, ...props}) {
    const obj="saturn/scene.gltf"
    // const image="sun/sun.jpeg"

    const mesh = useRef();
    // // const materialLoaded = useLoader(MTLLoader, mtl);
    // const texture = useLoader(TextureLoader, image)
    const object = useLoader(GLTFLoader, obj);

    useFrame(() => {
      mesh.current.rotation.y -= 0.00005

    })
    useEffect(() => {
      mesh.current.rotation.y = 0

    }, [props.resetOnTab])
    return (
      <mesh
        ref={mesh}
        position={pos}
      >
        {/* <ambientLight intensity={0.5} /> */}
        <primitive object={object.scene} scale={1}/>
      </mesh>
    );
  }


  export function Sun({pos, radius}) {
    const ref = useRef()
    
    return (
      <mesh ref={ref} position={pos} >
          <Glow />
      </mesh>
    );
  }

  export function Glow() {
    const loader = new TextureLoader()
    const texture = useLoader(TextureLoader, 'glow3.png')
    return (
      <sprite scale={[50, 50, 0]}>
        <spriteMaterial map={texture} blending={AdditiveBlending} transparent={true} opacity={1}/>
      </sprite>
    )
  }

  export const Belt = ({ center, number, r_max, r_min }) => {
    const asteroids_arr = []
    const asteroids = useMemo(() => {
      const temp = []
      for (let i = 0; i < number; i++) {
        // const theta = 360 * Math.random(0, Math.PI);
        // const A = 2/(r_max*r_max - r_min*r_min);
        // const r = Math.sqrt(2*Math.random()/A + r_min*r_min)
        // const x = -Math.abs(r * Math.cos(theta)) + center[0]/2 -10;
        // const y = r * Math.sin(theta) + center[2]/2;
        // const z = x/2.1 + Math.random();
        const x = center[0];
        const y = center[1];
        const z = center[2];
        const type = Math.ceil(Math.random() * 4);
        temp.push({ x, z, y, type })
      }
      return temp
    }, [number])

    asteroids.forEach((asteroid, i) => {
      let { x, z, y, type } = asteroid
      asteroids_arr.push(
        <Asteroid
          obj={`asteroids/asteroid${type}.obj`}
          mtl={`asteroids/asteroid${type}.mtl`}
          image={`asteroids/asteroid${type}.png`}
          pos={[x, z, y]}
        />)
    })

    return(asteroids_arr.map((c, k) =><mesh key={k}>{c}</mesh>))
  }
