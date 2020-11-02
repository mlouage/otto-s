import React from "react"
import { useQuery } from "react-query"

const getVehicles = async () => {
  const response = await fetch('http://localhost:3000/vehicles');
  return response.json();
}

const ContactPage = () => {
  const { data, status } = useQuery("vehicles", getVehicles);

  return (
    <>
      Contact

      {status === "loading" && (
        <p>Loading...</p>
      )}

      {status === "error" && (
        <p>Error getting vehicles</p>
      )}

      {status === "success" && (
        <pre>{JSON.stringify(data, null, 4)}</pre>
      )}

    </>
  )
}

export default ContactPage;