import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";
import SideMenu from "../models/SideMenu";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    borderWidth: 2,
    borderColor: "red"
  }
});

class TabView extends Component {
  componentDidMount() {
    SideMenu.getMoviesFromApi().done();
  }

  async getMoviesFromApi() {
    try {
      let response = await fetch(
        "https://facebook.github.io/react-native/movies.json"
      );
      let responseJson = await response.json();
      console.log(123);
      console.log(responseJson);
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        {console.log(this.props)}
        <Text>
          Tab title:{this.props.title} name:{this.props.name}
        </Text>
        <Text>
          Tab data:{this.props.data}
        </Text>
        {this.props.name === "tab1_1" &&
          <Button onPress={() => Actions.tab1_2()}>
            next screen for tab1_1
          </Button>}
        {this.props.name === "tab2_1" &&
          <Button onPress={() => Actions.tab2_2()}>
            next screen for tab2_1
          </Button>}
        <Button onPress={Actions.pop}>Back</Button>
        <Button
          onPress={() => {
            Actions.tab1();
          }}
        >
          Switch to tab1
        </Button>
        <Button
          onPress={() => {
            Actions.tab2();
          }}
        >
          Switch to tab2
        </Button>
        <Button
          onPress={() => {
            Actions.tab3();
          }}
        >
          Switch to tab3
        </Button>
        <Button
          onPress={() => {
            Actions.tab4();
          }}
        >
          Switch to tab4
        </Button>
        <Button
          onPress={() => {
            Actions.tab5({ data: "test!" });
          }}
        >
          Switch to tab5 with data
        </Button>
        <Button
          onPress={() => {
            Actions.echo();
          }}
        >
          push clone scene (EchoView)
        </Button>
      </View>
    );
  }
}

export default TabView;
