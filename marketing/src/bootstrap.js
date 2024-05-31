import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// Mount function to start up the app
const mount = (el) => { //We assume that this mount function will be called by some HTML element(el)
    ReactDOM.render(<App/>,el); //This means we want to render this <App> component into the HTML element el.
};


//If we are in development and in isolation,
//Call mount immediately
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}


//We are running through container
//and we should export the mount function
export {mount};