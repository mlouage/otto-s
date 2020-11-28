import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import useAllCars from "../hooks/useAllCars";

const Car = () => {

    const cars = useAllCars();
    const carsToDisplay = [];
    let photos = [];

    carsToDisplay.push(cars["kfz63354356"]);

    carsToDisplay.map(car => {
        photos = car.map(c => ({
            src: c.publicURL,
            width: 4,
            height: 3
        }))
    });

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

    return (
        <>
            <div className="grid grid-cols-1 gap-0 md:grid-cols-1 md:gap-0 lg:grid-cols-4 lg:gap-8 xl:grid-cols-4 xl:gap-8">
                <div className="col-span-3">
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-0 lg:grid-cols-6 lg:gap-2 xl:grid-cols-6 xl:gap-2">
                        <div className="col-span-1 md:col-span-3 lg:col-span-6 xl:col-span-6">
                            <div className="text-gray-600 uppercase tracking-widest mt-4">Porsche</div>
                            <div className="font-bold text-xl mt-4">
                                Macan FACELIFT 2.0 Turbo PDK Nappa Leder Memory
                        </div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Vermogen</div>
                            <div>462 pk</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Km-stand</div>
                            <div>47 373 km</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Inschrijving</div>
                            <div>08/2018</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">CO2</div>
                            <div>72 g/km</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Branstof</div>
                            <div>Benzine</div>
                        </div>
                        <div className="col-span-1 mt-4">
                            <div className="text-gray-600 uppercase tracking-widest text-sm">Transmissie</div>
                            <div>Automaat</div>
                        </div>
                        <div className="col-span-1 md:col-span-3 lg:col-span-6 xl:col-span-6 mt-4">
                            <img src="/static/77e184939cd1f8f52289b2844bf4f8ba/xxl_kfz63354356_img_9845.jpg" />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 mt-4">
                    <div className="grid grid-cols-1">
                        <div className="bg-black p-8 text-white font-bold text-xl">
                            <span>€ 84 900 <span className="pl-2 font-normal tracking-widest text-sm">BTW inclusief</span></span>
                        </div>
                        <div className="bg-gray-300 p-8">
                            <div className="font-bold text-xl pb-4">Deze wagen kopen?</div>
                            <div className="mt-4 w-auto inline-block">
                                <Link className="flex items-center bg-black p-2 border border-primary text-white pl-4 pr-4" to="details?car=1234">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>

                                    <div className="relative">
                                        <span className="font-bold uppercase ">Koop nu</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-300 p-8 border-t border-gray-400">
                            <div className="font-bold text-xl pb-4">Een vraag over deze wagen?</div>
                            <div className="mt-4 w-auto inline-block">
                                <Link className="flex items-center bg-black p-2 border border-primary text-white pl-4 pr-4" to="details?car=1234">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>

                                    <div className="relative">
                                        <span className="font-bold uppercase ">Contacteer ons</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-300 p-8 border-t border-gray-400">
                            <div className="font-bold text-xl pb-4">Bereken wat jouw wagen nog waard is</div>
                            <div className="mt-4 w-auto inline-block">
                                <Link className="flex items-center bg-black p-2 border border-primary text-white pl-4 pr-4" to="details?car=1234">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>

                                    <div className="relative">
                                        <span className="font-bold uppercase ">Bereken waarde</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center grid justify-items-center grid-cols-1 gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-4 xl:gap-4">
                <div className="flex flex-col">
                    <div className="font-bold text-xxl mt-4 uppercase">2995cc - 462pk</div>
                    <div className="text-gray-600 uppercase tracking-widest text-sm">47 373 km</div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xxl mt-4 uppercase">Ongevalvrij</div>
                    <div className="text-gray-600 uppercase tracking-widest text-sm">krasvrij en volledige reiniging </div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xxl mt-4 uppercase">Full service historiek</div>
                    <div className="text-gray-600 uppercase tracking-widest text-sm">én volledig technisch nazicht </div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-xxl mt-4 uppercase">1 jaar garantie</div>
                    <div className="text-gray-600 uppercase tracking-widest text-sm">én Ottos approved </div>
                </div>
            </div>

            <div className="mt-16 grid justify-items-stretch grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-4">
                <div>
                    <div className="font-bold text-xl mt-4 mb-4">Omschrijving</div>
                    <p>
                        ...
                </p>
                </div>
                <div>
                    <div className="font-bold text-xl mt-4 mb-4">Belangrijkste opties</div>
                    <ul>
                        <li>Actieve Cruise Control incl Radar</li>
                        <li>Porsche Active Safe Noodremassistent</li>
                        <li>Rijstrookwisselassistent / Dode Hoek Assistent</li>
                        <li>...</li>
                    </ul>
                </div>
                <div>
                    <div className="font-bold text-xl mt-4 mb-4">Technische specificaties</div>
                    <div className="grid grid-cols-2">
                        <div className="text-gray-600 uppercase tracking-widest text-sm">Deuren</div>
                        <div>5 deuren</div>
                        <div className="text-gray-600 uppercase tracking-widest text-sm">Zitplaatsen</div>
                        <div>5 zitplaatsen</div>
                        <div className="text-gray-600 uppercase tracking-widest text-sm">Cylinder</div>
                        <div>6 cylinders</div>
                        <div className="text-gray-600 uppercase tracking-widest text-sm">Versnellingen</div>
                        <div>8 versnellingen</div>
                        <div className="text-gray-600 uppercase tracking-widest text-sm">4x4</div>
                        <div>Ja</div>
                        <div className="text-gray-600 uppercase tracking-widest text-sm">...</div>
                        <div>...</div>
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