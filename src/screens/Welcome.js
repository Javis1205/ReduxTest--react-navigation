import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {connect}         from 'react-redux';
import { loginSuccess }  from '../actions/Authencate';
class Welcome extends Component {
    static navigationOptions = {
        header:{
            visible : false
        }
    }   
    render(){
        console.log('WELCOME',this.props)
        return(
            <View style={styles.Container}>
                <TouchableOpacity onPress={()=>{this.props.loginSuccess()}}>
                    <Text style={styles.text}>
                        Welcome
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
export default connect (null,{loginSuccess})(Welcome)