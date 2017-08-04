import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import { MessageBarAlert, MessageBarManager } from 'react-native-message-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: 'red',
  }
});

class Launch extends React.Component {
  // 
  // componentDidMount() {
  //   Actions.refresh({
  //     rightButtonIconStyle: { width: 22, height: 22 },
  //     rightButtonImage: require('../images/search.png'),
  //     onRight: () => {console.log(123)},
  //   });
  // }

  render(){
    console.log("Launch RENDER");
    return (
      <View {...this.props}  style={styles.container}>
        <Text>Launch page</Text>
        <Button onPress={()=>Actions.login({data:"Custom data", title:"Custom title" })}>Go to Login page</Button>
        <Button onPress={()=>Actions.register()}>Go to Register page</Button>
        <Button onPress={()=>Actions.error("Error message")}>Popup error</Button>
        <Button onPress={()=>MessageBarManager.showAlert({
          title: 'Your alert title goes here',
          message: 'Your alert message goes here',
          alertType: 'success',
          // See Properties section for full customization
          // Or check `index.ios.js` or `index.android.js` for a complete example
        })}>MessageBar alert</Button>
        <Button onPress={()=>Actions.tabbar()}>Go to TabBar page</Button>
        <Button onPress={()=>Actions.pop()}>back</Button>
      </View>
    );
  }
}

module.exports = Launch;
