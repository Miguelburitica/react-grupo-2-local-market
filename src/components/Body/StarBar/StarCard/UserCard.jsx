import React from "react"

function UserCard ({price, rol, name}) {
    return (
        <div className="starCard">
            <h4>Nuestro último usuario es</h4>
            <h6> &#11088; {name}</h6>
            <p>Precio: {price}</p>
            <p>Su rol es de: {rol}</p>
        </div>
    )
}

export default UserCard