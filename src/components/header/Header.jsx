import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Raze from './Raze';
import './header.css';

function Header() {
    return (
        <div className="Header" id="home">
            <div className="header-container-content">
                <h1>Valorant</h1>
                <h4>A 5v5 character-based tactical shooter</h4>
                <h2>ValorIntel</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="header-btn">
                <a style={{ textDecoration: "none", color: "inherit" }} href="#agents"><buton type="button">Get Started</buton></a>
            </div>
            <div className="header-model">
                <Canvas>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <Raze />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}

export default Header;