import { Provider } from 'react-redux'
import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './modules/app/components/navbar';
import 'tachyons'
import NotFound from './modules/app/components/notFound';
import store from './store';
import Home from './modules/home';
import Build from './modules/build';

class AppRouter extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/build" component={Build} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default AppRouter;