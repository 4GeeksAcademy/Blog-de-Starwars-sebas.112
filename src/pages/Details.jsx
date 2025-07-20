import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Details = () => {
    const { category, uid } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
       fetch("https://www.swapi.tech/api/" + category + "/" + uid)
            .then(res => res.json())
            .then(data => setInfo(data.result.properties))
            .catch(err => console.error("Error cargando detalles:", err));
    }, [category, uid]);

    if (!info) return <div className="text-center mt-5">Loading...</div>;

    // Arreglo para mostrar campos relevantes según la categoría
    const getFieldsByCategory = () => {
        switch (category) {
            case "people":
                return [
                    { label: "Name", value: info.name },
                    { label: "Birth Year", value: info.birth_year },
                    { label: "Gender", value: info.gender },
                    { label: "Height", value: info.height },
                    { label: "Skin Color", value: info.skin_color },
                    { label: "Eye Color", value: info.eye_color }
                ];
            case "planets":
                return [
                    { label: "Name", value: info.name },
                    { label: "Climate", value: info.climate },
                    { label: "Population", value: info.population },
                    { label: "Orbital Period", value: info.orbital_period },
                    { label: "Rotation Period", value: info.rotation_period },
                    { label: "Diameter", value: info.diameter }
                ];
            case "vehicles":
                return [
                    { label: "Name", value: info.name },
                    { label: "Model", value: info.model },
                    { label: "Manufacturer", value: info.manufacturer },
                    { label: "Cost", value: info.cost_in_credits },
                    { label: "Crew", value: info.crew },
                    { label: "Passengers", value: info.passengers }
                ];
            default:
                return [{ label: "Name", value: info.name }];
        }
    };

    const imageCategory = category === "people" ? "characters" : category;
    const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${imageCategory}/${uid}.jpg`;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 text-center">
                    <img
                        src={imageUrl}
                        className="img-fluid rounded"
                        alt={info.name}
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <h1 className="mb-3">{info.name}</h1>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in justo eget justo vehicula volutpat. 
                        Praesent facilisis lorem a eros ultrices, nec accumsan nunc dignissim.
                    </p>
                </div>
            </div>

            <hr className="my-5" />

            <div className="row text-center">
                {getFieldsByCategory().map((item, index) => (
                    <div className="col-md-2" key={index}>
                        <h6 className="text-danger fw-bold">{item.label}</h6>
                        <p>{item.value || "n/a"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
