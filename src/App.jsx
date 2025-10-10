 import React from 'react'
 import Taskform from './components/Taskform'
 import Tasklist from './components/Tasklist'
 import Progresstracker from './components/Progresstracker'
 
 export default function App() {
   return (
     <div>
       <h1>Task Buddy</h1>
       <p>Your friendly Task Manager</p>
       <Taskform/>
       <Tasklist/>
       <Progresstracker/>
       <button>Clear all Tasks</button>
     </div>
   )
 }
 