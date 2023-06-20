import React from "react";
import Data from './weaponData';
import './weapons.css';

function Weapons() {
    return (
        <div className="weapons section_padding">
            <div className="weapons-heading">
                <h1>Weapons</h1>
            </div>
            <div className="weapons-container">
                {Data.map((data, index) => {
                    return (
                        <div>
                            <div className="weapons-preview">
                                <img src={data.img} alt="weapon" />
                                <h4>{data.name}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Weapons;