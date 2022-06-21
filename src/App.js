import React, { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login';
import { connect } from 'react-redux';
import { withRouter } from './Hoc/withRouter';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


//import DialogContainer from './components/Dialogs/DialogContainer';
const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    catchAllUnhanledErrors = (reason, promise) => {
        alert('some error occured')
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhanledErrors)
       
    }
        
    
// componentWillUnmount() {
//     window.removeaddEventListener("unhandledrejection", this.catchAllUnhanledErrors)

// }


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
                    <Route exact path='/' element={
                        <Navigate to={'/profile'} />}></Route>
                    <Route path='/dialogs/*' element={
                        <React.Suspense fallback={<div>Завантаження...</div>}>
                            <DialogContainer store={this.props.store} />
                        </React.Suspense>}></Route>
                    <Route path='/profile/:userId' element={
                        <React.Suspense fallback={<div>Завантаження...</div>}>
                            <ProfileContainer store={this.props.store} />
                        </React.Suspense>}></Route>
                    <Route path='/profile' element={
                        <React.Suspense fallback={<div>Завантаження...</div>}>
                            <ProfileContainer store={this.props.store} />
                        </React.Suspense>}> </Route>
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<div>404 not found</div>} />

                </Routes>
            </div>
        </div>

    );
}
}
export const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

let SamuraiJSApp = (props) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer state={props.state} dispatch={store.dispatch.bind(store)} store={store} />
                {/* <AppContainer /> */}
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}
export default SamuraiJSApp