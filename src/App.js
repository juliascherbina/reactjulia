import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { addPost } from './redux/state';
import { updateNewPostText2 } from './redux/state';



const App = (props) => {
    return (


        <div className='app-wrapper'>

            <Header />
            <Navbar state={props.state.sidebar} />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<Dialogs store={props.store}  dispatch={props.dispatch} />} />
                    <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />} />
                    <Route path='/news' element={<Dialogs state={props.state.dialogsPage}
                        dispatch={props.dispatch} />} />
                    <Route path='/music' element={<Profile state={props.state.profilePage} profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
                    <Route path='/settings' element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />

                </Routes>
            </div>
        </div>

    );
}

export default App;