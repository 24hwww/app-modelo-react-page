import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton  } from '@ionic/react';

export default function Clients({title}) {
  return (
        <>
        <IonHeader className="ion-no-border app-header">
        <IonToolbar>
        <IonTitle>{title}</IonTitle>

        <IonButtons slot="start">
            <IonMenuButton auto-hide="true"></IonMenuButton>
        </IonButtons>

        </IonToolbar>
        </IonHeader>
        <IonContent>Clients</IonContent>
        </>
  );
}