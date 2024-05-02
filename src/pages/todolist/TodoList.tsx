import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonButton, IonIcon, IonButtons, IonBackButton } from '@ionic/react';
import './TodoList.css';
import { trash, create } from 'ionicons/icons';

// Firebase
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number>(-1);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      const todosData = snapshot.docs.map(doc => doc.data().text);
      setTodos(todosData);
    });

    return () => unsubscribe();
  }, []);

  const addTodo = async () => {
    if (newTodo.trim() !== '') {
      await addDoc(collection(db, 'todos'), { text: newTodo });
      setNewTodo('');
    }
  };

  const removeTodo = async (index: number) => {
    const todoSnapshot = await getTodoSnapshotAtIndex(index);
    if (todoSnapshot) {
      await deleteDoc(todoSnapshot.ref);
    }
  };

  const editTodo = async (index: number) => {
    setEditIndex(index);
    setNewTodo(todos[index]);
  };

  const updateTodo = async () => {
    if (newTodo.trim() !== '') {
      const todoSnapshot = await getTodoSnapshotAtIndex(editIndex);
      if (todoSnapshot) {
        await updateDoc(todoSnapshot.ref, { text: newTodo });
      }
      setEditIndex(-1);
      setNewTodo('');
    }
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setNewTodo('');
  };

  const toggleTodo = async (index: number) => {
    const todoSnapshot = await getTodoSnapshotAtIndex(index);
    if (todoSnapshot) {
      const todoData = todoSnapshot.data();
      if (todoData) {
        await updateDoc(todoSnapshot.ref, { text: todoData.text.startsWith('✅ ') ? todoData.text.slice(2) : '✅ ' + todoData.text });
      }
    }
  };

  const getTodoSnapshotAtIndex = async (index: number) => {
    const snapshot = await onSnapshot(collection(db, 'todos'));
    const todoSnapshots = snapshot.docs;
    return todoSnapshots[index];
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href='/Home'> Back</IonButton>
          </IonButtons>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonInput placeholder="New Todo" value={newTodo} onIonChange={(e) => setNewTodo(e.detail.value!)} />
            <IonButton slot="end" color="dark" onClick={addTodo}>Add</IonButton>
          </IonItem>

          {todos.map((todo, index) => (
            <IonItem key={index}>
              <IonCheckbox slot="start" onClick={() => toggleTodo(index)} />
              <IonLabel>{todo}</IonLabel>
              <IonButton slot="end" color="light" onClick={() => removeTodo(index)}>
                <IonIcon icon={trash} />
              </IonButton>
              <IonButton slot="end" color="light" onClick={() => editTodo(index)}>
                <IonIcon icon={create} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TodoList;
