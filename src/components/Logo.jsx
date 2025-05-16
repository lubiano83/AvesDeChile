import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to={"/"}>
            <h1 className="text-xl text-white font-bold hover:text-gray-700">Aves de Chile</h1>
        </Link>
    )
};