import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol  } from '@ionic/react';

import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip  } from '@ionic/react';

//import { Link } from "react-router-dom";

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
        <IonContent>
        
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
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle><IonChip>Productos</IonChip></IonCardSubtitle>
                    <IonCardTitle>1.365</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                </IonCard>                
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
