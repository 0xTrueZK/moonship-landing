import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Wireframe globe with dots at vertices — inspired by MultiVM Labs */
function WireframeGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.Points>(null);

  const { positions, linePositions } = useMemo(() => {
    const radius = 2;
    const detail = 20;
    const geo = new THREE.IcosahedronGeometry(radius, detail);
    const posArray = geo.attributes.position.array as Float32Array;

    // Deduplicate vertices for dots
    const unique = new Map<string, THREE.Vector3>();
    for (let i = 0; i < posArray.length; i += 3) {
      const key = `${posArray[i].toFixed(3)},${posArray[i + 1].toFixed(3)},${posArray[i + 2].toFixed(3)}`;
      if (!unique.has(key)) {
        unique.set(key, new THREE.Vector3(posArray[i], posArray[i + 1], posArray[i + 2]));
      }
    }
    const dotPositions = new Float32Array(unique.size * 3);
    let idx = 0;
    unique.forEach((v) => {
      dotPositions[idx++] = v.x;
      dotPositions[idx++] = v.y;
      dotPositions[idx++] = v.z;
    });

    // Wireframe edges
    const wireGeo = new THREE.IcosahedronGeometry(radius, 3);
    const edgesGeo = new THREE.EdgesGeometry(wireGeo);
    const edgePositions = edgesGeo.attributes.position.array as Float32Array;

    geo.dispose();
    wireGeo.dispose();
    edgesGeo.dispose();

    return { positions: dotPositions, linePositions: edgePositions };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#0ea5e9" transparent opacity={0.12} />
      </lineSegments>

      {/* Dots at vertices */}
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.015} color="#0ea5e9" transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  );
}

/** Inner particle cloud that rotates opposite direction */
function InnerParticleCloud({ count = 300 }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spherical distribution inside the globe
      const r = 1.6 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.15;
      ref.current.rotation.z += delta * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#7c3aed" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

/** Outer sparse particles */
function OuterParticles({ count = 100 }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#0ea5e9" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.4} color="#0ea5e9" />
        <pointLight position={[-5, -5, 5]} intensity={0.2} color="#7c3aed" />
        <WireframeGlobe />
        <InnerParticleCloud />
        <OuterParticles />
      </Canvas>
    </div>
  );
};

export default Scene3D;
