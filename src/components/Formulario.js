import React from 'react'

const Formulario = () => {
    return (
        <form action="">
            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" className="validate" />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select name="pais" id="pais">
                    <option value="">--Seleccione un pais--</option>
                </select>
                <label htmlFor="pais">País:</label>
            </div>
        </form>
    )
}

export default Formulario
