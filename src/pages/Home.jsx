import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Createcard } from "../components/Createcard.jsx";
import { GetPeople, GetPlanets, GetVehicles } from "../services/ApiFetch.js";
import { useEffect } from "react";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        GetPeople().then(data => dispatch({ type: 'get_people', payload: data }));
        GetPlanets().then(data => dispatch({ type: 'get_planets', payload: data }));
        GetVehicles().then(data => dispatch({ type: 'get_vehicles', payload: data }));
    }, []);

    return (
        <div className="container mt-5 text-center">

            {/* Personajes */}
            <h1 className="mb-3">Personajes</h1>
            <div className="d-flex overflow-x-auto gap-3 pb-3">
                {Array.isArray(store.people) && store.people.map(character => (
                    <Createcard
                        key={character.uid}
                        name={character.name}
                        uid={character.uid}
                        category="people"
                    />
                ))}
            </div>

            {/* Planetas */}
            <h1 className="mb-3">Planetas</h1>
            <div className="d-flex overflow-x-auto gap-3 pb-3">
                {Array.isArray(store.planets) && store.planets.map(planet => (
                    <Createcard
                        key={planet.uid}
                        name={planet.name}
                        uid={planet.uid}
                        category="planets"
                    />
                ))}
            </div>

            {/* Vehículos */}
            <h1 className="mb-3">Vehículos</h1>
            <div className="d-flex overflow-x-auto gap-3 pb-5">
                {Array.isArray(store.vehicles) && store.vehicles.map(vehicle => (
                    <Createcard
                        key={vehicle.uid}
                        name={vehicle.name}
                        uid={vehicle.uid}
                        category="vehicles"
                    />
                ))}
            </div>

        </div>
    );
};
