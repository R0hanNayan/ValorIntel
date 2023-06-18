import React from 'react';
import "./agentCard.css";

function AgentCard(props) {
    return (
        <div className="card">
            <div className='card-content'>
                <h1>{props.name}</h1>
                <h4>Role: {props.role}</h4>
                <div className='card-ability'>
                    <img src={(props.A1_img).default} alt='Ability' />
                    <p>{props.A1}</p>
                </div>
                <div className='card-ability'>
                    <img src={props.A2_img.default} alt='Ability' />
                    <p>{props.A2}</p>
                </div>
                <div className='card-ability'>
                    <img src={props.A3_img.default} alt='Ability' />
                    <p>{props.A3}</p>
                </div>
                <div className='card-ability'>
                    <img src={props.A4_img.default} alt='Ability' />
                    <p>{props.A4}</p>
                </div>
                <div className='card-closeBtn'>
                    <button type='button' onClick={props.toggleClick}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default AgentCard;