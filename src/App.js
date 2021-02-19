import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

import styled from '@emotion/styled';

const Cuerpo = styled.div`
  @media (min-width: 992px) {
    height: 100vh;
  }
`;


function App() {
  // State del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarApi = async () => {
      if (consultar) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=cc4c0d8af0a3da64230b43b9244e35ae`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado);
        setConsultar(false);
      }

      // Detecta si hubo resultados correctos en la consulta
      if (resultado.cod === "404") {
        setError(true);
      } else {
        setError(false);
      }
    }
    consultarApi();
  }, [consultar]);

  let componente;

  if (error) {
    componente = <Error mensaje='No hay resultado'></Error>
  } else {
    componente = <Clima resultado={ resultado }></Clima>
  }

  return (
    <Fragment>
      <Header titulo="Clima react app"></Header>
      <Cuerpo className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={ busqueda } setBusqueda={ setBusqueda } setConsultar={ setConsultar }></Formulario>
            </div>
            <div className="col m6 s12">
              { componente }
            </div>
          </div>
        </div>
      </Cuerpo>
    </Fragment >
  );
}

export default App;
