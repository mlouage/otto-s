import React from "react"
import { Link } from "gatsby"
import Logo from "../images/OTTOSLogo_Web.png"

const Navigation = () => (
    <div className="pl-8 pr-8 h-64 md:h-48 flex flex-col md:flex-row justify-center md:justify-between items-center bg-white text-black">
        <div className="p-4 md:p-0">
            <Link to="/">
                <img src={Logo} alt="Otto-s" />
            </Link>
        </div>
        <div className="uppercase font-bold tracking-widest">
            <ul className="h-full flex justify-between items-center">
                <li className="mr-4 md:mr-16"><Link className="hover:underline" to="/">Aanbod</Link></li>
                <li className="mr-4 md:mr-16"><Link className="hover:underline" to="/about">Over</Link></li>
                <li className="mr-2"><Link className="hover:underline" to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>

)

export default Navigation;
