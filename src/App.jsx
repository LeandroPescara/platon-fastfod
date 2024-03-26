import { BrowserRouter, Route, Routes } from "react-router-dom";
import { itemDetailContainer } from "./components/itemDetailContainer/itemDetailContainer";
import { itemListContainer } from "./components/itemListContainer/itemListContainer";
import { navbar } from "./components/shared/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <navbar />
        <Routes>
          <Route
            path="/"
            element={<itemListContainer bienvenida="Hola Coder" />}
          />
          <Route
            path="category/:idCategory"
            element={<itemListContainer bienvenida="Hola Coder" />}
          />
          <Route path="item/:idItem" element={<itemDetailContainer />} />`{" "}
          <Route
            path="category/arroz"
            element={<itemListContainer bienvenida="Hola Coder" />}
          />
          <Route
            path="category/carne"
            element={<itemListContainer bienvenida="Hola Coder" />}
          />
          <Route
            path="category/ensalada"
            element={<itemListContainer bienvenida="Hola Coder" />}
          />
          <Route path="/coder" element={<>Coder</>} />
          <Route path="*" element={<>No hay ruta para ese path</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
