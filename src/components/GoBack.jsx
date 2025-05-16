import { Link } from "react-router-dom";
import Boton from "./Boton";

export default function GoBack({ path }) {
    return (
        <Link to={path}>
            <Boton>Volver</Boton>
        </Link>
    )
};