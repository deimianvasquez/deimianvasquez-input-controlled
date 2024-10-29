import React, { useState } from "react"
import Message from "../component/Message.jsx"
import Contact from "../component/Contact.jsx"
import Swal from 'sweetalert2'
import Confetti from 'confetti-react';

const inicialContact = {
    lastname: "",
    email: ""
}

const Home = () => {
    // el contacto que se escrieb al vuelo
    const [contact, setContact] = useState(inicialContact)
    const [listContact, setListContact] = useState([])
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)


    const handleChange = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (contact.lastname.trim() != "" && contact.email.trim() != "") {
            setListContact([
                ...listContact,
                contact
            ])
            setContact(inicialContact)
            setError(false)
            setSuccess(true)

            Swal.fire({
                title: "Buen trabajo!",

                icon: "success"
            });

        } else {
            setError(true)
        }
    }

    const handleDelete = (id) => {
        const newContact = listContact.filter((item, index) => id != index)
        setListContact(newContact)

    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="text-center">Title</h1>
                </div>

                <div className="col-12 col-md-7 border">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-3">
                            <label htmlFor="">Lastname</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Lastname"
                                name="lastname"
                                value={contact.lastname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="E-mail"
                                name="email"
                                value={contact.email}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary my-3 w-100">Guardar</button>
                    </form>
                </div>


                {
                    error && <Message msg=" No se permiten valores vacíos" style="alert-danger" />
                }

                <div className="col-12 col-md-7 border mt-4">

                    {
                        listContact.map((item, index) => {
                            return (
                                <Contact
                                    key={index} contact={item}
                                    handleDelete={handleDelete}
                                    index={index}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Home

