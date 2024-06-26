import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/react';
import './clickcounter.css';



const Clickcounter: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonButton href='/Home'> Back</IonButton>
          </IonButtons>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
       
        <p className="ion-margin-top click-count">Click count: {clickCount}</p>
        <button className="circle-button" onClick={() => setClickCount(clickCount + 1)}>
          Click me
        </button>
      </IonContent>
    </IonPage>
  );
};

export default Clickcounter;