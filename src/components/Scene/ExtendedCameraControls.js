import React, { forwardRef, useMemo, useImperativeHandle, useEffect } from 'react'
import * as THREE from 'three'
import { useThree, useFrame } from '@react-three/fiber'
import CameraControls from 'camera-controls'

CameraControls.install({ THREE })

const cam_pos = {
	// 0: [0, 20, 50], // Sun
	0: [0, 12, 112], // Mars
	1: [-100, 12, 115], // Spaceships
	2: [-50, 180, 230], // Spacecraft
	3: [-200, 300, 430] // Saturn
}

const deg2rad = degrees => degrees * (Math.PI / 180);
const DEG45 = Math.PI * 0.25;
const DEG90 = Math.PI * 0.5;
const DEG180 = Math.PI;

const ExtendedCameraControls = (props, ref: ((instance: CameraControls) => void) | React.RefObject<CameraControls> | null | undefined) => {
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
    controls.moveTo(position[0], position[1], position[2], true)
    if (props.tab == 0) {
      controls.rotate(0, 0, true)
    }
    if (props.tab == 1) {
      controls.rotate(180 * THREE.MathUtils.DEG2RAD, 0, true)
    }
    return () => controls.dispose()
  }, [controls, props.tab])
  return null
}

export default forwardRef(ExtendedCameraControls)
