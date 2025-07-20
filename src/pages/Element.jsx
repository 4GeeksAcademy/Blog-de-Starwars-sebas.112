import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {Createcard} from "../components/Createcard.jsx"
import { GetPeople, GetPlanets } from "../services/ApiFetch.js";
import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";



export const Element = () => {
		const {elementType, elementId} = useParams()
		const [data, setData] = useState ({})
		useEffect(()=>{
			if (!["planets", "characters"] .includes(elementType.toLowerCase())) {
				setData({error:"tipo de elemento invalido"})
				return
			}
			//. hacer aqui el fetch
			setData ({mensaje:"consultando haciendo fetch"})
		},[elementId, elementType])
  
	
	return (
		<div className="text-center mt-5">
			<p>Element Type:{elementType}</p>
			<p>Element Id:{elementId}</p>
			<pre>{JSON.stringify(data)}</pre>
			<img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${elementType.toLowerCase()}/${elementId}.jpg`}></img>
			</div> )

}