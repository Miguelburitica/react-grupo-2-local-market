function ProductCard ({name, deals}) {
    return (
        <div className="starCard">
            <h4>El mercado que nos enorgullese es {name}</h4>
            <p>Con ventas semanales de {deals}</p>
        </div>
    )
}

export default ProductCard