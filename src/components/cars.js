import React from "react"
import useImageGalleryConfig from "../hooks/useImageGalleryConfig"
import ImageGallery from "react-image-gallery"
import { Link } from "gatsby";

const Cars = ({data}) => {
    var config = useImageGalleryConfig;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
            {data.map(car => {
                var images = car.autoscout24Images.map(c => ({
                    original: c
                }
                ));
                return (
                    <div key={car.slug}>
                        <ImageGallery items={images} {...config} />
                        <div className="text-gray-600 uppercase tracking-widest mt-4">{car.brandName}</div>

                        <div className="font-bold text-xl mt-4">
                            <Link to="details?car=1234">{car.modelName} {car.version}</Link>
                        </div>

                        <div className="grid grid-cols-3 mt-4">
                            <div>
                                <div className="text-gray-600 uppercase tracking-widest text-xs sm:text-sm">Inschrijving</div>
                                <div>{car.firstRegistration}</div>
                            </div>
                            <div>
                                <div className="text-gray-600 uppercase tracking-widest text-xs sm:text-sm">Km-stand</div>
                                <div>{ car.kilometers }</div>
                            </div>
                            <div>
                                <div className="text-gray-600 uppercase tracking-widest text-xs sm:text-sm">Vermogen</div>
                                <div>{car.horsePower} pk</div>
                            </div>
                        </div>

                        <div className="font-bold text-2xl mt-4">
                            <div>{new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' }).format(car.price)}</div>
                        </div>

                        <div className="mt-4 w-auto inline-block">
                            <Link className="flex items-center bg-black p-2 border border-primary text-white pl-4 pr-4" to={car.slug}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>

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
