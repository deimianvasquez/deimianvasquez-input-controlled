import React, { useState } from "react";
import Swal from 'sweetalert2'


const initialState = {
	"lastname": "",
	"email": "",
	"phone": ""
}

//create your first component
const Home = () => {

	const [contact, setContact] = useState(initialState)
	const [error, setError] = useState(false)
	const [contactList, setContactList] = useState([
		{
			"lastname": "Martin Coinbra",
			"email": "martin@gmail.com",
			"phone": "04147858585"
		},
		{
			"lastname": "Leonardo Cusatis",
			"email": "leo@gmail",
			"phone": "151515151515"
		}
	])


	const handleChange = (event) => {
		setContact({
			...contact,
			[event.target.name]: event.target.value,

		})
	}


	const handleSubmit = (event) => {
		event.preventDefault()

		//validando si los campos estan llenos
		if (contact.lastname.trim() == "" || contact.email.trim() == "" || contact.phone.trim() == "") {
			console.log("todos los campos son obligatorios")
			setError(true)
			return
		}

		// let exist = contactList.find((item) => item.email == contact.email)
		let exist = contactList.some((item) => item.email == contact.email)

		if (!exist) {
			setContactList([...contactList, contact])
			Swal.fire({
				title: "Excelente!",
				text: "Se agrego el contacto!",
				icon: "success"
			});
			setContact(initialState)
			setError(false)
		} else {
			console.log("contacto ya registrado")
		}

	}


	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12">
					<h1 className="text-center mt-3">Aplicación de contactos</h1>
				</div>
				<div className="col-12 col-md-7">
					<form
						className="border p-3"
						onSubmit={handleSubmit}
					>
						<div className="form-group">
							<label htmlFor="txtName">Nombre completo:</label>
							<input
								type="text"
								className="form-control"
								id="txtName"
								placeholder="Deimian Vásquez"
								name="lastname"
								value={contact.lastname}
								onChange={handleChange}
							/>
						</div>

						<div className="form-group mt-2">
							<label htmlFor="txtEmail">Correo electronico:</label>
							<input
								type="text"
								className="form-control"
								id="txtEmail"
								placeholder="deimian@email.com"
								name="email"
								value={contact.email}
								onChange={handleChange}
							/>
						</div>

						<div className="form-group mt-2">
							<label htmlFor="txtPhone">Teléfono:</label>
							<input
								type="text"
								className="form-control"
								id="txtPhone"
								placeholder="+58412-000 00 00"
								name="phone"
								value={contact.phone}
								onChange={handleChange}
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary mt-3 w-100"
						>Guardar contacto</button>

					</form>
				</div>
				<div className="col-12 col-md-7 my-2">
					{error ? <h6 className="text-danger">Todos los campos son obligatorios</h6> : null}
				</div>
				<div className="col-12 col-md-7 mt-3">
					<ul>
						{
							contactList.map((item, index) => {
								return (
									<li key={index}>
										<p>Nombre:{item.lastname}</p>
										<p>Nombre:{item.email}</p>
										<p>Nombre:{item.phone}</p>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;



