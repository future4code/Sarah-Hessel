import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApplicationFormPage } from './ApplicationFormPage';
import { CreateTripPage } from './CreateTripPage';
import { ListTripsPage } from './ListTripsPage';
import { TripDetailsPage } from './TripDetailsPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

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
          <Route exact path="/trips/details/">
            <TripDetailsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}