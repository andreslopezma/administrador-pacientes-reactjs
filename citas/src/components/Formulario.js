import React, { Fragment } from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <h1> Crear Citas </h1>

            <label> Nombre Mascota </label>
            <input 
                type="text"
                name="mascota"
                placeholder="mascota"
                className="u-full-width"
            />
            <label> Nombre Dueño </label>
            <input 
                type="text"
                name="dueño"
                placeholder="Nombre del dueño"
                className="u-full-width"
            />
            <label> Fecha </label>
            <input 
                type="date"
                name="fecha"
                className="u-full-width"
            />
            <label> Hora </label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
            />
            <button
                type="button"
                name="agregar"
                className="u-full-width button-primary"
            >Guardar</button>
        </Fragment>
     );
}
 
export default Formulario;