require("@babel/polyfill");
import React from 'react';
import ReactDOM from 'react-dom';
import "../scss/index.scss";

class App extends React.Component{

    render(){
        return(
           <div class="jumbotron text-center">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">If it works well, that means bootstrap and react worked well.</p>
                <hr class="my-4"/>
                <p>Please delete this component to edit your page.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">I got it.</a>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));