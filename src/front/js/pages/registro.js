import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import ErrorText from "../component/errorText";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [direccion, setDireccion] = useState("");
  const [msjError, setMsjError] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setMsjError("");
    if (password !== password2) {
      setMsjError("Las contraseñas no coinciden");
    } else {
      const body = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        telefono: telefono,
        tarjeta: tarjeta,
        direccion: direccion,
      };
      actions.signup(body);
    }
  };

  useEffect(() => {
    store.userRegister && navigate("/login");
  }, [store.userRegister]);

  return (
    <div className="container mb-5">
      <h2 className="text-center">Formulario de registro</h2>
      <form className="mb-5" onSubmit={onSubmit}>
        <div className="form-group row p-1 justify-content-center">
          <div className="col-10 col-sm-5">
            <label htmlFor="inputNombre" className="col-sm-2 col-form-label">
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
          <div className="col-10 col-sm-5">
            <label htmlFor="inputApellido" className="col-sm-2 col-form-label">
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
          <div className="col-10 col-sm-5">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
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
          </div>
        </div>
        <div className="form-group row p-1 justify-content-center">
          <div className="col-10 col-sm-5">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <input
              required
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              className="form-control mt-4"
              placeholder="Confirme su password"
            />
            <ErrorText text={msjError} />
          </div>
        </div>
        <div className="form-group row p-1 justify-content-center">
          <div className="col-10 col-sm-5">
            <label htmlFor="inputTelefono" className="col-sm-2 col-form-label">
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
          <div className="col-10 col-sm-5">
            <label htmlFor="inputTarjeta" className="col-sm-2 col-form-label">
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
          <div className="col-10 col-sm-5">
            <label htmlFor="inputDireccion" className="col-sm-2 col-form-label">
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
        <div className="form-group row p-3 justify-content-center mb-5">
          <div className="col-10 col-sm-5 text-center">
            <button type="submit" className="btn btn-primary mb-5">
              Crear Perfil
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registro;
