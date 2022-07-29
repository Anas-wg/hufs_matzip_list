import React, { useState,useCallback } from "react"
import Categories from "./Categories";
import Form from "./mypage/Form"
import Lists from "./mypage/Lists"

const initialTodoData = 
    localStorage.getItem("todoData") ? JSON.parse
    (localStorage.getItem("todoData")): [];

export default function MyPage () {

    const [todoData, setTodoData] = useState(initialTodoData)
    const [value, setValue] = useState("")


    const  handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(), 
            title: value,
            completed: false,

        };
    setValue("");

    setTodoData(prev =>[...prev, newTodo])
        localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]))
    }

    const handleClick = useCallback((id)=>{ 
        let newTodoData = todoData.filter((data)=> data.id !== id); 
        setTodoData(newTodoData) 
        localStorage.setItem("todoData", JSON.stringify(newTodoData));
        //todoData가 바뀔때만 생성
    });

    const handleRemoveClick = () => {
    //버튼 누르면 아예 빈 배열을 반환
        setTodoData([]);
        localStorage.setItem("todoData", JSON.stringify([]))
    }

    return (
    <div>
        <Categories />
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4">
            <div className="flex justify-between mb-3 ">
                <h1>나만의 맛집</h1>
                <button onClick={handleRemoveClick}>Delete All</button>
            </div>
            <Lists todoData={todoData} setTodoData={setTodoData} handleClick={handleClick}/> 
            <Form handleSubmit={handleSubmit} value ={value} setValue={setValue}/>
        </div>
      </div>
    </div>
    );
}