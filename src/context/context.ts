import React from 'react';
import { userStatuses } from '../userStatus/userStatus';

export const UserContext = React.createContext({
    userStatus: userStatuses.SIGNED_OUT,
    handleUserLogin: () => {}
})