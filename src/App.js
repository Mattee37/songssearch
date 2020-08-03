import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import Song from "./components/Song";
import Artist from "./components/Artist";

function App() {
  //[estado, actualizador]
  const [busquedaletra, setBusquedaLetra] = useState({});
  //[estado, actualizador]
  const [letra, setLetra] = useState("");
  //[estado, actualizador]
  const [info, setInfo] = useState({});

  //valida la busqueda, consulta las APIs y actualiza los estados
  useEffect(() => {
    //valida
    if (Object.keys(busquedaletra).length === 0) return;
    //consulta
    const consultarAPILetras = async () => {
      //desestructura los elementos del estado
      const { cancion, artista } = busquedaletra;

      //url letras
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      //url info
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      //hace las consultas en base a una promesa
      const [letra, informacion] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ]);

      //envia los resultados a los componentes
      setLetra(letra.data.lyrics);
      setInfo(informacion.data.artists[0]);
    };
    consultarAPILetras();
  }, [busquedaletra, info]);

  return (
    <Fragment>
      <Form setBusquedaLetra={setBusquedaLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artist info={info} />
          </div>
          <div className="col-md-6">
            <Song letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
