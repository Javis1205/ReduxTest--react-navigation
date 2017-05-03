import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { logout } from '../actions/Authencate';
import { connect } from 'react-redux';
class Login extends Component {
    static navigationOptions = {
        title : 'LOGIN',
        header : ({state}) => ({
            left: (
                <TouchableOpacity onPress={()=>{state.params.onLogoutPressed()}}>
                    <Text>
                        Back
                    </Text>
                </TouchableOpacity>
            )
        })
    }
    constructor(props){
        super(props);
        this.onLogoutPressed = this.onLogoutPressed.bind(this);
    }
    componentDidMount(){
        this.props.navigation.setParams({
            onLogoutPressed : this.onLogoutPressed
        })
    }
    onLogoutPressed = () => {
        this.props.logout();
    }
    render(){
        return(
            <View style={styles.Container}>
                <TouchableOpacity onPress={()=>{this.props.logout()}}>
                    <Text style={styles.text}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = {
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30
    }
}

const mapStateToProps = (state) => {
    return {
        logged :state.xacthuc.loggedIn,
        user   :state.xacthuc.user,
    };
    
}

export default connect (mapStateToProps,{logout})(Login);