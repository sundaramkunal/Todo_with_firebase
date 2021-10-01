import React from "react";
import db from "./firebase_config";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
// import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore/lite";
// import firebase from 'firebase';
const App = () => {
  const [todos, setTodos] = useState([]);
  // const todolist = doc(db, "todos");
  // const docSnap = await getDoc(todolist);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  // const [todoInput, setTodoInput] = useState("");
  // useEffect(() => {
  //   const newTask = getTodos(db);
  //   console.log(newTask);
  //   setTodos(newTask);
  // }, []);

  // const getTodos = async (db) => {
  //   const todolist = collection(db, "todos");
  //   const snapshot = await getDocs(todolist);
  //   const snapList = snapshot.docs.map((doc) => doc.data());
  //   console.log(snapList);
  //   return snapList;
  // };
  useEffect(() => {
    console.log("hello");
    getTodos(db);
  }, []);

  const getTodos = async (db) => {
    const todolist = collection(db, "todos");
    const snapshot = await getDocs(todolist);
    const snapList = snapshot.docs.map((doc) => doc.data());
    console.log(snapList);
    setTodos(snapList);
  };
  // const newTask = getTodos(db);

  // async function getTodos(db) {}
  // const newTask = getTodos(db);
  //setTodos(getTodos(db));
  // const getTodos = () => {
  // db.collection("todos").onSnapshot(function (querySnapshot) {
  //   setTodos(
  //     querySnapshot.getDocs.map((doc) => ({
  //       id: doc.id,
  //       todo: doc.data().todo,
  //       completed: doc.data().completed,
  //     }))
  //   );
  // });
  // };

  // const todolist = collection(db, "todos");
  // const snapshot = getDocs(todolist);
  // console.log(getTodos(db));

  // function addTodo(e) {
  //   e.preventDefault();

  //   db.collection("todos").add({
  //     completed: true,
  //     // timestamp: getFirestore.FieldValue.serverTimestamp(),
  //     todo: todoInput,
  //   });

  //   setTodoInput("");
  // }
  // console.log(db);
  return (
    <div>
      {console.log("go")}
      <h1> Todos App </h1>
      <form>
        <TextField
          id="standard-basic"
          label="Write a Todo"
          // value={todoInput}
          style={{ width: "90vw", maxWidth: "500px" }}
          // onChange={(e) => setTodoInput(e.target.value)}
        />
        {/* <Button
          type="submit"
          variant="contained"
          // onClick={addTodo}
          style={{ display: "none" }}
        >
          Default
        </Button> */}
        {/* <button className="previous-round" onClick={() => getTodos(db)}>
          &#8249;
        </button> */}
      </form>
      {console.log(todos)}
      {/* {todos.map((todo) => (
        <p>{todo}</p>
      ))} */}
    </div>
  );
};
export default App;
