import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import NoResultsPlaceholder from "../NoResultsPlaceholder";
import useTrackContext from "../../hooks/useTrackContext";
import TrackShow from "./TrackShow";

const TrackList = () => {
  const { state } = useTrackContext();

  return (
    <View style={styles.container}>
      {state.length < 1 ? (
        <NoResultsPlaceholder
          redirect={"Workout"}
          buttonText={"Start New Track Run"}
          message={"You currently have no track history."}
        />
      ) : (
        <>
          {Array.isArray(state)
            ? state.map((item) => {
                return <TrackShow item={item} key={item._id} />;
              })
            : []}
        </>
      )}
    </View>
  );
};

export default TrackList;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
