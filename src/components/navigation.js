import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
    <div className="flex justify-between bg-black text-white">
        <div>
            Otto-s
        </div>
        <div>
            <ul className="flex justify-between">
                <li className="pr-4"><Link to="/">Index</Link></li>
                <li className="pr-4"><Link to="/about">Over ons</Link></li>
                <li className="pr-4"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>

)

export default Navigation;