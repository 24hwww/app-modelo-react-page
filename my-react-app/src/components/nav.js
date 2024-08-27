import { useState, useEffect } from "react";

import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/react';


import { IonItem, IonLabel  } from '@ionic/react';

import { Outlet } from "react-router-dom";

export default function Nav() {
  const [items, setItems] = useState([
    {
        name: "John",
        age: 19,
    },
    {
        name: "Candy",
        age: 18,
    },
    {
        name: "mandy",
        age: 20,
    },
]);

useEffect(() => {

}, []);

  return (
    <>
    <IonMenu side="start" contentId="main">
      <IonHeader className="ion-no-border app-header">
        <IonToolbar color="tertiary">
          <IonTitle>Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
      {items.map((val, index) => (
            <IonItem lines="full">
              <IonLabel>
                <h2>{val.name}</h2>
                <p>{val.age}</p>
              </IonLabel>
            </IonItem>
      ))}

      </IonContent>
    </IonMenu>

    <div className="ion-page" id="main"><Outlet /></div>
    </>
  );
}