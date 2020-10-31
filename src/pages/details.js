import React from "react"
import { useLocation } from "@reach/router";
import queryString from "query-string";

const DetailsPage = () => {
    const location = useLocation();

    console.log(location);

    const carQueryString = queryString.parse(location.search);
    const { car } = carQueryString;
    
    return (
        <>
            Details for {car}
        </>
    )
}

export default DetailsPage;