import React from "react"
import contact from "../images/contact.jpg"

const ContactPage = () => {
  return (
    <>
      <div className="text-gray-600 uppercase tracking-wide text-sm">Contacteer ons</div>
      <h1 className="font-bold text-2xl mt-8">Heb je een vraag, aarzel niet om ons te contacteren.</h1>
      <div className="grid grid-cols-2 gap-32 mt-8">
        <img src={contact} alt="Contact" />
        <div className="leading-loose">
          <div className="font-bold text-xl leading-none">Bedrijfsgegevens</div>
          <div>Kolmenstraat 1315</div>
          <div>3570 Alken</div>
          <div>Belgie</div>
          <div>BTW: BE 0000 000 000</div>
          <div className="font-bold text-xl mt-4">Openingsuren</div>
          <div>Ma-Vr: 8:30- 12:00 / 13:00 - 18:00</div>
          <div>Za: 10:00 - 13:00 namiddag op afspraak</div>
          <div className="mt-8"><span className="font-bold">T:</span> +32 473 22 45 23</div>
        </div>
      </div>
    </>
  )
}

export default ContactPage;