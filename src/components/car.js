import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import CarPassLogo from "../images/carpass.png";
import Specification from "./specification"

const Car = ({ vehicle }) => {

    const photos = vehicle.images.map(c => ({
        src: c,
        width: 4,
        height: 3
    }))

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const setDescription = () => ({ __html: vehicle.description });

    return (
        <>
            <div className="grid grid-cols-1 gap-0 md:grid-cols-1 md:gap-0 lg:grid-cols-4 lg:gap-8 xl:grid-cols-4 xl:gap-8">
                <div className="col-span-3">
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-0 lg:grid-cols-6 lg:gap-2 xl:grid-cols-6 xl:gap-2">
                        <div className="col-span-1 md:col-span-3 lg:col-span-6 xl:col-span-6">
                            <div className="text-gray-600 uppercase tracking-widest mt-4">{vehicle.brandName}</div>
                            <div className="font-bold text-xl mt-4">
                                {vehicle.modelName} {vehicle.version}
                            </div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Vermogen</div>
                            <div>{vehicle.horsePower} pk</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Kilometers</div>
                            <div>{new Intl.NumberFormat('nl-BE').format(vehicle.kilometers)} km</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Inschrijving</div>
                            <div>{vehicle.firstRegistration}</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">CO2</div>
                            <div>{vehicle.CO2Emissions} g/km</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Branstof</div>
                            <div>{vehicle.fuelType}</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Transmissie</div>
                            <div>{vehicle.gearBox}</div>
                        </div>
                        <div className="col-span-1 md:col-span-3 lg:col-span-6 xl:col-span-6 mt-4">
                            <img src={vehicle.images[0]} alt={vehicle.slug} />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 mt-4 text-center">
                    <div className="grid grid-cols-1">
                        <div className="bg-black p-8 text-white font-bold text-xl">
                            <span>{new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' }).format(vehicle.price)}</span>
                        </div>

                        <div className="bg-gray-300 p-8 border-t border-gray-400">
                            <div className="font-bold text-xl pb-4">Een vraag over deze wagen?</div>
                            <div className="mt-4 w-auto inline-block">
                                <div className="flex items-center bg-black p-2 border border-primary text-white pl-4 pr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>

                                    <div className="relative">
                                        <Link to="/contact">
                                            <span className="font-bold uppercase ">Contacteer ons</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-300 p-8 border-t border-gray-400">
                            <div className="pb-4">
                                <img src={CarPassLogo} alt="CarPass" />
                            </div>
                            <div className="mt-4 w-auto inline-block">
                                <Link className="flex items-center bg-black p-2 border border-primary text-white pl-4 pr-4" to={vehicle.carpassCheck}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>

                                    <div className="relative">
                                        <span className="font-bold uppercase ">Naar CarPass</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center grid justify-items-center grid-cols-1 gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-3 xl:gap-4">
                <div className="flex flex-col">
                    <div className="font-bold text-xxl mt-4 uppercase">Ongevalvrij</div>
                    <div className="text-gray-600 uppercase tracking-widest text-sm">krasvrij en volledige reiniging</div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xxl mt-4 uppercase">Volledig technisch nazicht</div>
                    <div className="text-gray-600 uppercase tracking-widest text-sm">én CarPass Check</div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xxl mt-4 uppercase">1 jaar garantie</div>
                    <div className="text-gray-600 uppercase tracking-widest text-sm">én Otto-s approved</div>
                </div>
            </div>

            <div className="mt-16 grid justify-items-stretch grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-4">
                <div>
                    <div className="font-bold text-xl mt-4 mb-4">Omschrijving</div>
                    <p dangerouslySetInnerHTML={setDescription()} />
                </div>
                <div>
                    <div className="font-bold text-xl mt-4 mb-4">Belangrijkste opties</div>
                    <ul>
                        {vehicle.options.map(option => <li key={option}>{option}</li>)}
                    </ul>
                </div>
                <div>
                    <div className="font-bold text-xl mt-4 mb-4">Technische specificaties</div>
                    <div className="grid grid-cols-2">
                        <Specification label="Carroserie" specification={vehicle.bodyStyle} />
                        <Specification label="Deuren" specification={vehicle.numberOfDoors} unit="deuren" />
                        <Specification label="Zitplaatsen" specification={vehicle.numberOfSeats} unit="zitplaatsen" />
                        <Specification label="Aandrijving" specification={vehicle.transmission} />
                        <Specification label="Transmissie" specification={vehicle.gearBox} />
                        <Specification label="Vermogen" specification={vehicle.horsePower} unit="pk"/>
                        <Specification label="Cylinders" specification={vehicle.numberOfCylinders} unit="cylinders" />
                        <Specification label="Cylinder-inhoud" specification={vehicle.cylinderCapacity} unit="cc" />
                        <Specification label="Gewicht" specification={vehicle.weight} unit="kg" />
                        <Specification label="CO2 uitstoot" specification={vehicle.CO2Emissions} unit="g/km" />
                        <Specification label="Emissie klasse" specification={vehicle.pollutionClassName} />
                        <Specification label="Metallic lak" specification={vehicle.colorMetallic === 1 ? "Ja" : "Nee"} />
                        <Specification label="Kleur" specification={vehicle.mainColor} />
                        <Specification label="Interieur" specification={vehicle.interiorMaterial} />
                        <Specification label="Interieur hoofdkleur" specification={vehicle.interiorMainColor} />
                        <Specification label="Interieur 2de kleur" specification={vehicle.interiorSecondaryColor} />
                        <Specification label="BTW aftrekbaar" specification={vehicle.VATdeductible ? "Ja" : "Nee"} />
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </>
    )
}


export default Car;
