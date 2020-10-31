import React from "react";
import { View, Text, ActivityIndicator,StatusBar, StyleSheet } from "react-native";
import Firebase from '../firebase';
export default class LoadingScreen extends React.Component {
    
    componentDidMount() {
        Firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render() {
        return (
            <View style={styles.container}>
                        <StatusBar hidden /> 

                <Text>Loading</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});