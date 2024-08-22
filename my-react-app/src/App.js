import { setupIonicReact } from '@ionic/react';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import logo from './logo.svg';
import './App.css';
setupIonicReact();

function App() {
  return (
    <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Header</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h1>Content</h1>
    </IonContent>
  </>
  );
}

export default App;
