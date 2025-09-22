import { useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   //getter,setter  {}안에 있는거는 자바스크립트로 처리
//   //return setcount 랑 똑같은거다.. setcount함수에 함수가 들어왔을 때 prev에 1을 증가해서 setcount에 넣는다.
//   return (
//     <div>
//       <h1>counter:{count}</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         </div>

//     </div>
//   )
// }

// export default App

function App(){
  return(
    <div>
      <Counter/>
      <Counter/>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0)

  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onClick = {() => setCount( prev => prev + 1)}>
        증가
      </button>
    </div>
  )
}
export default App