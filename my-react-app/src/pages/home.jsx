import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonMenuToggle } from '@ionic/react';
import { IonItem, IonAvatar, IonLabel, IonText  } from '@ionic/react';
import { notifications } from 'ionicons/icons';

import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonGrid, IonRow, IonCol, IonNavLink  } from '@ionic/react';

import {
  IonRefresher,
  IonRefresherContent
} from '@ionic/react';

import Productos from "./products";

//import { Link } from "react-router-dom";

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
        <IonText color="light"><small>Desconectado</small></IonText>
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

        <IonTitle>Inicio</IonTitle>

        </IonToolbar>
        </IonHeader>
        <IonContent color="dark" fullscreen={true} className="ion-padding">
        

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

                <IonCardContent>...</IonCardContent>
              </IonCard>

              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>

              <IonNavLink routerDirection="forward" component={() => <Productos />}>
                <IonCard button={true} href="/productos">
                  <IonCardHeader>
                    <IonCardSubtitle><IonChip>Productos</IonChip></IonCardSubtitle>
                    <IonCardTitle>1.365</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>...</IonCardContent>
                </IonCard>  
                </IonNavLink>

              </IonCol>
              <IonCol>
              <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle><IonChip>Clientes</IonChip></IonCardSubtitle>
                    <IonCardTitle>234</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>...</IonCardContent>
                </IonCard>      
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle><IonChip>Carrito</IonChip></IonCardSubtitle>
                  <IonCardTitle>8 Producto(s)</IonCardTitle>
                  
                </IonCardHeader>

                <IonCardContent>...</IonCardContent>
              </IonCard>

              </IonCol>
            </IonRow>


        </IonGrid>
        </IonContent>
        </>
  );
}
