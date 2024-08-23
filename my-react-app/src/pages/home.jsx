import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton  } from '@ionic/react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
        <>
        <IonHeader>
        <IonToolbar>
        <IonTitle>Main View</IonTitle>

        <IonButtons slot="start">
            <IonMenuButton auto-hide="true"></IonMenuButton>
        </IonButtons>

        </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Main View Content<Link to="/">back to app</Link></IonContent>
        </>
  );
}
