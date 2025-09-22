import './App.css'
import { useState  } from 'react'

function App() {
  const [count, setCount] = useState(0) //useState는 react에서 제공하는 함수, count는 변수, setCount는 count를 변경하는 함수
  
  // let count =0

  // const add = () => {
  //   count ++
  //   console.log('count', count)
  // }

  return (
    // <div>
    //   <h1>카운터</h1>//html, javascript를 합친 형태 = tsx
    //   <button onClick={add}>증가</button>
    // </div>
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // setCount(count + 1) //setCount를 통해 count를 변경해야 화면이 다시 렌더링됨
          setCount((prev) => prev + 1) //이전 상태를 기반으로 새로운 상태를 계산할 때는 함수형 업데이트 사용
        }
      }
      >
        증가
      </button>
    </>
  )
}

export default App
