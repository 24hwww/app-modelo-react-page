import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton  } from '@ionic/react';
import { Link } from "react-router-dom";

export default function Home({title}) {
  return (
        <>
        <IonHeader className="ion-no-border app-header">
        <IonToolbar>
        <IonTitle>Inicio</IonTitle>

        <IonButtons slot="end">
            <IonMenuButton auto-hide="true"></IonMenuButton>
        </IonButtons>

        </IonToolbar>
        </IonHeader>
        <IonContent>Main View Content<Link to="/">back to app</Link></IonContent>
        </>
  );
}
