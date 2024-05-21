import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const collectionRef = collection(db, "tasks");

  useEffect(() => {
    const fetchTasks = async () => {
      const q = query(collectionRef, orderBy("timestamp"));

      await getDocs(q).then((documents) => {
        console.log("DOCUMENT", documents);
        const tasks = documents.docs.map((doc) => ({ ...doc.data() }));
        console.log("FILTERED DATA FROM THE DOCUMENT", tasks);
        setTasks(tasks);
      });
    };

    fetchTasks();
  }, []);

  const submitTask = async () => {
    try {
      const data = await addDoc(collectionRef, {
        task: newTask,
        isChecked: false,
        timestamp: serverTimestamp(),
      });
      console.log(data);
      setTasks((prevTasks) => {
        return [
          ...prevTasks,
          {
            id: data.id,
            task: newTask,
            isChecked: false,
            timestamp: Date.now(),
          },
        ];
      });
      setNewTask("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>My tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={submitTask}>Create new task</button>
    </div>
  );
};

export default ToDo;
