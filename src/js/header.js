import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='Header'>
                <h1>{this.props.label}</h1>
            </div>
        );
    };
}

export default Header;