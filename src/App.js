import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogContainer from './components/Dialogs/DialogContainer';




const App = (props) => {
    return (


        <div className='app-wrapper'>

            <Header />
            <Navbar  />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogContainer store={props.store}  />} />
                    <Route path='/profile' element={<Profile store={props.store}/>} />
                    <Route path='/news' />
                    <Route path='/music' element={<Profile  store={props.store}/>} />
                    <Route path='/settings' />

                </Routes>
            </div>
        </div>

    );
}

export default App;