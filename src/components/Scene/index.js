import React, { useRef, useState } from 'react'
import { Canvas} from '@react-three/fiber'

import { Planet, Saturn, Spaceships, Sun, Spacestation } from "./objects"

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
			<Saturn pos={positions[4]} resetOnTab={props.tab}/>
			
		</Canvas>
	  )
}

