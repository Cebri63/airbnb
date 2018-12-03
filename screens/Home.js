import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

{
  /* <Icon name="rocket" size={30} color="#900" /> */
} //pour importer une icone

import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator
} from "react-native";

import axios from "axios";

import Roomcard from "./components/Roomcard";

const MAX_STARS = 5;

const width = Dimensions.get("window").width;

class Home extends Component {
  state = {
    flat: {}
  };

  componentDidMount() {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        this.setState(
          {
            flat: response.data
          },
          () => {
            console.log(
              "​Home -> componentDidMount -> response.data",
              response.data
            );
          }
        );
      });
  }

  renderPictures(photos) {
    return photos.map((photo, i) => (
      <Image
        key={i}
        style={{
          width: width - 40,
          height: 200,
          zIndex: 2
          // position: "relative"
        }}
        imageStyle={{}}
        source={{ uri: photo }}
      />
    ));
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return this.state.flat.rooms ? (
      <View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={this.state.flat.rooms}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Room", {
                    item
                  });
                }}
              >
                <Roomcard
                  photos={item.photos}
                  title={item.title}
                  price={item.price}
                  reviews={item.reviews}
                  user={item.user}
                  rating={item.ratingValue}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    ) : (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator size="large" color="#FF5A5F" />
      </View>
    );
  }
}

export default Home;
