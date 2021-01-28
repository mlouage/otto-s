import React from "react"

const Main = ({children}) => (
    <div className="bg-gray-100 flex-grow">
        <div className="ml-8 mr-8 pt-8 pb-8">
            {children}
        </div>

    </div>
)

export default Main;
