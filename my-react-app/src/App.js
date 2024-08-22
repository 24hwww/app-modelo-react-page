import { setupIonicReact } from '@ionic/react';
import { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

setupIonicReact();

function App() {
  return (
  <IonSplitPane contentId="main">
    <IonMenu side="start" contentId="main">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Menu Content</IonContent>
    </IonMenu>

    <div className="ion-page" id="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main View</IonTitle>

          <IonButtons slot="start">
              <IonMenuButton auto-hide="true"></IonMenuButton>
          </IonButtons>

        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Main View Content</IonContent>
    </div>
  </IonSplitPane>
  );
}

export default App;
