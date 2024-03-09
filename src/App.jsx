import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actor = ['Sakib', 'Bpparaj', 'SalmanShaha', 'Joshim', 'Rubbel', 'rajjak']
  const singer = [
    {id: 1, name: 'mahafujur Rahman', age: 60},
    {id: 2, name: 'Arfin Rumi', age: 32},
    {id: 3, name: 'Riva Parvin', age: 35},
    {id: 4, name: 'Alom vai', age: 35},
    {id: 5, name: 'Titu', age: 60}
  ]
  return (
    <>
      <h1>Vite + React</h1> 
      {/* <Actor name = {"Shoriful Raj"}></Actor>
      {
        actor.map(actor => <Actor name= {actor} ></Actor>)
      } */}
      
      {
        singer.map(singer => <Singer singer = {singer}></Singer>)
      }
      {/* <Todo name = 'sujan'
       isDone = {true}></Todo>
      <Todo name = 'sujan' 
      isDone = {false}></Todo>
      <Todo name = 'sujan' 
      isDone = {true}></Todo> */}
      {/* <Device name = 'Mobile' price = '500'></Device>
      <Device name = 'laptop' price = '400'></Device>
      <Device></Device>
      <Device></Device>
      <Person></Person>
      <Student grade = '20' roll = '8'></Student> 
      <Student grade= '22' roll = '10'></Student> 
      <Student></Student> 
      <Devloper></Devloper> */}

    </>
  )

  function Person() {
    const student = {name: 'Roki', age: 20}
    const money = 20;
    return (
      <h3>I am {student.name} with age {student.age + money}</h3>
    )
  }

  

  function Student({grade=1, roll=0}) {
    return (
      <div className='student'>
        <h3>i am a student</h3>
        <p>Grade:{grade}</p>
        <p>Rool:{roll}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, blanditiis!</p>
      </div>
    )
  }


  function Devloper() {
    const developerStyle = {
      margin: '20px',
      padding: '15px',
      border: '2px solid purple'
    }
    return (
      <div style={{
        margin: '20px',
        padding: '15px',
        border: '2px solid purple'
      }}>
        <h3>Devloper</h3>
        <p>fon end webdevloper</p>
      </div>
    )
  }

  function Device(props) {
    console.log(props)
    return (
      <h2>This Device: {props.name} price: {props.price}</h2>
    )
  }
}

export default App
