import React from "react"
import useAllCars from "../hooks/useAllCars"
import Slideshow from "./slideshow"

const Cars = () => {
    const cars = useAllCars();
    const carsToDisplay = [];

    for (const car in cars) {
        carsToDisplay.push(cars[car])
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {carsToDisplay.map(car => (
                <Slideshow key={car[0].name} slideImages={car} />
            ))}
        </div>
    )
}

export default Cars;