import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/react';
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
    <IonMenu side="start" contentId="main">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
      <div>
      <Link to="/">
        <button>App</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>

      </IonContent>
    </IonMenu>

    <div className="ion-page" id="main"><Outlet /></div>
    </>
  );
}