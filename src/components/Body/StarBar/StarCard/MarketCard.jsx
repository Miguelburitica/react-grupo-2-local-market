function MarketCard ({name, deals}) {
    return (
        <div className="starCard">
            <h4>Nuestro mercado estrella</h4>
            <h6> &#11088; {name}</h6>
            <p></p>
            <p>Con ventas semanales de {deals}</p>
        </div>
    )
}

export default MarketCard