import { Link } from "react-router-dom";
import Logo from "../Logo";
import SvgImage from "../SvgImage";

export default function Navbar({ linkedin }) {
    return (
        <div className="flex justify-evenly items-center bg-blue-500 p-3 gap-4">
            <Logo />
            <Link to={linkedin} target="_blank" rel="noopener noreferrer">
                <SvgImage src="/linkedin-rounded-border-svgrepo-com.svg" alt="LinkedIn" />
            </Link>
        </div>
    )
};