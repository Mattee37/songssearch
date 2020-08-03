import React, { useState } from "react";
import PropTypes from "prop-types";

import Error from "./Error";

const Form = ({ setBusquedaLetra }) => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, setError] = useState(false);

  const { artista, cancion } = busqueda;

  const actualizarState = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerInfo = (e) => {
    e.preventDefault();

    if (artista.trim() === "" || cancion.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={obtenerInfo}
          >
            <fieldset>
              <legend className="text-center">
                Buscar letras de canciones
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre del artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre de la cancion"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar!
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  setBsuquedaLetra: PropTypes.func.isRequired,
};

export default Form;
