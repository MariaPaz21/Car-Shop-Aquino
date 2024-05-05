import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import CarInfo from './CarInfo';
import ServiceInfo from './ServiceInfo';
import OrdenTrabajo from './OrdenTrabajo';


function Form() {

    const [page, setPage] = useState(0);
    const FormTitles = ["Bienvenido a Car Shop", "Datos del vehiculo", "Seleccion de servicios", "Orden de trabajo"]

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: '',
        email: "",
        celular: "",
        numero: "",
        cedula: '',
        ruc: '',
        pasaporte: '',

        nomVehiculo: "",
        marca: "",
        modelo: "",
        placa: "",
        gasolina: "",
        detalles: '',

        aceite: "",
        nombre2: "nombre",
        services: "",
        horas: ""

    })

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo
                formData={formData} setFormData={setFormData}

            />
        } else if (page === 1) {
            return <CarInfo
                formData={formData} setFormData={setFormData} />
        } else if (page === 2) {
            return <ServiceInfo
                formData={formData} setFormData={setFormData} />
        } else {
            return <OrdenTrabajo
                formData={formData} setFormData={setFormData} />
        }
    }
    return (
        <div className='form'>
            <div className='progressbar'>
                <div style={{ width: page === 0 ? "25%" : page == 1 ? "50%" : page === 2 ? "75%" : "100%" }}> </div>
            </div>
            <div className='form-container'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body'>{PageDisplay()}</div>
                <div className='footer'>
                    <button
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}
                    >Anterior</button>
                    <button
                        disabled={page == FormTitles.length - 1}
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("Formulario enviado!")

                            } else {
                                setPage((currPage) => currPage + 1)
                            }
                        }
                        }
                    >
                        {page === FormTitles.length - 1 ? "Enviar" : "Siguiente"}</button>
                </div>
            </div>
        </div>
    )
}

export default Form;