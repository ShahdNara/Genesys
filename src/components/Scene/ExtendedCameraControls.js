import React, { forwardRef, useMemo, useImperativeHandle, useEffect } from 'react'
import * as THREE from 'three'
import { useThree, useFrame } from '@react-three/fiber'
import CameraControls from 'camera-controls'

CameraControls.install({ THREE })

const cam_pos = {
	0: [0, 12, 112], // Mars
	1: [-100, 12, 200], // Spaceships
  2: [-100, 12, 200], // Spaceships
	3: [-812, 302, 228], // Spacecraft
  4: [-880, 302, 228], // Blank space
	5: [-2590, 1825, -100] // Saturn
}

const ExtendedCameraControls = (props, ref) => {
  // const set = useThree((state) => state.set)
  const camera = useThree((state) => state.camera)
  const gl = useThree((state) => state.gl)
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), [camera])
  controls.azimuthRotateSpeed = 10
  // useImperativeHandle(ref, () => controls)
  useFrame((_state, delta) => {
    controls.update(delta)
  })
  useEffect(() => {
    // set({ controls })
    let position = cam_pos[props.tab]
    // console.log("position: ", position)
    controls.reset(true)
    
    if (props.tab == 0) {
      controls.moveTo(position[0], position[1], position[2], true)
      controls.rotate(0, 0, true)
    }
    if (props.tab == 1) {
      controls.moveTo(position[0], position[1], position[2], true)
      controls.rotate(180 * THREE.MathUtils.DEG2RAD, 0, true)
    }
    if (props.tab == 2) {
      controls.moveTo(position[0], position[1], position[2], true)
      controls.rotate(180 * THREE.MathUtils.DEG2RAD, 0, true)
    }
    if (props.tab == 3) {
      controls.moveTo(position[0], position[1], position[2], true)
      controls.rotate(170 * THREE.MathUtils.DEG2RAD, 0, true)
    }
    if (props.tab == 4) {
      controls.moveTo(position[0], position[1], position[2], true)
      controls.rotate(180 * THREE.MathUtils.DEG2RAD, 0, true)
    }
    if (props.tab == 5) {
      controls.moveTo(position[0], position[1], position[2], true)
      controls.rotate(180 * THREE.MathUtils.DEG2RAD, 0, true)
    }
    return () => controls.dispose()
  }, [controls, props.tab])
  return null
}

export default forwardRef(ExtendedCameraControls)
