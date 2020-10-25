import React from "react"
import { Link } from "gatsby"
import Logo from "../images/Logo_2.png"

const Navigation = () => (
    <div className="pl-8 pr-8 h-32 flex justify-between items-center bg-black text-white">
        <div>
            <img src={Logo} alt="Otto-s" />
        </div>
        <div className="uppercase font-bold tracking-widest">
            <ul className="h-full flex justify-between items-center">
                <li className="mr-16"><Link to="/">Aanbod</Link></li>
                <li className="mr-16"><Link to="/about">Over ons</Link></li>
                <li className="mr-10"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>

)

export default Navigation;