import "./assets/style/main.css"
import Header from "./layouts/Header.jsx";
import Router from "./router/Router.jsx";

function App() {

  return (
    <div className={"content-page"}>
      <Header/>
      <Router/>
    </div>
  )
}

export default App
