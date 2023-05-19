import React, { useRef, useState, useEffect,  useMemo, useCallback } from 'react'
import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { BufferGeometry, ShaderMaterial, Vector3, BufferAttribute, RedFormat, AdditiveBlending, FrontSide, BackSide } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import mars from "../../../media/mars3.jpg"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

const SPEED = 0.0002
const textures = {
	"mars": mars,
	"moon": "https://solartextures.b-cdn.net/8k_moon.jpg"
	// "sun": "https://solartextures.b-cdn.net/8k_sun.jpg",
	// "jupiter": "https://solartextures.b-cdn.net/8k_jupiter.jpg",
	// "neptune": "https://solartextures.b-cdn.net/8k_neptune.jpg",
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


  export function Spaceship({position,...props}) {
    const [geometry, setGeometry] = useState();
    const obj="spaceship/scene.gltf"
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
    const p1 = [pos[0]-220, pos[1]-10, pos[2]+100] // left one
    const p2 = [pos[0]+100, pos[1]-30, pos[2] -80] // middle one
    const p3 = [pos[0]+100, pos[1]-10, pos[2]-300] // right one
    const p4 = [pos[0]-100, pos[1]-10, pos[2]-100] // right one
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

  export function Saturn({pos, ...props}) {
    // const obj="saturn/scene.gltf"
    // const image="sun/sun.jpeg"
    const obj="saturn2/scene.gltf"
    
    const mesh = useRef();
    // // const materialLoaded = useLoader(MTLLoader, mtl);
    // const texture = useLoader(TextureLoader, image)
    const object = useLoader(GLTFLoader, obj);

    useFrame(() => {
      // mesh.current.rotation.y -= 0.0005

    })
    useEffect(() => {
      // mesh.current.rotation.x = 0.006;
      mesh.current.rotation.z = 0.1;
    })
    return (
      <mesh
        ref={mesh}
        position={pos}
      >
        {/* <ambientLight intensity={0.5} /> */}
        <primitive object={object.scene} scale={11}/>
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
    const texture = useLoader(TextureLoader, 'glow3.png')
    return (
      <sprite scale={[50, 50, 0]}>
        <spriteMaterial map={texture} blending={AdditiveBlending} transparent={true} opacity={1}/>
      </sprite>
    )
  }