import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ListTripsPage from '../pages/listTrip/ListTripsPage';
import ApplicationFormPage from '../pages/application/ApplicationFormPage';
import LoginPage from '../pages/login/LoginPage';
import AdminHomePage from '../pages/admin/AdminHomePage';
import CreateTripPage from '../pages/create/CreateTripPage';
import TripDetailsPage from '../pages/tripDetails/TripDetailsPage'
import ErrorPage from '../pages/error/ErrorPage';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/trips/list">
                    <ListTripsPage />
                </Route>

                <Route exact path="/trips/application">
                    <ApplicationFormPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/admin/trips/list">
                    <AdminHomePage />
                </Route>

                <Route exact path="/admin/trips/create">
                    <CreateTripPage />
                </Route>

                <Route exact path="/admin/trips/:id">
                    <TripDetailsPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;