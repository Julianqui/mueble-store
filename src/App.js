import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavBar} from "./components/navBar/navBar";
import {ItemListContainer} from "./components/itemListContainer/itemListContainer";
import {ItemDetailContainer} from "./components/itemDetailContainer/itemDetailContainer";
import { Cart } from './components/cart/cart'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



    /*const item = 'Soy el Item List Container con props';*/


    export const App = () => {
    return (

        <Router>
            <main>
                <NavBar/>


                <Switch>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/category/:id">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/item/:id">
                        <ItemDetailContainer />
                    </Route>
                    <Route path='/cart'>
                        <Cart/>
                    </Route>

                </Switch>
            </main>
        </Router>
    )
}


