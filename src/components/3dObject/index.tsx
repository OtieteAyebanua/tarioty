import { OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";

export const ThreeDimensionalObject = () => {
  return (
    <Canvas style={{ background: "#ffffff" }}>
      <BackgroundGeometry />
      <BoxGeometry />
    </Canvas>
  );
};

const BackgroundGeometry = () => {
  return (
    <mesh>
      <planeGeometry args={[100, 10]} /> <meshPhongMaterial />
      <directionalLight
        position={[5, 5, 6]}
        intensity={5}
        color="#212536"
        castShadow
      />
    </mesh>
  );
};

const BoxGeometry = () => {
  const [controlledObject, setControlledObject] = useState(null);
  const meshRef = useRef<any>();
  function handleControlStart(event:any) {
    event.stopPropagation();
    setControlledObject(meshRef.current);
  }

  // These functions can be expanded as needed, for now they log the event
  function handleControlMove(event:any) {
    // For now, this is a placeholder
    console.log("Object is being moved", event);
  }

  function handleControlEnd(event:any) {
    // Reset or handle end of control, for now just logs
    console.log("Control ended", event);
  }
  return (
    <TransformControls>
      <mesh
        ref={meshRef}
        onPointerDown={handleControlStart}
        onPointerMove={handleControlMove}
        onPointerUp={handleControlEnd}
        position={[0, 0, 0.8]}
        castShadow
      >
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </TransformControls>
  );
};
