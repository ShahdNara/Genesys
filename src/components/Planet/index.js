import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Vector3, Object3D} from 'three'
import { Particles, Asteroid, Planet, Saturn, Blackhole, Spaceships } from "./objects"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";



const positions = {
	    0: [-500, 0, 0], //mars
	    1: [200,100,400], //saturn
	    // 1: {position:[-30, 3, -17]},
	    2: [-1100, 100, 10], //spaceships
	    3: [-200,80,380],
	    4: [0, 0, 1200]
	}

const cam_pos = {
	// 0: {position:[0, 0, 300]},
	0: {position:[-500, 2.9, 3.8]},
	1: {position:[-503, 2.7, 5]},
	2: {position:[150,80,480]},
	3: {position:[-200,80,680]},
	4: {position:[0, 0, 1210]},
	5: {position:[0, 0, 310]}
}




// Return the view, these are regular Threejs elements expressed in JSX
export const Scene = props => {
	const [spaceship, setSpaceship] = useState()
	const [toggle, setToggle] = useState(false)
	const counter = useRef(0);

	const updatePos = (pos) => {
		setSpaceship(pos)
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
		  counter.current += 1;
		  setToggle(!toggle)
		}, 6000);
	
		return () => {
		  clearTimeout(timeout);
		};
	  }, [toggle]);

	function Cam({tab}) {
		useFrame(({camera}) => {
			const pos = cam_pos[tab].position
			if (tab != 3) {
				camera.position.lerp(new Vector3(...pos), 0.05)
				camera.fov = 50
			}
			else {
				camera.position.lerp(new Vector3(...[toggle ? spaceship.x+100:spaceship.x+500, toggle ? spaceship.y+50: spaceship.y+20,toggle ? spaceship.z+300 : spaceship.z+100]), 0.003)
				camera.fov = 50
			}
			camera.updateProjectionMatrix()
		})
		return(<></>)
	}

	return(
		<Canvas>
			<Cam tab={props.tab}/>
			<ambientLight intensity={0.005} />
			<directionalLight position={[-50, 0, -12]} intensity={1.4} color="#EEC787" />
			<Planet name="mars" pos={positions[0]} />
			<Saturn pos={positions[1]} />
			<Spaceships pos={positions[2]} updatePos={updatePos}/>
			{/* <Planet name="moon" pos={positions[1]} /> */}
			{/* <Blackhole pos={positions[1]} /> */}
			{/* <Planet name="sun" pos={positions[2]} /> */}
			{/* <Planet name="jupiter" pos={positions[3]} />
			<Planet name="neptune" pos={positions[4]} /> */}
		</Canvas>
	  )
}

