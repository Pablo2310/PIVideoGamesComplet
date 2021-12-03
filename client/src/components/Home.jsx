import React, { Fragment } from "react";
import {/*useState,*/useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGames} from '../actions';
import { Link } from 'react-router-dom'
import Card from "./Card";

export default function Home(){

    const dispatch = useDispatch()
    const allGames = useSelector ((state) => state.games)

    useEffect (() => {
    dispatch(getGames());
},[dispatch])

function handleClick(e){
    e.preventDefault();
    dispatch(getGames());
    //resetea en caso de bug, y trae todo de nuevo
}

// function juanpi ( allgames){
//     if(!allGames){
//     return console.log("estoy vacio como tu esperanza de aprobar")
//     }}
// juanpi()

return (
    <div>
        <Link to= '/videogame'> Agregar un video juego </Link>
        <h1>Video juegos</h1>
        <button onClick= {e=> {handleClick(e)}}>
            Volver a cargar todos los personajes
        </button>
        <div>
            <select>
                <option value= 'all'>Todos</option>
                <option value= 'asc'>Ascendente Nombre</option>
                <option value= 'desc'>Descendente Nombre</option>
            </select>
            <select>
                <option value= 'asc'>Ascendente ID</option>
                <option value= 'desc'>Descendente ID</option>
            </select>
            <select>
                <option value= 'all'>Todos</option>
                <option value= 'db'>DB</option>
                <option value= 'api'>API</option>
            </select>
            <select>
                <option value= 'genr'>Genero</option>
            </select>
        
        { 
            allGames?.map( (c) => {
                return (
                    <Fragment>
               <Link to={"/home" + c.id}>
                    <Card name= {c.name} /*description={c.description} released={c.released} rating={c.rating} platforms={c.platforms} image={c.img} Genr={c.Genr}*//>)
                </Link>
                    </Fragment>
                        )
                                })
        
        
            //    allGames && allGames.map( c=> {
        //     <Card name={c.name} />
        //    })

        }
        </div>
    </div>
)

}
