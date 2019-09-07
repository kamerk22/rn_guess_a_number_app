import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    width: "100%",
    height: 100,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  }
});
