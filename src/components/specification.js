import React from "react"

const Specification = ({label, specification, unit}) => {
    return (
        <>
            {specification && 
                <>
                    <div className="text-gray-600 uppercase tracking-widest text-sm">{label}</div>
                    <div>{specification.toString().replace('/', ' / ')} {unit}</div>
                </>
            }
        </>
    )
}

export default Specification;