import { Canvas } from '@react-three/fiber';
import { Stars, PerspectiveCamera } from '@react-three/drei';

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-[#0a0a0e] to-[#020205]">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        <Stars 
          radius={100} 
          depth={50} 
          count={1500} 
          factor={2} 
          saturation={0} 
          fade 
          speed={0.3} 
        />
      </Canvas>
    </div>
  );
}
