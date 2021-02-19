import React, { useState } from 'react'
import styled from '@emotion/styled';

const Boton = styled.button`
    width: 100%;
`;


const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {

    // Validar con el state de error
    const [error, setError] = useState(false)

    // Extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    // Funcion que coloca los elementos en el state
    const handleChange = (e) => {
        // actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario da submit al form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        setConsultar(true)
    }

    return (
        <form onSubmit={ handleSubmit }>
            {error
                ? (<p className="red darken-4 error">Todos los campos son obligatorios</p>)
                : null }
            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" className="validate" value={ ciudad } onChange={ handleChange } />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select name="pais" id="pais" value={ pais } onChange={ handleChange }>
                    <option value="">--Seleccione un pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País:</label>
            </div>
            <div className="input-field col s12">
                <Boton className="waves-effect waves-light btn-large btn-block yellow accent-4 black-text text-darken-2" type="submit" onClick={ handleSubmit }>Buscar clima
                    <i className="material-icons right">send</i>
                </Boton>
            </div>
        </form>
    )
}

export default Formulario
