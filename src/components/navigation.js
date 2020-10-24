import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
    <>
        <h1>
            Navigation
        </h1>
        <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/about">Over ons</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </>

)

export default Navigation;