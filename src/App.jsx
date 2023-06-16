import './App.css';
import React from 'react';
import {Navbar,Header,Agents,Guns,News,Footer} from './components'

function App(){
    return(
        <div className='App'>
            <Navbar/>
            <Header/>
            <Agents/>
            <Guns/>
            <News/>
            <Footer/>
        </div>
    );
}

export default App;