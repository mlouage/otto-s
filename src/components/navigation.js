import React from "react"
import { Link } from "gatsby"
import Logo from "../images/Logo_2.png"

const Navigation = () => (
    <div className="pl-8 pr-8 h-40 md:h-32 flex flex-col md:flex-row justify-center md:justify-between items-center bg-black text-white">
        <div  className="p-4 md:p-0">
            <Link to="/">
                <img src={Logo} alt="Ottos" />
            </Link>
        </div>
        <div className="uppercase font-bold tracking-widest p-4 md:p-0">
            <ul className="h-full flex justify-between items-center">
                <li className="mr-16"><Link to="/">Aanbod</Link></li>
                <li className="mr-16"><Link to="/about">Over</Link></li>
                <li className=""><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>

)

export default Navigation;