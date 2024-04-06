import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Page4 from "./Pages/Page4/Page4";
import IniciarSesion from "./Pages/IniciarSesion/IniciarSesion";
import ProtectedRoute from './Components/ProtectedRoute'
import { AuthContextProvider } from './Context/AuthContext'
import CrearCuenta from "./Pages/CrearCuenta/CrearCuenta";

function App() {
  return (
    <div className={`app`}>
      <AuthContextProvider>
        <BrowserRouter>
          <Main>
            <Routes>
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/lista-de-la-compra" element={<ProtectedRoute><Page1 /></ProtectedRoute>} />
              <Route path="/agregar-elemento" element={<ProtectedRoute><Page2 /></ProtectedRoute>} />
              <Route path="/perfil" element={<ProtectedRoute><Page3 /></ProtectedRoute>} />
              {/* <Route path="/page4" element={<Page4 />} /> */}
              <Route path="/iniciar-sesion" element={<IniciarSesion />} />
              <Route path="/crear-cuenta" element={<CrearCuenta />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
