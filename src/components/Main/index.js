import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/series';
import { BrowserRouter } from 'react-router-dom';
import SingleSeries from '../../containers/SingleSeries';

const Main = props => (
   <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Series} />
            <Route path="/series/:id" component={SingleSeries} />
        </Switch>

   </BrowserRouter> 
);

export default Main;