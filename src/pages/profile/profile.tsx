import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonAlert,
  IonActionSheet,
  IonAvatar,
  IonRow,
  IonCol,
} from '@ionic/react';
import './profile.css';

const Profile: React.FC = () => {
  const [showClickMeAlert, setShowClickMeAlert] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);

  const handleEditProfile = () => {
    console.log('Edit profile');

  };

  const handleChangeProfilePicture = () => {
    console.log('Change profile picture');
  };


  const handleChangeCoverPhoto = () => {
    console.log('Change cover photo');

  };

  const handleDeleteProfile = () => {
    console.log('Delete profile');
   
  };

  const handleCreateAnotherProfile = () => {
    console.log('Create another profile');

  };


  const postImages = [
    '/assets/img/1.jpg',
    '/assets/img/2.jpg',
    '/assets/img/3.jpg',
    '/assets/img/4.jpg',
  ];

  return (
    <IonPage className="general-background">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
  {/* Cover photo */}
  <div className="profile-cover-container">
    <div className="cover-photo">
      <img alt="Cover Photo" src="/assets/img/cover.jpg" />
    </div>
    {/* Profile container */}
    <div className="profile-info-container">
      {/* Profile picture */}
      <IonAvatar className="profile-picture">
        <img alt="Profile Picture" src="/assets/img/prof.jpg" />
      </IonAvatar>
      {/* User info */}
      <div className="profile-info">
        <h2>Irish B. Banganan</h2>
        <p>"Strong enough to handle it all."</p>

        
      </div>
    </div>
  </div>

        {/* Posts grid */}
        <div className="posts-grid">
          {postImages.map((image, index) => (
            <img key={index} src={image} alt={`Post ${index + 1}`} />
          ))}
        </div>

        {/* Buttons container */}
        <div className="buttons-container">
          {/* "Click Me" button */}
          <IonButton
            id="present-alert"
            color="warning"
            expand="full"
            onClick={() => setShowClickMeAlert(true)}
          >
            Click Me
          </IonButton>
          <IonAlert
            isOpen={showClickMeAlert}
            onDidDismiss={() => setShowClickMeAlert(false)}
            header="A Short Title Is Best"
            subHeader="A Sub Header Is Optional"
            message="A message should be a short, complete sentence."
            buttons={['Action']}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;