import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonBackButton  } from '@ionic/react';

export default function Products({title}) {
  return (
        <>
        <IonHeader className="ion-no-border app-header">
        <IonToolbar>

        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
        </IonButtons>

        <IonTitle>Productos</IonTitle>

        <IonButtons slot="end">
            <IonMenuButton auto-hide="true"></IonMenuButton>
        </IonButtons>

        </IonToolbar>
        </IonHeader>
        <IonContent>Products</IonContent>
        </>
  );
}