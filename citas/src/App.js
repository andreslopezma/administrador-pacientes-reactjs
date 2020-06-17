import React, { Fragment, useState } from 'react';
// componentes
import Formulario from './components/Formulario';
import Cita from './components/cita';


function App() {

  // se van almacenar todas las citas
  const [ citas, agregarCitas] = useState([]);

  const crearCitas = cita => {    
    agregarCitas([
      ...citas,
      cita
    ])
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              // estos son props
              crearCitas={crearCitas}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {
              citas.map(cita => {
                return <Cita 
                  key  = {cita.id}
                  cita = {cita}
                />
              })
            }
            
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
