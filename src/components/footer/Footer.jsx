import { Link } from "react-router-dom";
import Logo from "../Logo";

export default function Footer({ derechos, email }) {
    return (
        <div className="flex justify-evenly items-center bg-blue-500 gap-1 flex-wrap-reverse p-4">
           <p className="text-white text-center">{derechos}</p>
           <Link to={`mailto:${email}`} className="text-center">
                <p className="text-white">Contacto: <span className="text-center">{email}</span></p>
            </Link>
            <Logo />
        </div>
    )
};