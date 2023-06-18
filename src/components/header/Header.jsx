import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Raze from './Raze';
import './header.css';

function Header() {
    return (
        <div className="header section_padding" id="home">
            <div className="header-container-content">
                <h1>Valorant</h1>
                <h4>A 5v5 character-based tactical shooter</h4>
                <h2>ValorIntel</h2>
                <p>Welcome to ValorIntel, your ultimate resource for everything related to agents, guns, and maps in the exhilarating world of Valorant. Stay up to date with the latest patch notes, balance changes, and meta shifts. </p>
                <div className="header-btn">
                    <a style={{ textDecoration: "none" }} href="#agents">Get Started</a>
                </div>
            </div>

            <div className="header-model">
                <Canvas className="canvas">
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1}/>
                    <Suspense fallback={null}>
                        <Raze rotation={[0.1, -0.6, 0]} position={[0, -1.2, 0]} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}

export default Header;