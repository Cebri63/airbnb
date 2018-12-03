import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Icon from "react-native-vector-icons/FontAwesome";

import axios from "axios";

export default class Login extends Component {
  state = {
    email: "arno@airbnb-api.com",
    password: "password01"
  };

  register() {
    const { navigate } = this.props.navigation;

    axios
      .post("https://airbnb-api.now.sh/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        if (response) {
          navigate("Home");
        }
      })
      .catch(err => {
        alert(res.json(err));
      });
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: "#FF5A5F" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        <StatusBar backgroundColor="#FF5A5F" barStyle="light-content" />
        <Icon style={{ paddingTop: 15 }} name="home" size={200} color="#fff" />
        <Text style={styles.welcome}>Bienvenue</Text>

        <View style={{ paddingBottom: 30 }}>
          <TextInput
            style={styles.input}
            placeholder="Votre email"
            placeholderTextColor="white"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Votre mot de passe"
            placeholderTextColor="white"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry={true}
          />
        </View>

        <View style={{ paddingTop: 40 }}>
          <TouchableOpacity
            onPress={() => {
              console.log("o");

              this.register();
            }}
            style={styles.touchableOpacity}
          >
            <Text
              style={{
                color: "#FF5A5F",
                padding: 20
              }}
            >
              SE CONNECTER
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#FF5A5F",
    alignItems: "center"
  },
  welcome: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color: "white",
    paddingTop: 40,
    paddingBottom: 60,
    fontFamily: "Montserrat-Light"
  },

  input: {
    height: 40,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    fontFamily: "Montserrat-Medium",
    width: 300
  },
  touchableOpacity: {
    backgroundColor: "white",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    fontFamily: "Montserrat-Medium"
  }
});
