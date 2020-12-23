import React from "react"
import map from "../images/map.png"

const ContactPage = () => {
  return (
    <>
      <div className="text-gray-600 uppercase tracking-wide text-sm">Contacteer ons</div>
      <h1 className="font-bold text-2xl mt-8">Heb je een vraag, aarzel niet om ons te contacteren.</h1>
      <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 lg:gap-32">
        <a href="https://www.google.com/maps/place/Kolmenstraat+1315,+3570+Alken,+Belgi%C3%AB/@50.8888667,5.2991296,17z/data=!3m1!4b1!4m5!3m4!1s0x47c118a1c5bf1347:0x2eacbe10e87e4a42!8m2!3d50.8888667!4d5.3013183">
          <img className="mb-8 pt-3 hover:shadow-lg" src={map} alt="Contact" />
        </a>
        <div className="leading-loose">
          <div className="font-bold text-xl">Bedrijfsgegevens</div>
          <div>Kolmenstraat 1315</div>
          <div>3570 Alken</div>
          <div>Belgie</div>
          <div>BTW: BE 0000 000 000</div>
          <div className="font-bold text-xl mt-4">Openingsuren</div>
          <div>Ma-Vr: 8:00- 12:00 / 13:00 - 18:00</div>
          <div className="mt-8"><span className="font-bold">E:</span> <a href="mailto:info@otto-s.be" className="hover:text-primary hover:underline">info@otto-s.be</a></div>
        </div>
      </div>
    </>
  )
}

export default ContactPage;