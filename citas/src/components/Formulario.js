import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types';

const Formulario = ({ crearCitas }) => {

    // Crear state de citas
    // el primer parametro el que contiene el valor y el segundo es la funcion que va a modificar ese valor (state)
    const [cita, actualizarCita] = new useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // sirve para validar error dentro del formulario
    const [error, modificarError] = useState(false);

    // funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        // se modifica el state, en donde primero se crear una copia del objeto y se sobre escribe nuevamente no con el nombre del campo y el valor que lleva ese campo
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    // extraer los datos
    const { mascota, dueño, fecha, hora, sintomas } = cita;

    // cada que el usuario envia el formulario
    const submitCita = e => {
        e.preventDefault();
        // validacion
        if (mascota === '' || dueño === '' || fecha === '' || hora === '' || sintomas === '') {
            modificarError(true);
            return;
        }

        modificarError(false);
        // un id unico
        cita.id = uuidv4();
        // se envia las citas 
        crearCitas(cita);

        // reiniciar formulario
        actualizarCita({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }
    return (
        <Fragment>
            <h1> Crear Citas </h1>
            {
                error ? <p className="alerta-error"> Todos los campos son obligatorios </p> : null
            }
            <form
                onSubmit={submitCita}
            >
                <label> Nombre Mascota </label>
                <input
                    type="text"
                    name="mascota"
                    placeholder="Nombre Mascota"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label> Nombre Dueño </label>
                <input
                    type="text"
                    name="dueño"
                    placeholder="Nombre del dueño"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={dueño}
                />
                <label> Fecha </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label> Hora </label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label> Sintomas </label>
                <textarea
                    type="text"
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    name="agregar"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCitas: PropTypes.func.isRequired
}

export default Formulario;