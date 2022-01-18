import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import SearchBar from "./Search";
import Register from "./Register";
import Login from "./Login";

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>

                <Route path="/" exact>
                    {isLoggedIn ? <SearchBar /> : <Redirect to="/login" />}
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

            </Switch>
        </main>
    )
}