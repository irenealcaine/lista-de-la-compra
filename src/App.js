import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Main from "./Layout/Main/Main";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";

import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ListaDeLaCompra from "./Pages/ListaDeLaCompra/ListaDeLaCompra";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import IniciarSesion from "./Pages/IniciarSesion/IniciarSesion";
import CrearCuenta from "./Pages/CrearCuenta/CrearCuenta";

import ProtectedRoute from './Components/ProtectedRoute'
import { AuthContextProvider } from './Context/AuthContext'

function App() {
  return (
    <div className={`app`}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />}>
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/lista-de-la-compra" element={<ProtectedRoute><ListaDeLaCompra /></ProtectedRoute>} />
              <Route path="/agregar-elemento" element={<ProtectedRoute><Page2 /></ProtectedRoute>} />
              <Route path="/perfil" element={<ProtectedRoute><Page3 /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route element={<AuthLayout />}>

              <Route path="/iniciar-sesion" element={<IniciarSesion />} />
              <Route path="/crear-cuenta" element={<CrearCuenta />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
