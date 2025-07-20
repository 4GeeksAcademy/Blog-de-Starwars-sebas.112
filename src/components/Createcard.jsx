import { Link } from "react-router-dom";
import React from "react";
import NewImagen from "../assets/NewImagen.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Createcard = ({ name, category, uid }) => {
    const imageCategory = category === "people" ? "characters" : category;
    const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${imageCategory}/${uid}.jpg`;

    const { store, dispatch } = useGlobalReducer();

    const info = store[category]?.find(item => item.uid === uid)?.properties || {};

    const addFavorite = () => {
        dispatch({
            type: "add_favorite",
            payload: {
                name,
                id: name + uid,
                category,
                uid
            }
        });

        setTimeout(() => {
            const dropdownMenu = document.getElementById("favoritesDropdownMenu");
            if (dropdownMenu && !dropdownMenu.classList.contains("show")) {
                dropdownMenu.classList.add("show");
            }
        }, 100);
    };

    const renderInfo = () => {
        if (category === "people") {
            return (
                <>
                    <p><strong>Gender:</strong> {info.gender || "n/a"}</p>
                    <p><strong>Hair Color:</strong> {info.hair_color || "n/a"}</p>
                    <p><strong>Eye-Color:</strong> {info.eye_color || "n/a"}</p>
                </>
            );
        }
        if (category === "planets") {
            return (
                <>
                    <p><strong>Climate:</strong> {info.climate || "n/a"}</p>
                    <p><strong>Population:</strong> {info.population || "n/a"}</p>
                    <p><strong>Terrain:</strong> {info.terrain || "n/a"}</p>
                </>
            );
        }
        if (category === "vehicles") {
            return (
                <>
                    <p><strong>Model:</strong> {info.model || "n/a"}</p>
                    <p><strong>Manufacturer:</strong> {info.manufacturer || "n/a"}</p>
                    <p><strong>Passengers:</strong> {info.passengers || "n/a"}</p>
                </>
            );
        }
    };

    return (
        <div className="col-lg-3 col-xl-2 col-md-4 col-sm-6">
            <div className="card shadow-sm h-100">
                <img
                    src={imageUrl === "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/planets/1.jpg" ? NewImagen : imageUrl}
                    className="card-img-top"
                    alt={name}
                    style={{ height: "200px", objectFit: "cover", objectPosition: "top" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{name}</h5>
                    {renderInfo()}
                    <div className="mt-auto d-flex justify-content-between">
                        <Link to={"/details/" + category + "/" + uid} className="btn btn-primary">
                            Learn more!
                        </Link>

                        <button onClick={addFavorite} className="btn btn-outline-warning">
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
