import React from "react"
import useAllCars from "../hooks/useAllCars"

const Cars = () => {
    const cars = useAllCars();
    const carsToDisplay = [];

    for (const car in cars) {
        carsToDisplay.push({ name: cars[car][0].name, url: cars[car][0].publicURL})
    }

    return (
        <div>
            {carsToDisplay.map(car => (
                <pre key={car.name}>{car.name}, {car.url}</pre>
            ))}
        </div>
    )
}

export default Cars;