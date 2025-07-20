export async function GetPeople() {
    try {
        const response = await fetch("https://www.swapi.tech/api/people/");
        if (!response.ok) throw new Error("Error al obtener personajes");

        const data = await response.json();

        const detailedPeople = await Promise.all(
            data.results.map(async person => {
                const res = await fetch(person.url);
                if (!res.ok) throw new Error("Error en detalles de personaje");

                const details = await res.json();
                return {
                    ...person,
                    properties: details.result.properties
                };
            })
        );

        console.log("mi respuesta de getpeople", detailedPeople);
        return detailedPeople;
    } catch (error) {
        console.error("Error en GetPeople:", error);
        return [];
    }
}

export async function GetPlanets() {
    try {
        const response = await fetch("https://www.swapi.tech/api/planets/");
        if (!response.ok) throw new Error("Error al obtener planetas");

        const data = await response.json();

        const detailedPlanets = await Promise.all(
            data.results.map(async planet => {
                const res = await fetch(planet.url);
                if (!res.ok) throw new Error("Error en detalles del planeta");

                const details = await res.json();
                return {
                    ...planet,
                    properties: details.result.properties
                };
            })
        );

        console.log("mi respuesta de GetPlanets", detailedPlanets);
        return detailedPlanets;
    } catch (error) {
        console.error("Error en GetPlanets:", error);
        return [];
    }
}

export async function GetVehicles() {
    try {
        const response = await fetch("https://www.swapi.tech/api/vehicles/");
        if (!response.ok) throw new Error("Error al obtener vehículos");

        const data = await response.json();

        const detailedVehicles = await Promise.all(
            data.results.map(async vehicle => {
                const res = await fetch(vehicle.url);
                if (!res.ok) throw new Error("Error en detalles del vehículo");

                const details = await res.json();
                return {
                    ...vehicle,
                    properties: details.result.properties
                };
            })
        );

        console.log("mi respuesta de GetVehicles", detailedVehicles);
        return detailedVehicles;
    } catch (error) {
        console.error("Error en GetVehicles:", error);
        return [];
    }
}
