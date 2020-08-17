import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainComponent from "./MainComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MainComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 0,
  },
});
