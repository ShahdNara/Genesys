import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber'

import { Belt, Asteroid, Planet, Saturn, Blackhole, Spaceships, Sun, Spacestation } from "./objects"

import ExtendedCameraControls from './ExtendedCameraControls'

const positions = {
	0: [0, 11, 0], // Sun
	1: [0, 0, 105], // Mars
	2: [0, 50, 240], // Spaceships
	3: [-800, 300, 240], // Spacestation
	4: [-2290, 1829, 180] // Saturn
}

// Return the view, these are regular Threejs elements expressed in JSX
export const Scene = props => {
	const [spaceship, setSpaceship] = useState()
	const [toggle, setToggle] = useState(false)
	const counter = useRef(0);
	const mesh = useRef();

	const findSpaceships = (pos) => {
		setSpaceship(pos)
	}


	return(
		<Canvas>
			<ExtendedCameraControls tab={props.tab} spaceship={spaceship}/>
			<directionalLight position={[-5, 50, -100]} intensity={1.4} color="#EEC787" />
			<Sun pos={positions[0]} radius={4}/>
			<Planet name="mars" pos={positions[1]} scale={4} />
			<Spaceships pos={positions[2]} updatePos={findSpaceships} resetOnTab={props.tab}/>
			<Spacestation pos={positions[3]} resetOnTab={props.tab}/>
			{/* <Belt center={positions[5]} number={10} r_max={50} r_min={10}/> */}
			<Saturn pos={positions[4]} resetOnTab={props.tab}/>
			
		</Canvas>
	  )
}

