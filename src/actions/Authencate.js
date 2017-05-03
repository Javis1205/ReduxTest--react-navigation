import { NavigationActions } from 'react-navigation';
import { LOGIN, LOGOUT } from './type';
export const loginSuccess = (user) => {
    return (dispatch) => {
        dispatch({
            type : LOGIN,
            payload: user
        });
        const resetNavigator = NavigationActions.reset({
            index: 0,
            actions : [
                NavigationActions.navigate({
                    routeName: 'Authorized'
                })
            ],
            params:( user )
        });
        dispatch(resetNavigator);
    } 
}
export const thaydoi = (x) => {
    return (dispatch) => {
        dispatch({
            type : 'XACTHUC',
            payload: x
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        dispatch({
            type : LOGOUT
        });
        const resetNavigator = NavigationActions.reset({
            index: 0,
            actions : [
                NavigationActions.navigate({
                    routeName: 'Unauthorized'
                })
            ]
        });
        dispatch(resetNavigator);
    } 
}