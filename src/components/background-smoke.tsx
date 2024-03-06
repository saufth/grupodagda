'use client'
import React from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, type Mesh } from 'three'
import { cn } from '@/lib/utils'

export default function BackgroundSmoke ({ children, className, ref, ...props }: React.ComponentPropsWithRef<'div'>) {
  const containerRef = React.useRef<HTMLDivElement>(null!)

  const NUM_PARTICLES = 200

  const Smoke = () => {
    const smokeMap = useLoader(TextureLoader, '/images/smoke.webp')
    const smokeRef = React.useRef(Array.from({ length: NUM_PARTICLES }, () => React.createRef<Mesh>()))

    React.useEffect(() => {
      smokeRef.current.forEach(particle => {
        particle.current?.position.set(
          Math.random() * 500 - 250,
          -100,
          Math.random() * 1000 - 100
        )
        particle.current?.rotateZ(Math.random() * Math.PI * 2)
      })
    })

    useFrame(() => {
      smokeRef.current.forEach(particle => {
        particle.current?.rotateZ(Math.random() * 0.002)
      })
    })

    return (
      <>
        {smokeRef.current?.map((particleRef, key) => (
          <mesh ref={particleRef} key={key}>
            <planeGeometry attach='geometry' args={[300, 300]} />
            <meshBasicMaterial map={smokeMap} transparent />
          </mesh>
        ))}
      </>
    )
  }

  return (
    <div className={cn('relative z-20', className)} ref={ref} {...props}>
      {children}
      <div className='w-full h-screen fixed top-0 -z-10 overflow-hidden' ref={containerRef}>
        <Canvas className='opacity-60'>
          <color attach='background' args={['#333333']} />
          <directionalLight position={[-1, 3, 1]} color='#FFFFFF' intensity={1} />
          <perspectiveCamera position={[0, 0, 10]} fov={75} near={0.1} far={100} />
          <Smoke />
        </Canvas>
      </div>
    </div>
  )
}
