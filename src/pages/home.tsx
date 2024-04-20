import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from '@ionic/react';

import './profile.css';

function Home() {
  return (
    <IonCard>
      <IonCardHeader>
      <ion-card>
  <ion-card-header>
    <ion-card-title>Irish</ion-card-title>
    <ion-card-subtitle>student</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    Nothing more, nothing less.
  </ion-card-content>
</ion-card>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/click.png" />
            </IonThumbnail>
            <IonButton href='clickcounter'>Clickcounter</IonButton>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="/assets/calculator.png" />
            </IonThumbnail>
            <IonButton href='/Calculator'>Calculator</IonButton>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Todo-List</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel></IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
}
export default Home;