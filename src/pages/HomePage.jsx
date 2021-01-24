import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Environment } from 'drei';
import './ring.css';
import { Ring } from '../components/Ring';

export const HomePage = () => {
  console.log('homePage');
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <Link to="/table">
        <button>Route to the table</button>
      </Link>
      <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 2.75] }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <React.Suspense fallback={null}>
          <Ring />
          <Environment files="royal_esplanade_1k.hdr" />
        </React.Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={true}
          enablePan={false}
        />
      </Canvas>
    </>
  );
};
