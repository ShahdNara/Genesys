import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Vector3, Object3D} from 'three'
import { Particles, Asteroid, Planet, Saturn, Blackhole, Spaceships, Sun } from "./objects"
import CameraControls from "camera-controls"
import * as THREE from 'three'
import ExtendedCameraControls from './ExtendedCameraControls'
// CameraControls.install({ THREE })
// extend({ CameraControls })

// const positions = {
// 	    0: [-500, 0, 0], //mars
// 	    1: [200,100,400], //saturn
// 	    // 1: {position:[-30, 3, -17]},
// 	    2: [-1100, 100, 10], //spaceships
// 	    3: [-200,80,380],
// 	    4: [0, 0, 1200]
// 	}

// const cam_pos = {
// 	// 0: {position:[0, 0, 300]},
// 	0: {position:[-500, 2.9, 3.8]},
// 	1: {position:[-503, 2.7, 5]},
// 	2: {position:[150,80,480]},
// 	3: {position:[-200,80,680]},
// 	4: {position:[0, 0, 1210]},
// 	5: {position:[0, 0, 310]}
// }

const positions = {
	0: [0, 11, 0], // Sun
	1: [0, 0, 100], // Mars
	2: [0, 50, 140], // Spaceships
	3: [-50, 180, 180], // Spacecraft
	4: [-200, 300, 380] // Saturn
}

// function CamControls({tab}) {
// 	const ref = useRef()
// 	const { camera, gl } = useThree()
// 	useFrame((state, delta) => {
// 		if (ref.current) {
// 			ref.current.update(delta)
// 		}
// 		// ref.current.moveTo(pos[0], pos[1], pos[2], true)
// 	})
// 	return <cameraControls ref={ref} args={[camera, gl.domElement]} />
//   }


// Return the view, these are regular Threejs elements expressed in JSX
export const Scene = props => {
	const [spaceship, setSpaceship] = useState()
	const [toggle, setToggle] = useState(false)
	const counter = useRef(0);
	const mesh = useRef();

	const findSpaceships = (pos) => {
		setSpaceship(pos)
	}

	// useEffect(() => {
	// 	const pos = cam_pos[props.tab]
	// 	}, [props.tab]);

	// useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 	  counter.current += 1;
	// 	  setToggle(!toggle)
	// 	}, 6000);
	
	// 	return () => {
	// 	  clearTimeout(timeout);
	// 	};
	//   }, [toggle]);
	// function Cam2() {
	// 	const { camera } = useThree();
	// 	const controls = useRef(null);
	// 	React.useEffect(() => {
	// 		const pos = cam_pos[props.tab]
	// 		camera.lookAt(...pos);
	// 	}, [props.tab]);
	// 	return (
	// 		<CamControls ref={controls} />
	// 	)
	// }
	// function Cam({tab}) {
	// 	useFrame(({camera}) => {
	// 		const pos = cam_pos[tab]
	// 		camera.position.lerp(new Vector3(...pos), 0.05)
	// 		camera.fov = 50
	// 		if (tab == 1) {
	// 			camera.rotation.set([deg2rad(30), 0, 0])
				
	// 		}
	// 		else camera.rotation.set(0, 0, 0)
	// 		camera.updateProjectionMatrix()
	// 	})
	// 	return(<></>)
	// }

	return(
		<Canvas>
			{/* <Cam tab={props.tab}/> */}
			{/* <CameraControls /> */}
			{/* <ambientLight intensity={0.005} /> */}
			<ExtendedCameraControls tab={props.tab} spaceship={spaceship}/>
			<directionalLight position={[-5, 50, -100]} intensity={1.4} color="#EEC787" />
			<Sun pos={positions[0]} radius={4}/>
			{/* <pointLight color="#EEC787" intensity={8} position={[positions[0][0], positions[0][1], positions[0][2] +30]} shadow={false}/> */}
			{/* <pointLight color="#EEC787" intensity={8} position={[positions[0][0], positions[0][1]-5, positions[0][2] -30]}  shadow={false}/>
			<pointLight color="#EEC787" intensity={8} position={[positions[0][0], positions[0][1]-10, positions[0][2] +10]} shadow={false}/> */}
			<Planet name="mars" pos={positions[1]} scale={4} />
			<Spaceships pos={positions[2]} updatePos={findSpaceships} resetOnTab={props.tab}/>
			{/* <Saturn pos={positions[4]} /> */}
			
		</Canvas>
	  )
}

