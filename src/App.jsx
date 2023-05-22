import "./assets/style/main.css"
import Home from "./views/home/Home.jsx";
import Header from "./layouts/Header.jsx";

function App() {

  return (
    <div className={"content-page"}>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
