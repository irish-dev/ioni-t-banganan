import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

// Define card data array
const cardData = [
  {
    title: 'Clickcounter',
    subtitle: 'Applet #1',
    link: '/clickcounter',
    img: '/assets/click.png',
  },
  {
    title: 'Calculator',
    subtitle: 'Applet #2',
    link: '/calculator',
    img: '/assets/calculator.png',
  },
  {
    title: 'Todo List',
    subtitle: 'Applet #3',
    link: '/todolist',
    img: '/assets/todo.png',
  },
];

function Home() {
  // Initialize state for search term
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  // Function to handle card click events
  const handleCardClick = (link) => {
    history.push(link);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to My Applications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Search bar to handle search term input */}
        <IonSearchbar
          value={searchTerm}
          onIonChange={(e) => setSearchTerm(e.detail.value ?? '')}
          placeholder="Search applications"
        />
        {/* Render the filtered list of applet cards */}
        <IonList>
          {cardData
            // Filter card data based on the search term (case-insensitive comparison)
            .filter((card) =>
              card.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            // Map filtered card data to IonItem components
            .map((card, index) => (
              <IonItem
                key={index}
                button
                onClick={() => handleCardClick(card.link)}
              >
                {/* Display the applet's image */}
                <IonThumbnail slot="start">
                  <img src={card.img} alt={card.title} />
                </IonThumbnail>
                {/* Display the applet's title and subtitle */}
                <IonLabel>
                  <h2>{card.title}</h2>
                  <p>{card.subtitle}</p>
                </IonLabel>
              </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Home;
