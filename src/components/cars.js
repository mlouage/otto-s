import React from "react"
import useAllCars from "../hooks/useAllCars"

const Cars = () => {
    const cars = useAllCars();
    
    return (
        <div>
            {cars.map((car) => (
                <pre key={car}>{car}</pre>
            ))}
        </div>
    )
}

export default Cars;