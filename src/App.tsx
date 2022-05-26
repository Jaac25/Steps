import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Address } from './pages/address/Address';
import { DataClient } from './pages/dataClient/data_client';
import { Email } from './pages/email/Email';
import { Floor } from './pages/Floor/Floor';
import { Start } from './pages/start/start';
import { Summary } from './pages/Summary/Summary';
import { Zone } from './pages/Zone/Zone';

const routes = [
  {
    link: "/",
    Component: <Start/>,
    description: "Bienvenido",
    step: 1
  },
  {
    link: "/dataClient",
    Component: <DataClient/>,
    description: "Nombre y apellido del cliente",
    step: 1
  },
  {
    link: "/email",
    Component: <Email/>,
    description: "Email del cliente",
    step: 2
  },
  {
    link: "/address",
    Component: <Address/>,
    description: "Dirección del apartamento del cliente",
    step: 3
  },
  {
    link: "/floor",
    Component: <Floor/>,
    description: "Piso del apartamento",
    step: 4
  },
  {
    link: "/zone",
    Component: <Zone/>,
    description: "Zonas familiares como BBQ, salón comunal y parque de juegos",
    step: 5
  },
  {
    link: "/resume",
    Component: <Summary/>,
    description: "Resumen",
    step: 6
  }
]

function App() {
  return (
    <>
      <Routes>
        {
          routes.map(({link, Component}) => (
            <Route path={link}  element={Component} />
          ))
        }
      </Routes>
    </>
  );
}

export default App;
