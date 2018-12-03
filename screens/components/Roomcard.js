import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Carousel from "react-native-looped-carousel";

const width = Dimensions.get("window").width;
const MAX_STARS = 5;
class Roomcard extends React.Component {
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

  ratingValue(bob) {
    const stars = [];

    for (let i = 0; i < MAX_STARS; i++) {
      if (bob > i) {
        stars.push(
          <Image key={i} source={require("../../img/star-filled.png")} />
        );
      } else {
        stars.push(
          <Image key={i} source={require("../../img/star-empty.png")} />
        );
      }
    }
    return stars;
  }

  render() {
    return (
      <View>
        <View
          style={{
            margin: 20,
            paddingBottom: 30,
            borderBottomWidth: 1,
            borderBottomColor: "lightgrey",
            elevation: 1,
            borderRadius: 10,
            overflow: "hidden"
          }}
        >
          <View style={{ flex: 1 }}>
            <Carousel
              style={{ height: 200, width: width - 40 }}
              pageInfo
              autoplay={false}
              onAnimateNextPage={p => console.log(p)}
            >
              {this.renderPictures(this.props.photos)}
            </Carousel>

            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                backgroundColor: "black",
                opacity: 0.8
              }}
            >
              <Text
                style={{
                  color: "white",
                  padding: 20,
                  textAlign: "center",
                  fontFamily: "Montserrat"
                }}
              >
                {this.props.price} €
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingTop: 20
            }}
          >
            <View style={{ flex: 1 }}>
              <View>
                <Text
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: 17
                  }}
                  numberOfLines={1}
                >
                  {this.props.title}
                </Text>
              </View>

              <View style={{ flexDirection: "row", paddingTop: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginRight: 20,
                    paddingTop: 2
                  }}
                >
                  {this.ratingValue(this.props.rating)}
                </View>
                <View>
                  <Text style={{ fontFamily: "Montserrat", color: "grey" }}>
                    {this.props.reviews} reviews
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 10 }}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50
                }}
                source={{ uri: this.props.user.account.photos[0] }}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Roomcard;
