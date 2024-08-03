import './App.css'
import Clicker from './Clicker'

function App() {

  return (
    <>
      <Clicker />
    </>
  )
}

export default App


//在普通javascript中操控DOM的寫法 但是在react中就不一樣了
//這是在javascript中設置事件監聽器的寫法
// const btn = querySelector('.btn')

// btn.addEventListener('click', () => {
//   console.log('clicked')
// })


//在react中則是會創建一個clicker.jsx這樣的檔案 然後在App.jsx中引入
//看到Clicker.jsx的檔案中會發現是用onClick這樣的屬性來設置事件監聽器而不是用addEventListener這樣的方法來設置這就是react的特色之一也是與普通javascript的DOM不同之處