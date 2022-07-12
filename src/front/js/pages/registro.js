import React, { useState } from "react";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [direccion, setDireccion] = useState("");
  const onSubmit = () => {
    alert(nombre);
  };
  return (
    <div className="container">
      <h2 className="text-center">Formulario de registro</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group row p-1 justify-content-center">
          <div class="col-10 col-sm-5">
            <label for="inputNombre" className="col-sm-2 col-form-label">
              Nombre
            </label>
            <input
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Nombre"
            />
          </div>
        </div>
        <div className="form-group row p-1 justify-content-center">
          <div class="col-10 col-sm-5">
            <label for="inputApellido" className="col-sm-2 col-form-label">
              Apellido
            </label>
            <input
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              type="text"
              className="form-control"
              id="inputApellido"
              placeholder="Apellido"
            />
          </div>
        </div>
        <div className="form-group row p-1 justify-content-center">
          <div class="col-10 col-sm-5">
            <label for="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
            />
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Confirme su email"
            />
          </div>
        </div>
        <div className="form-group row p-1 justify-content-center">
          <div class="col-10 col-sm-5">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            />
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Confirme su password"
            />
          </div>
        </div>
        <div className="form-group row p-1 justify-content-center">
          <div class="col-10 col-sm-5">
            <label for="inputTelefono" className="col-sm-2 col-form-label">
              Telefono
            </label>
            <input
              required
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="text"
              className="form-control"
              id="inputTelefono"
              placeholder="Telefono"
            />
          </div>
        </div>
        <div className="form-group row p-1 justify-content-center">
          <div class="col-10 col-sm-5">
            <label for="inputTarjeta" className="col-sm-2 col-form-label">
              Tarjeta
            </label>
            <input
              required
              value={tarjeta}
              onChange={(e) => setTarjeta(e.target.value)}
              type="text"
              className="form-control"
              id="inputTarjeta"
              placeholder="Tarjeta"
            />
          </div>
        </div>
        <div className="form-group row p-1 justify-content-center">
          <div class="col-10 col-sm-5">
            <label for="inputDireccion" className="col-sm-2 col-form-label">
              Direccion
            </label>
            <input
              required
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              type="text"
              className="form-control"
              id="inputDireccion"
              placeholder="Direccion"
            />
          </div>
        </div>
        <div className="form-group row p-3 justify-content-center">
          <div className="col-10 col-sm-5 text-center">
            <button type="submit" className="btn btn-primary">
              Crear Perfil
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registro;
