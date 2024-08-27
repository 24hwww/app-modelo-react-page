import { useIonRouter } from '@ionic/react';
import { menuController } from '@ionic/core/components';
import { IonList, IonItem, IonLabel, IonMenu, IonContent } from '@ionic/react';
import { Link } from 'react-router-dom';

const onLinkClick = async (e) => {
  await menuController.close('menu');
};

const Menu = () => {

  const router = useIonRouter();
  const goToPage = () => {
    router.push('/products', 'root', 'replace');
  };

  return (
  <IonMenu contentId="main">
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel>
            <Link to="/" onClick={onLinkClick}>Home</Link>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            <button type="button" onClick={goToPage}>Go to Details</button>
          </IonLabel>
        </IonItem> 
        {/* Añade más elementos de menú según sea necesario */}
      </IonList>
    </IonContent>
  </IonMenu>
  )
};

export default Menu;