import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NoResultsPlaceholder from "../NoResultsPlaceholder";

const TrackList = () => {
  return (
    <View>
      <NoResultsPlaceholder
        redirect={"Workout"}
        buttonText={"Start New Track Run"}
        message={"You currently have no track history."}
      />
    </View>
  );
};

export default TrackList;

const styles = StyleSheet.create({});
