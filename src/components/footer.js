import React from "react"
import Logo from "../images/OTTOSLogo_Web_small.png"

const Footer = () => (
    <div className="bg-white p-8 text-black hover:shadow-xl">
        <img src={Logo} alt="Otto-s" />
        <div className="leading-loose">
            <div className="grid grid-cols-1 mt-8 md:grid-cols-2 md:gap-32">
                <div>
                    <div className="font-bold text-xl leading-none">Otto-s</div>
                    <div className="font-bold text-xl">met meer</div>
                    <div>Kolmenstraat 1318</div>
                    <div>3570 Alken</div>
                    <div>België</div>
                    <div>BTW BE 076.051.1177</div>
                </div>
                <div>
                    <div className="font-bold text-xl">Openingsuren</div>
                    <div className="md:flex md:flex-row">
                        <div className="md:pr-10">
                            <div>Maandag - vrijdag</div>
                            <div>08u00 - 12u00</div>
                            <div>13u00 - 18u00</div>
                        </div>
                        <div className="md:pr-10">
                            <div>Zaterdag</div>
                            <div>Op afspraak</div>
                        </div>
                        <div className="md:pr-10">
                            <div>Zondag</div>
                            <div>Gesloten</div>
                        </div>
                    </div>
                    <div><span className="font-bold">T:</span> <a href="tel:0499149397" className="hover:text-primary hover:underline">0499 14 93 97</a></div>
                    <div><span className="font-bold">E:</span> <a href="mailto:info@otto-s.be" className="hover:text-primary hover:underline">info@otto-s.be</a></div>
                </div>
            </div>
        </div>
    </div>
)

export default Footer;
