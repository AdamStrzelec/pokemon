import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import { userStatuses } from '../userStatus/userStatus';
import { UserContext } from '../context/context';

const Root = () => {

    const [userStatus, setUserStatus] = useState(userStatuses.SIGNED_OUT)

    useEffect(()=>{
        if(localStorage.getItem('token') === '123'){
            setUserStatus(userStatuses.SIGNED_IN);
        }else{
            setUserStatus(userStatuses.SIGNED_OUT);
        }
    },[])

    const handleUserLogin = () => {
        if(localStorage.getItem('token') === '123'){
            localStorage.setItem('token', '');
            setUserStatus(userStatuses.SIGNED_OUT);
        }else{
            localStorage.setItem('token', '123');
            setUserStatus(userStatuses.SIGNED_IN);
        }
    }
    

    return(
        <div> 
            <Router>
                <UserContext.Provider value={{
                    userStatus,
                    handleUserLogin
                }}>
                    <Navbar />
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </UserContext.Provider>
            </Router>
        </div>
    )
}

export default Root;