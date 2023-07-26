const express = require('express')
const app = express()


const database = [
  { id: 1, title: '글1'},
  { id: 2, title: '글2'},
  { id: 3, title: '글3'}
]

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// 1. READ
//    /database 경로로 접속하면 database에 담긴 내용을 화면에 보여준다.
app.get('/database', function(req, res) {
  // 클라이언트는 /database url 경로로 서버에 요청을 -> 서버는 전달받은 URL에 따른 데이터를 res에 담아 클라이언트에 전달
  res.send(database);
})


// 2. READ
//    / 경로로 접속하면 서버에 있는 /view/index.html파일을 클라이언트에 전달.
//    Postman -> GET으로 설정하기
app.get('/', function (req, res) {
  //  res에 index.html 파일을 담아서 클라이언트에 전달
  //  (res.render에 대해서도 알아보기 - ejs, pug에 키워드로 찾아보기).
  res.sendFile(__dirname + '/views/index.html');
})


// 3. READ
//    /database/:id :id 부분에 숫자를 넣은 경로로 접속하면 해당 id와 일치하는 데이터를 화면에 보여준다.
//    Postman -> GET으로 설정하기
app.get('/database/:id', function(req, res) {
  const id = req.params.id;
  const data = database.find(el => el.id === Number(id));
  res.send(data);
})


// 4. 추가
//    /database/add-database 경로에서 body에 JSON 형태로 값을 담아 전달하면 database에 값이 추가된다.
//    Postman -> GET으로 설정하기 + body에서 row 클릭 -> JSON
app.post('/database/add-database', function(req, res) {
  const title = req.body.title;
  database.push({
    id: database.length + 1,
    title,
  })
  res.send('값이 정상적으로 추가되었습니다');
})


// 5. 수정
//    /database/add-database 경로에서 body에 JSON 형태로 값을 담아(원하는 id에 수정한 title 내용을 담아) 전달하면 database에 값이 수정된다.
//    Postman -> GET으로 설정하기 + body에서 row 클릭 -> JSON
app.post('/add-database', function(req, res) {
  const id = req.body.id;
  const title = req.body.title;
  database[id - 1].title = title; 
  res.send('값이 정상적으로 수정 되었습니다');
}) 


// 6. 삭제
//    /database/add-database 경로에서 body에 JSON 형태로 값을 담아(삭제를 원하는 id값을 담아) 전달하면 database에 값이 삭제된다.
//    Postman -> GET으로 설정하기 + body에서 row 클릭 -> JSON
app.post('/delete-database', function(req, res) {
  const id = req.body.id;
  database.splice(id - 1, 1); 
  res.send('값이 정상적으로 삭제 되었습니다');
  // splice(시작 인덱스 지점, 개수)
})


app.listen(3000, () => {
  console.log('server on');
})

