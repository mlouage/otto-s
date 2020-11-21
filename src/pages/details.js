import React from "react"
import { useLocation } from "@reach/router";
import queryString from "query-string";

import Car from "../components/car"

const DetailsPage = () => {
    const location = useLocation();

    const carQueryString = queryString.parse(location.search);
    const { car } = carQueryString;
    
    return (
        <>
            <Car />
        </>
    )
}

export default DetailsPage;