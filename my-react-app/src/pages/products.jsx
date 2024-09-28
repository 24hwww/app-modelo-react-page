import { IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonMenuToggle  } from '@ionic/react';

import { notifications } from 'ionicons/icons';

async function updateAlert() {
  /**
   * Open the menu by side
   * We can refer to the menu by side
   * here because only one "end" menu exists
   */
  //await menuController.open('end');
}

export default function Products() {
  return (
        <>
        <IonHeader className="ion-no-border app-header">
        <IonToolbar>

        <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
        </IonButtons>

        <IonTitle>Productos</IonTitle>

        <IonButtons slot="end">
          <IonMenuToggle auto-hide="false">
            <IonButton onClick={updateAlert}>
            <IonIcon slot="icon-only" icon={notifications}></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>        

        </IonToolbar>
        </IonHeader>
        <IonContent>Products</IonContent>
        </>
  );
}