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


<<<<<<< HEAD
=======
ReactDOM.render(<Root store={store}/>,document.getElementById('root'));
>>>>>>> b07c2f36896c1d84695955d9c82727000e0dc680


const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <NavBar/>
                <Route exact path="/" component={ClientsList}/>
                <Route exact path="/add-client" component={ClientsForm}/>
            </div>
        </BrowserRouter>
    </Provider>
);



ReactDOM.render(<Root/>,document.getElementById('root'));


registerServiceWorker();



