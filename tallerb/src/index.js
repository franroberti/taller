import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import NavBar from "./navbar";
import ClientsForm from './clients/form';
import ClientsList from './clients/list';
import registerServiceWorker from './registerServiceWorker';
import {store} from "./reducers/configureStore"
import {Calendar} from "./infiniteCalendar";




const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <NavBar/>
                <Route exact path="/" component={ClientsList}/>
                <Route exact path="/add-client" component={ClientsForm}/>
                <Route exact path="/turnos" component={Calendar}/>
            </div>
        </BrowserRouter>
    </Provider>
);



ReactDOM.render(<Root/>,document.getElementById('root'));


registerServiceWorker();



