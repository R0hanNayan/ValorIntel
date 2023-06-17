import React from "react";
import './agents.css';
import Data from './agentData';

function Agents() {
    return (
        <div className="agents section_padding" id="agents">
            <div className="agents-heading">
                <h1>Agents</h1>
            </div>
            <div className="agents-container">
                {Data.map(data => {
                    return (
                        <div className="agents-preview">
                            <img src={data.img} alt="Agent" />
                            <h4>{data.name}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Agents;