import React from 'react'

const Clima = ({ resultado }) => {
    const { name, main } = resultado;

    if (!name) return null;

    // Convertir grados kelvin a grados celsius
    const kelvin = 273.15;

    return (
        <div className="row">
            <div className="col s12 m4 l4">
                <div className="card-panel white black-text">
                    <h2>El clima de { name } es:</h2>
                    <p className="temperatura">
                        { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span>℃</span>
                    </p>
                    <p>
                        Temperatura Máxima: { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                    </p>
                    <p>
                        Temperatura Mínima: { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Clima
