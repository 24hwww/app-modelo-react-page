import { setupIonicReact } from '@ionic/react';
import { IonSplitPane } from '@ionic/react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav";

import Productos from "./pages/products";

setupIonicReact();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { path: "/", element: <Home />, title: "inicio" },
      {
        path: "/productos",
        element: <Productos />, title: "inicio2"
      }
    ]
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