import React from "react";

import { ScrollView, Dimensions, View } from "react-native";

import Roomcard from "./components/Roomcard";
import MapView from "react-native-maps";

const width = Dimensions.get("window").width;

class Room extends React.Component {
  render() {
    const { navigation } = this.props;

    const item = navigation.getParam("item");

    return (
      <ScrollView>
        <Roomcard
          photos={item.photos}
          title={item.title}
          price={item.price}
          reviews={item.reviews}
          user={item.user}
          rating={item.ratingValue}
        />
        <View style={{ marginHorizontal: 20 }}>
          <MapView
            style={{
              flex: 1,
              height: 200
            }}
            initialRegion={{
              latitude: item.loc[1],
              longitude: item.loc[0],
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: item.loc[1],
                longitude: item.loc[0]
              }}
              title={item.title}
              description={item.description}
            />
          </MapView>
        </View>
      </ScrollView>
    );
  }
}

export default Room;
