import React from 'react';

function SignUpInfo({ formData, setFormData }) {

    return (
        <div className='sign-up-container'>
            <h3>Ingresa tus datos personales</h3>
                <input type='text' placeholder='Ingresar nombre' value={formData.nombre}
                onChange={(event) => setFormData({...formData, nombre: event.target.value})}/>         
                <input type='text' placeholder='Ingresar Apellido' value={formData.apellido}
                onChange={(event) => setFormData({...formData, apellido: event.target.value})} />
                <input type='text' placeholder='Ingresar Email' value={formData.email}
                onChange={(event) => setFormData({...formData, email: event.target.value})} />
                <input type='text' placeholder='Ingresar número de contacto' value={formData.celular}
                onChange={(event) => setFormData({...formData, celular: event.target.value})} />
                <input type='text' placeholder='Ingresar número de identificación' value={formData.numero}
                onChange={(event) => setFormData({...formData, numero: event.target.value})} />
                <label><input type='radio' name='identificacion' value={formData.cedula}
                onChange={(event) => setFormData({...formData, cedula: event.target.value})} />Cedula</label>
                <label><input type='radio' name='identificacion' value={formData.ruc}
                onChange={(event) => setFormData({...formData, ruc: event.target.value})} />RUC</label>
                <label><input type='radio' name='identificacion' value={formData.pasaporte}
                onChange={(event) => setFormData({...formData, pasaporte: event.target.value})} />Pasaporte</label>
        </div>
    )
}

export default SignUpInfo;
