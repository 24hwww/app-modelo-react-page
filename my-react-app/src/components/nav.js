import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle  } from '@ionic/react';
import { menuController } from '@ionic/core/components';
import { Link, Outlet } from "react-router-dom";

const onLinkClick = async (e) => {
    await menuController.close('menu');
};

export default function Nav({ rutas }) {

  return (
    <>
    <IonMenu menuId="menu" side="start" contentId="main">
      <IonHeader className="ion-no-border app-header">
        <IonToolbar color="tertiary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        
        {
          rutas.length > 0 && rutas.map(({path,title}, key) => {
            let ruta_cadena = Array.isArray(path);
            let ruta = (ruta_cadena && path[0]) || path;
            let num = key+1;            
            return (
                <Link className="no-underline" key={key} to={ruta} onClick={onLinkClick}>
                <IonCard button="true">
                <IonCardHeader>
                    <IonCardTitle>{num} - {title}</IonCardTitle>
                </IonCardHeader>
                </IonCard>
                </Link>
            )
          })
        }

      </IonContent>
    </IonMenu>

    <div className="ion-page" id="main"><Outlet /></div>
    </>
  );
}