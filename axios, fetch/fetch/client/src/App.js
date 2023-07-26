import React, { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(null);
  
  // 1. 서버에게 DB에 저장된 데이터 가져와 보내달라고 하는 API 로직
  const fetchData = () => {
    fetch('http://localhost:4000/api/todo')
      .then((response) => response.json())
      .then((data) => setTodoList(data))
  }
  
  // fetch 함수 밖에 useEffect를 사용하는 이유 
  // 리렌더링을 막기위해 사용
  // 렌더링 -> fetch 함수는 비동기 함수, 서버에 데이터를 요청하고 다음 코드 실행 ->
  // 이후 setTodoList()에 요청한 데이터 저장 -> 렌더링의 과정을 계속 반복하기 때문.
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = (e) => {
    const text = e.target.text.value;
    const done = e.target.done.checked;
  
    // 2. 서버에게 입력한 데이터를 보내 DB에 저장해 달라는 API 로직
    // 데이터를 보내줄 때는 body에 담아서 보내준다
    // JSON.stringify() 직렬화?
    fetch('http://localhost:4000/api/todo', {
      // 아무것도 적지 않으면 GET 요청(또는 method를 적지 않으면).
      method: 'POST',

      // 내가 지금 보낸 데이터가 JSON 데이터라는 것을 알려주는 것
      // 이렇게 알려줘야 body에서 json 형태로 parsing을 해서 사용할 수 있다.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        done,
      })
    }).then(() => {fetchData()})
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input name='text' />  
        <input name='done' type='checkbox' />  
        <input type="submit" value="추가" />  
      </form>

      {/* 
      todoList에 데이터가 담겨 있으면 todoList.map이 실행 되게 할 수 있도록 단축 평가 논리 계산법 적용(&&)
      or
      optional chaining을 사용해서 없을 값이 없을 경우 렌더링 되지 않게 만든다.*/}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        marginTop: "20px"
      }}>
        {todoList?.map((todo) => (
            <ul key={todo.id} style={{ 
              width: '200px',
              listStyle: 'none',
              border: "1px solid #000",
              padding: "10px",
              }}>
              <li> {todo.id} </li>
              <li> {todo.text} </li>
              <li> {todo.done ? 'Y' : 'N'} </li>
            </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
