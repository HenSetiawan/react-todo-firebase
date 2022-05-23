import { db } from '../config/firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const tasksCollectionRef = collection(db, 'tasks');
const addNewTaskList = async (task) => {
  try {
    await addDoc(tasksCollectionRef, task);
  } catch (error) {
    console.log(error);
  }
};

const getAllTask = async () => {
  try {
    const taskList = await getDocs(tasksCollectionRef);
    return taskList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteTask = async (id) => {
  try {
    const taskDoc = doc(db, 'tasks', id);
    await deleteDoc(taskDoc);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { addNewTaskList, getAllTask, deleteTask };
