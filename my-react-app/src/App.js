import { App } from '@capacitor/app';
import { useEffect } from 'react';

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

function Init() {

  useEffect(() => {
    const handleBackButton = () => {
      const canGoBack = window.history.length > 1;
      if (canGoBack) {
        window.history.back();
      } else {
        App.exitApp(); // O cualquier otra acción que desees tomar
      }
    };

    App.addListener('backButton', handleBackButton);

    return () => {
      App.removeAllListeners('backButton');
    };
  }, []);

  return (
  <IonSplitPane contentId="main">
      <RouterProvider router={router} />
  </IonSplitPane>
  );
}

export default Init;