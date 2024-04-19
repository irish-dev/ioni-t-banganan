import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './profile.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ion-card>
  <ion-card-header>
    <ion-card-title>Irish</ion-card-title>
    <ion-card-subtitle>student</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    Nothing more, nothing less.
  </ion-card-content>
</ion-card>
      </IonContent>
    </IonPage>
  );
};

export default Home;
