import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApplicationFormPage } from '../pages/ApplicationFormPage/index' ;
import { CreateTripPage } from '../pages/CreateTripPage/index';
import { ListTripsPage } from '../pages/ListTripsPage/index';
import { TripPrivatePage } from '../pages/TripPrivatePage/index';
import { TripDetailsPage } from '../pages/TripDetailsPage/index'
import { HomePage } from '../pages/HomePage/index';
import { LoginPage } from '../pages/LoginPage/index';

export function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/application-form">
            <ApplicationFormPage />
          </Route>
          <Route exact path="/trips/create">
            <CreateTripPage />
          </Route>
          <Route exact path="/trips/list">
            <ListTripsPage />
          </Route>
          <Route exact path="/trips">
            <TripPrivatePage />
          </Route>
          <Route exact path="/trips/details">
            <TripDetailsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}