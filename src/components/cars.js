import React from "react"
import { useAllCarImages } from "../hooks/useAllCars"

const Cars = () => {
    const cars = useAllCarImages();

    const images = [];

    cars.map(car => images.push(car.name))

    return (
        <div>
            <pre>Images</pre>
            {images.map((image) => (
                <pre key={image}>Image: {image}</pre>
            ))}
        </div>
    )
}

export default Cars;