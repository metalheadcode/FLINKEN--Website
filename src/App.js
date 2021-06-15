import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "reactstrap/lib/Container";
import FootersLayoutsTypeEighth from "./layouts/FootersLayouts/FootersLayoutsTypeEighth/FootersLayoutsTypeEighth";
import Header from "./layouts/HeroLayouts/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";

const App = () => {
    return (
        <Router>
            <Container>
                <Header />
            </Container>
            <Switch>
                <Route exact path="/" render={(props) => <HomeScreen {...props} />} />
                <Route path="/products/:id" render={(props) => <ProductDetail {...props} />} />
            </Switch>
            <FootersLayoutsTypeEighth />
        </Router>
    );
};

export default App;
