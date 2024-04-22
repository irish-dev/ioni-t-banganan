import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Clickcounter.css';

const Clickcounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <button onClick={() => setClickCount(clickCount + 1)}>Click me</button>
        <p className="ion-margin-top">Click count: {clickCount}</p>
      </IonContent>
    </IonPage>
  );
};

export default Clickcounter;