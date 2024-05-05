import React, { useState } from "react";


function OrdenTrabajo({ formData, setFormData, checkedToppings }) {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <h3>Esta es tu orden de trabajo!</h3>
            <div>
                <h5>Datos personales:</h5>
                <p
                    value={formData.nombre2}
                    onChange={(event) => setFormData({ ...formData, nombre2: event.target.value })}
                >Orden de: {`${formData.nombre} ${formData.apellido}`} </p>
                <p>Email: {`${formData.email}`} </p>
                <p>Contacto: {`${formData.celular}`} </p>
                <p>Número de identificación: {`${formData.numero}`}</p>
            </div>
            <hr />
            <div>
                <h5>Datos del vehiculo</h5>
                <p>Marca del vehiculo: {`${formData.marca}`}</p>
                <p>Modelo del vehiculo: {`${formData.modelo}`} </p>
                <p>Número de placa del vehiculo: {`${formData.placa}`} </p>
                <p>Nivel del tanque de gasolina: {`${formData.gasolina}`} </p>
                <p>Detalles: {`${formData.detalles}`} </p>
            </div>
            <hr />
            <div>
                <p>Servicios a realizar: {`${formData.services}`}</p>
                <p>Tiempo estimado de espera: {`${formData.horas}`}</p>
                <p>Fecha de entrega: {date.toDateString()}</p>
            </div>
        </div>
    )
}
export default OrdenTrabajo;