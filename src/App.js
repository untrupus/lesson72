import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dishes from "./containers/Dishes/Dishes";
import Orders from "./containers/Orders/Orders";
import Layout from "./components/Layout/Layout";
import AddForm from "./containers/AddForm/AddForm";
import EditForm from "./containers/EditForm/EditForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Dishes}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/add" component={AddForm}/>
            <Route path="/:id/edit" exact component={EditForm}/>
            <Route render={() => <h1>404</h1>}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
