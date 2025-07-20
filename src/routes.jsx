// Import necessary components and functions from react-router-dom.
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Element } from "./pages/Element";
import { Details } from "./pages/Details";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>

            {/* Página principal */}
            <Route path="/" element={<Home />} />

            {/* Vista de detalles, se coloca ANTES de la ruta genérica */}
            <Route path="/details/:category/:uid" element={<Details />} />

            {/* Rutas adicionales */}
            <Route path="/single/:theId" element={<Single />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/:elementType/:elementId" element={<Element />} />

        </Route>
    )
);
