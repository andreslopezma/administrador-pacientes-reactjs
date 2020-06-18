import React, { Fragment, useState, useEffect } from 'react';
// componentes
import Formulario from './components/Formulario';
import Cita from './components/cita';


function App() {

  
  let citasIniciales = JSON.parse( localStorage.getItem('citas') );
  if ( !citasIniciales ){
    citasIniciales = [];
  }

  // se van almacenar todas las citas
  const [ citas, agregarCitas] = useState(citasIniciales);

  const crearCitas = cita => {    
    agregarCitas([
      ...citas,
      cita
    ])
  }

  // use effect para realizar ciertas operaciones cuando el state cambia
  useEffect (  () => {
    
    localStorage.setItem('citas', JSON.stringify(citas))
    
  }, [citas] );

  // Eliminar la cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita => cita.id !== id );
    agregarCitas( nuevasCitas )
  }

  const titulo = citas.length ===0 ? 'no hay citas' : 'administra tus citas';


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
            <h2>{ titulo } </h2>
            {
              citas.map(cita => (
                <Cita 
                  key  = {cita.id}
                  cita = {cita}
                  eliminarCita = {eliminarCita}
                />
              ))
            }
            
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
