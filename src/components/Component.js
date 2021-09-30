import React, { useState } from 'react';


const Component = ({ data, handleIncrementClick, handleDecrementClick, handleAdddTodo }) => {
    const [text, setText] = useState('')
    console.log(data);
    const handleClick = () => {
        console.log(text);
        let newItem = {
            isCompleted: false,
            title: text
        }
        handleAdddTodo(newItem);
        setText('')
    }
    // const handleDelete = () => {

    // }

    return (
        < div >
            {/* <h1>Helloworld React & Redux! {count}</h1>)
        {console.log()}
        <input
            value={count}
        /> */}
            {/* {console.log(data)} */}
            {/* <input type="submit" value="Submit"></input> */}
            {
                data.map(i => {
                    return <li>{i.title}</li>
                })

            }
            <input
                type='text'
                placeholder='Add your new todo '
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                type='submit'
                onClick={handleClick}
            > Submit
            </button>
            {/* <button
                type='delete'
                onClick={handleDelete}
            > Submit
            </button> */}
            <button onClick={handleDecrementClick}>Decrement</button>
            <button onClick={handleIncrementClick}>Increment</button>
        </div >
    )
}
export default Component;