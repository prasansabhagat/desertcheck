import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./header.jsx";
import Carousels from "./carousel";
import Footer from "./footer.jsx";
import Sign from "./signup";
function App(){
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/header" component={ Header }></Route>
                <Route exact path="/signup" component={ Sign }></Route>
                <Carousels></Carousels>
            </Switch>
        </Router>
    );
}
export default App;