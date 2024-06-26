import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardTitle, 
  IonCardSubtitle, IonCardContent, IonAlert } from '@ionic/react';
import './profile.css';



const profile: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
        <img alt="Silhouette of mountains" src="./assets/panda.jpg" />
        <IonCardHeader>
          <IonCardTitle>irish</IonCardTitle>
          <IonCardSubtitle>student</IonCardSubtitle>
        </IonCardHeader>
  
        <IonCardContent>Don't be trapped in someone else's dream</IonCardContent>
        <IonButton id="present-alert" expand='full'>Click Me</IonButton>
  
  
      </IonCard><IonAlert
          header="Alert!"
          trigger="present-alert"
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Alert canceled');
              },
            },
            {
              text: 'OK',
              role: 'confirm',
              handler: () => {
                console.log('Alert confirmed');
              },
            },
          ]}
          onDidDismiss={({ detail }) => console.log('Dismissed with role: ${detail.role}')}
        ></IonAlert>
        
      </IonContent>
    </IonPage>
  );
};

export default profile;
