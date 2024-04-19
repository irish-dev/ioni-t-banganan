import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonGrid, IonRow, IonCol, IonLabel } from '@ionic/react';
import './calculator.css';

const calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (val: string) => {
    setInput((prev) => prev + val);
  }

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  }

  const handleClear = () => {
    setInput("");
    setResult("");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput value={input} readonly></IonInput>
              <IonLabel>{result}</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton expand="full" onClick={() => handleClick("1")}>1</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("2")}>2</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("3")}>3</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("+")}>+</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton expand="full" onClick={() => handleClick("4")}>4</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("5")}>5</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("6")}>6</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("-")}>-</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton expand="full" onClick={() => handleClick("7")}>7</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("8")}>8</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("9")}>9</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("*")}>*</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton expand="full" onClick={() => handleClick("0")}>0</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={handleClear}>Clear</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={handleCalculate}>=</IonButton></IonCol>
            <IonCol><IonButton expand="full" onClick={() => handleClick("/")}>/</IonButton></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default calculator;
