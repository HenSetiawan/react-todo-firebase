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

const getTasks = async (status = 'all') => {
  try {
    const taskListCollection = await getDocs(tasksCollectionRef);
    const tasksData = taskListCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    if (status === 'all') {
      return tasksData;
    } else if (status === 'unfinished') {
      return tasksData.filter((task) => task.status === 'unfinished');
    } else if (status === 'finished') {
      return tasksData.filter((task) => task.status === 'finished');
    }
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

export { addNewTaskList, getTasks, deleteTask };
