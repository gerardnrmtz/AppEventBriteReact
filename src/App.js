import React from "react";
import Header from "./components/Header.js";
import CategoriasContext from "./context/CategoriasContext.js";
import Formulario from "./components/Formulario.js";
import EventosProvider from "./context/EventosContext.js";
import ListaEventos from './components/ListaEventos.js';
function App() {
  return (
    <EventosProvider>
      <CategoriasContext>
        <Header />
        <div className="uk-container">
          <Formulario />
          <ListaEventos/>
        </div>
      </CategoriasContext>
    </EventosProvider>
  );
}
export default App;
