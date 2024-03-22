const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let todo = [];

function findItems(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return i;
    }
  }
  return -1;
}

function remove(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

app.get("/todo", (req, res) => {
  res.json(todo);
});

app.get("/todo/:id", (req, res) => {
  const todoIndex = findItems(todo, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send("not found");
  } else {
    res.json(todo[todoId]);
  }
});

app.post("/todo", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 10), // unique random id
    title: req.body.title,
    description: req.body.description,
  };
  res.status(201).json(newTodo);
  todo.push(newTodo);
});

app.put("/todo/:id", (req, res) => {
  const todoIndex = findItems(todo, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todo[todoIndex].title = req.body.title;
    todo[todoIndex].description = req.body.description;
    res.json(todo[todoIndex]);
  }
});

app.delete("/todo/:id", (req, res) => {
  const todoIndex = findItems(todo, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send("");
  } else {
    todo = remove(todo, todoIndex);
    res.send;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
