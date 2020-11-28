import React from "react"
import useAllCars from "../hooks/useAllCars"
import useImageGalleryConfig from "../hooks/useImageGalleryConfig"
import ImageGallery from "react-image-gallery"
import { Link } from "gatsby";

const Cars = () => {
    const cars = useAllCars();
    const carsToDisplay = [];

    for (const car in cars) {
        carsToDisplay.push(cars[car])
    }

    var config = useImageGalleryConfig;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
            {carsToDisplay.map(car => {
                var images = car.map(c => ({
                    original: c.publicURL
                }
                ));

                return (
                    <div>
                        <ImageGallery items={images} {...config} />
                        <div className="text-gray-600 uppercase tracking-widest mt-4">Porsche</div>

                        <div className="font-bold text-xl mt-4">
                            <Link to="details?car=1234">Macan FACELIFT 2.0 Turbo PDK Nappa Leder Memory</Link>
                        </div>

                        <div className="grid grid-cols-3 mt-4">
                            <div>
                                <div className="text-gray-600 uppercase tracking-widest text-xs sm:text-sm">Inschrijving</div>
                                <div>01/2019</div>
                            </div>
                            <div>
                                <div className="text-gray-600 uppercase tracking-widest text-xs sm:text-sm">Km-stand</div>
                                <div>38 556km</div>
                            </div>
                            <div>
                                <div className="text-gray-600 uppercase tracking-widest text-xs sm:text-sm">Vermogen</div>
                                <div>244pk</div>
                            </div>
                        </div>

                        <div className="font-bold text-2xl mt-4">
                            <div>€59 900,00<span className="pl-2 font-normal text-gray-600 tracking-widest text-sm">BTW inclusief</span></div>
                        </div>

                        <div className="mt-4 w-auto inline-block">
                            <Link className="flex items-center bg-black p-2 border border-primary text-white pl-4 pr-4" to="details?car=1234">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>

                                <div className="relative">
                                    <span className="font-bold uppercase ">meer informatie</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cars;