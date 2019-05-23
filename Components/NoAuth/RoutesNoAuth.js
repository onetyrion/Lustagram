import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator, createStackNavigator} from 'react-navigation';

const SignIn = (props) => {
    console.log(props);
    // props.navigation.navigate();
    const { navigation } = props;
    return (
        <View style={{flex: 1,justifyContent: 'center',backgroundColor:'#D0F323'}}>
            <Text>Componente SignIn</Text>
            <Button 
            title='Navegar a la SignUp'
            onPress={() => {navigation.navigate('SignUp')}}
            />
        </View> 
    )
}
const SignUp = (props) => {
    const { navigation } = props;
    return (
        <View style={{flex: 1,justifyContent: 'center',backgroundColor:'#646464'}}>
            <Text>Componenete SignUp</Text>
            <Button
            title="Regresar a SignIn"
            onPress={()=>{navigation.goBack()}}
            />
        </View>
    );
}

const RoutesNoAuths = createStackNavigator({
    SignIn: {
      screen: SignIn,
    //   navigationOptions:{ 
    //     title: 'SignIn',
    //     header:null 
    //   },
    },
    SignUp:{
        screen: SignUp,
        // navigationOptions: { title: 'SignOut' },
    }
 },
    // {  defaultNavigationOptions: {  header: null   },   },
    { defaultNavigationOptions: { 
        // title: 'Título desde el StackNavigator',
        header:null
    } 
},);
export {RoutesNoAuths};