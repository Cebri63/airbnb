import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginContainer from "./screens/Login";
import HomeContainer from "./screens/Home";
import RoomContainer from "./screens/Room";

const App = createStackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      title: "Mon Airbnb",
      headerTintColor: "#FFF",
      headerStyle: {
        backgroundColor: "#FF5A5F"
      },
      headerLeft: null
    }
  },
  Room: {
    screen: RoomContainer,
    navigationOptions: {
      title: "Mon Airbnb",
      headerTintColor: "#FFF",
      headerStyle: {
        backgroundColor: "#FF5A5F"
      },
      headerLeft: null
    }
  }
});

export default createAppContainer(App);
