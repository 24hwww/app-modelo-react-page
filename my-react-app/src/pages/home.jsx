import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonMenuToggle } from '@ionic/react';
import { IonItem, IonAvatar, IonLabel, IonText  } from '@ionic/react';
import { notifications } from 'ionicons/icons';

import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonGrid, IonRow, IonCol  } from '@ionic/react';

import {
  IonRefresher,
  IonRefresherContent
} from '@ionic/react';

import { Link } from "react-router-dom";

async function updateAlert() {
  /**
   * Open the menu by side
   * We can refer to the menu by side
   * here because only one "end" menu exists
   */
  //await menuController.open('end');
}

const Avatar = () => {
  return (
      <IonItem slot="start" lines="none">
        <IonAvatar slot="start">
          <img alt="Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>
        <strong>Usuario</strong><br />
        <IonText>Desconectado</IonText>
        </IonLabel>
      </IonItem>
  );
};

export default function Home() {

  function handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }

  return (
        <>
        <IonHeader className="ion-no-border app-header">
        <IonToolbar>
        <Avatar/>

        <IonButtons slot="end">
          <IonMenuToggle auto-hide="false">
            <IonButton onClick={updateAlert}>
            <IonIcon slot="icon-only" icon={notifications}></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>

        </IonToolbar>
        <IonToolbar>

        <IonTitle>...</IonTitle>

        </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        

        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>

          <IonGrid>
          <IonRow>
              <IonCol>
                
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle><IonChip>Pedidos</IonChip></IonCardSubtitle>
                  <IonCardTitle>$ 125.0251.99</IonCardTitle>
                  
                </IonCardHeader>

                <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
              </IonCard>

              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>

                <Link className="no-underline" to="/productos">
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle><IonChip>Productos</IonChip></IonCardSubtitle>
                    <IonCardTitle>1.365</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                </IonCard>  
                </Link>

              </IonCol>
              <IonCol>
              <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle><IonChip>Clientes</IonChip></IonCardSubtitle>
                    <IonCardTitle>234</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                </IonCard>      
              </IonCol>
            </IonRow>

        </IonGrid>

        </IonContent>
        </>
  );
}
