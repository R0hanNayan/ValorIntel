import React, { useState } from "react";
import './agents.css';
import Data from './agentData';
import AgentCard from "../../container/agent/AgentCard";

function Agents() {
    const [visible, setVisible] = useState(false);
    const [clickedId, setClickedId] = useState("");

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
                            <div className="agents-preview" onClick={() => { setClickedId(data.name); setVisible(true) }}>
                                <img src={data.img} alt="Agent" />
                                <h4>{data.name}</h4>
                            </div>
                        </div>
                    )
                })}
                {Data.filter(data => data.name === clickedId).map(agent => {
                    return (<div className="card">
                        {visible &&
                            <AgentCard
                                key={agent.name}
                                toggleClick={handleClick}
                                name={agent.name}
                                role={agent.role}
                                A1={agent.A1}
                                A2={agent.A2}
                                A3={agent.A3}
                                A4={agent.A4}
                                A1_img={agent.A1_img}
                                A2_img={agent.A2_img}
                                A3_img={agent.A3_img}
                                A4_img={agent.A4_img}
                            />
                        }
                    </div>)
                })
                }
            </div>

        </div>
    );
}

export default Agents;