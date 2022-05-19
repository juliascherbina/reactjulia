import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogContainer from './components/Dialogs/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login';
import { connect } from 'react-redux';
import { GetAuthUserData } from './redux/auth-reducer'
import { withRouter } from './Hoc/withRouter';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';




class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (

            <div className='app-wrapper'>

                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogContainer store={this.props.store} />} />
                        <Route path='/profile/:userId' element={<ProfileContainer store={this.props.store} />} />
                        <Route path='/profile' element={<ProfileContainer store={this.props.store} />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/login' element={<Login />} />

                    </Routes>
                </div>
            </div>

        );
    }
}
export const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);