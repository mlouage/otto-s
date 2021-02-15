import React from "react"
import map from "../images/contact_map.png"
import photo from "../images/contact_photo.jpg"

const ContactPage = () => {
  return (
    <>
      <div className="text-gray-600 uppercase tracking-wide text-sm">Contacteer ons</div>
      <h1 className="font-bold text-2xl mt-8">Heb je een vraag, aarzel niet om ons te contacteren.</h1>
      <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 lg:gap-32">
        <a href="https://www.google.be/maps/place/Kolmenstraat+1318,+3570+Alken,+België/@50.8891997,5.300293,17z/data=!3m1!4b1!4m5!3m4!1s0x47c118a1b15caf59:0x51029c645c8a5b27!8m2!3d50.8891963!4d5.3024817">
          <img className="mb-8 pt-3 hover:shadow-lg" src={map} alt="Contact" />
          <img className="mb-8 pt-3 hover:shadow-lg" src={photo} alt="Contact" />
        </a>
        <div className="leading-loose">
          <div className="font-bold text-xl">Bedrijfsgegevens</div>
          <div>Kolmenstraat 1318</div>
          <div>3570 Alken</div>
          <div>België</div>
          <div>BTW BE 076.051.1177</div>
          <div className="font-bold text-xl mt-4">Openingsuren</div>
          <div>Ma-Vr: 8:00- 12:00 / 13:00 - 18:00</div>
          <div className="mt-8"><span className="font-bold">T:</span> <a href="tel:0499149397" className="hover:text-primary hover:underline">0499 14 93 97</a></div>
          <div><span className="font-bold">E:</span> <a href="mailto:info@otto-s.be" className="hover:text-primary hover:underline">info@otto-s.be</a></div>
        </div>
      </div>
    </>
  )
}

export default ContactPage;
