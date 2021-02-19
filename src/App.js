import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  // State del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=cc4c0d8af0a3da64230b43b9244e35ae`;
    }
    consultarApi();
  }, [consultar]);

  return (
    <Fragment>
      <Header titulo="Clima react app"></Header>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={ busqueda } setBusqueda={ setBusqueda } setConsultar={ setConsultar }></Formulario>
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment >
  );
}

export default App;
