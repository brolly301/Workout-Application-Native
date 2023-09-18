import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useWindowDimensions } from "react-native";

const ExerciseAboutCarousel = ({ image }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const { height, width } = useWindowDimensions();

  const getPagination = (
    <Pagination
      dotsLength={Object.values(image).length}
      activeDotIndex={activeSlide}
      containerStyle={{
        backgroundColor: "transparent",
        marginVertical: -20,
        marginTop: -35,
      }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "black",
      }}
      inactiveDotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#DADADA",
        borderColor: "black",
        borderWidth: 1,
      }}
      inactiveDotOpacity={1}
      inactiveDotScale={1}
    />
  );

  return (
    <View>
      <Carousel
        data={Object.values(image)}
        sliderWidth={width - 30}
        itemWidth={width - 30}
        onSnapToItem={(index) => setActiveSlide(index)}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Image
                style={{
                  width: width - 30,
                  height: 250,
                  marginVertical: 15,
                  borderWidth: 1.5,
                  borderRadius: 5,
                  borderColor: "black",
                }}
                source={item}
              />
            </View>
          );
        }}
      />
      {getPagination}
    </View>
  );
};

export default ExerciseAboutCarousel;

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 250,
  },
});
