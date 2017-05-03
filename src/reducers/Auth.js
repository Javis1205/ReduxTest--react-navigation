import { LOGIN, LOGOUT } from '../actions/type';

const INITIAL = {
    loggedIn: false,
    user    : null,
}
export default (state=INITIAL,action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                loggedIn:true,
                user:action.payload
            };
        break;
        case 'XACTHUC' :
            return{
                ...state,
                user: action.payload
            }
        break;
        case LOGOUT :
            return {
                state:INITIAL
            };    
        break;
        
        default :
            return state;
    }
}