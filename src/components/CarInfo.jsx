import React from "react"

function PersonalInfo({ formData, setFormData }) {
    return(
    <div>
        <h3>Ingresa los datos de tu vehiculo</h3>
            <input type='text' placeholder='Ingresar marca del vehiculo' value={formData.marca}
            onChange={(event) => setFormData({...formData, marca: event.target.value})}/> 
            <input type='text' placeholder='Ingresar modelo del vehiculo' value={formData.modelo}
            onChange={(event) => setFormData({...formData, modelo: event.target.value})}/> 
            <input type='text' placeholder='Ingresar número de placa del vehiculo' value={formData.placa}
            onChange={(event) => setFormData({...formData, placa: event.target.value})}/> 
            <input type='text' placeholder='Ingresar nivel del tanque de gasolina' value={formData.gasolina}
            onChange={(event) => setFormData({...formData, gasolina: event.target.value})}/> 
            <input type='text' placeholder='Detalles de abolladuras, rayones ...?' value={formData.detalles}
            onChange={(event) => setFormData({...formData, detalles: event.target.value})}></input> 
    </div>
    )
}
export default PersonalInfo;