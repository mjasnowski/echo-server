import React from 'react';
import Header from './header';
import EchoInput from './echoinput';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="App">
                <Header label="Echo Server"/>
                <EchoInput defaultValue=""/>
            </div>
        );
    };

}

export default App;