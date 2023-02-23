import React from "react";
import colors from "../../utils/colors";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title, titleStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 63,
    paddingBottom: 22,
    alignItems: "center",
    backgroundColor: colors.APP_THEME,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.WHITE,
  },
});
