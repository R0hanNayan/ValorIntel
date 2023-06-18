import React, { useState } from "react";
import './agents.css';
import Data from './agentData';
import AgentCard from "../../container/agent/AgentCard";

function Agents() {

    const [visible, setVisible] = useState(false);

    function handleClick() {
        setVisible(!visible);
    }

    return (
        <div className="agents section_padding" id="agents">
            <div className="agents-heading">
                <h1>Agents</h1>
            </div>
            <div className="agents-container">
                {Data.map((data, index) => {
                    return (
                        <div>
                            <div className="agents-preview" onClick={() => { setVisible(true) }}>
                                <img src={data.img} alt="Agent" />
                                <h4>{data.name}</h4>
                            </div>
                            <div className="card">
                                {visible &&
                                    <AgentCard
                                        key={index + data.name}
                                        toggleClick={handleClick}
                                        name={data.name}
                                        role={data.role}
                                        A1={data.A1}
                                        A2={data.A2}
                                        A3={data.A3}
                                        A4={data.A4}
                                        A1_img={data.A1_img}
                                        A2_img={data.A2_img}
                                        A3_img={data.A3_img}
                                        A4_img={data.A4_img}
                                    />
                                }
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    );
}

export default Agents;