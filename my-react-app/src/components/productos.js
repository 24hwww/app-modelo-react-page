import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

export default function Productos() {
    /*const contact = {
      first: "Your",
      last: "Name",
      avatar: "https://robohash.org/you.png?size=200x200",
      twitter: "your_handle",
      notes: "Some notes",
      favorite: true,
    };*/
  
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
      <IonContent className="ion-padding">Main View Content</IonContent>
      </>
    );
  }
  