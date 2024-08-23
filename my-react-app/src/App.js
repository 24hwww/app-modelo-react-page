import { setupIonicReact } from '@ionic/react';
import { IonSplitPane } from '@ionic/react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Clients from "./pages/clients";
import Orders from "./pages/orders";
import Checkout from "./pages/checkout";
import Login from "./pages/login";

import Nav from "./components/nav";

setupIonicReact();

const rutas = [
  {path: "/",element: <Home title="Inicio" />, title: "Inicio"},  
  {path: "/login", element: <Login title="Login" />, title: "Login" },  
  {path:"/products", element: <Products title="Productos" />, title: "Productos" },  
  {path: "/clients", element: <Clients title="Clientes" />, title: "Clientes" },  
  {path: "/orders", element: <Orders title="Pedidos" />, title: "Pedidos" },  
  {path: "/checkout", element: <Checkout title="Checkout" />, title: "Checkout" }
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav rutas={rutas} />,
    children: rutas
  }
]);

function App() {
  return (
  <IonSplitPane contentId="main">
      <RouterProvider router={router} />
  </IonSplitPane>
  );
}

export default App;