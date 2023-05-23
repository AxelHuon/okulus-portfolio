import Router from "./router/Router";
import "./assets/style/main.css";
import {Component} from "react";

class App extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <>
                <div className={"loader"}>
                
                </div>
                <div className="page">
                    <Router/>
                </div>
            </>
        );
    }
}

export default App;
