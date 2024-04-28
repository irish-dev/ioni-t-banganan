import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, closeOutline, ellipse, homeOutline, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';

import Home from './pages/home';
import Profile from './pages/profile';
import Clickcounter from './pages/clickcounter';
import Calculator from './pages/calculator';
import TodoList from './pages/TodoList'



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* Home Router */}

          <Route exact path="/TodoList">
            <TodoList />
          </Route>

          <Route exact path="/Home">
            <Home />
          </Route>
          
          <Route exact path="/profile">
            <Profile />
          </Route>
         
          <Route path="/Calculator">
            <Calculator />
          </Route>
         
          {/* Application default route */}
          <Route exact path="/">
            <Redirect to="/Home" />
            </Route>
          
          <Route exact path="/clickcounter">
            <Clickcounter />
          </Route>
          
          
          <Route path="/calculator">
            <Calculator />
          </Route>

         
          {/* Application default route */}

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {/* Home tab button */}
          <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Blank" href="/Blank">
            <IonIcon aria-hidden="true" icon={closeOutline} />
            <IonLabel>Blank</IonLabel>
            </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;