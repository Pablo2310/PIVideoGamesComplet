import React from "react";
import {Link} from 'react-router-dom';

export default function LandingPAge(){
    return (
        <div>
            <h1> Bienvenidos </h1>
            <Link to = '/home'>
                <button> Comenzar </button>
            </Link>


        </div>



    )
}