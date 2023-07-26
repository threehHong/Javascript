// library import 방법
const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors())

// body-parser
// API reference -> 5.x(beta) -> body로 키워드 찾기.
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let id = 2;

const todoList = [
  {
    id: 1,
    text: '할일1',
    done: false
  },
];

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/api/todo', function(req, res) {
  res.json(todoList);
})

app.post('/api/todo', function(req, res) {
  console.log(1);
  const {text, done} = req.body
  todoList.push({
    id: id++,
    text,
    done
  })
  res.send("확인");
})

app.listen(4000, () => {
    console.log('server start')
})