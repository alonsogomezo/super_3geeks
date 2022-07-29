import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import ErrorText from "../component/errorText";
import Logo from "../../img/logo-3geeks.png";

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
    <div className="container text-white bg-white mb-5  shadow p-3 mb-5 rounded"  >
      <div className=" text-center mt-3 mb-0 h1 pl-5 ">
        <h1 className="text-dark">Super3Geeks</h1>
        
      </div>

      <h2 className="conteiner-fluid text-center bg-secondary mt-3 border border-dark text-white rounded">
        {" "}
        <img src={Logo} width={40} />
      </h2>
      <hr />
      <form className="mb-5" onSubmit={onSubmit}>
        <h6 className="text-center">
          Registrarte para difrutar de los beneficios que brinda ser Cliente
          Plus
        </h6>
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
              className="form-control border border-dark"
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
              className="form-control border border-dark"
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
              className="form-control border border-dark"
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
              className="form-control border border-dark"
              placeholder="Password"
            />
            <input
              required
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              className="form-control mt-4 border border-dark"
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
              className="form-control border border-dark"
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
              className="form-control border border-dark"
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
              className="form-control border border-dark"
              id="inputDireccion"
              placeholder="Direccion"
            />
          </div>
        </div>
        <div className="form-group row p-3 justify-content-center mb-5">
          <div className="col-10 col-sm-5 text-center">
            <button type="submit" className="btn btn-outline-danger mb-5 shadow p-3 mb-5 border-white">
              Crear Perfil
            </button>

            <p>
              Al registrarte, aceptas nuestras Condiciones y la Politica de
              Privacidad
            </p>
          </div>

          <h6 className="text-dark text-center">@super3geeks.www</h6>

          <h2 className="text-center bg-secondary mt-3 border border-dark text-white rounded">
            {" "}
            <img src={Logo} width={40} />
          </h2>

  
          
        </div>
      </form>
    </div>
  );
};

export default Registro;
