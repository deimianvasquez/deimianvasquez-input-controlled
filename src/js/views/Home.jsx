import React, { useState } from "react";



//create your first component
const Home = () => {

	const [contact, setContact] = useState({
		"name": "",
		"email": "",
		"phone": ""
	})

	const [contactList, setContactList] = useState([])


	const handleChange = (event) => {
		console.log(event.target.name)
		setContact({
			[event.target.name]: event.target.value,

		})
	}



	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1 className="text-center mt-3">Aplicación de contactos</h1>
				</div>
				<div className="col-12 col-md-7">
					<form
						className="border p-3"
					>
						<div className="form-group">
							<label htmlFor="txtName">Nombre completo:</label>
							<input
								type="text"
								className="form-control"
								id="txtName"
								placeholder="Deimian Vásquez"
								name="name"
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
								onChange={handleChange}
							/>
						</div>
						<button
							className="btn btn-primary mt-3 w-100"
						>Guardar contacto</button>

					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;



