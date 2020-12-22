import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <div className="text-gray-600 uppercase tracking-wide text-sm">Niet gevonden</div>
    <h1 className="font-bold text-2xl mt-8">De pagina die je wou bezoeken bestaat niet</h1>
    <div className="leading-loose">
      De pagina die je wou bezoeken bestaat niet. Kijk gerust even verder in ons <Link className="underline" to="/">aanbod</Link>
    </div>
  </>
)

export default NotFoundPage
