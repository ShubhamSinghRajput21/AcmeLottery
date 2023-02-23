import React from "react";
import colors from "../../utils/colors";
import { View, Text, StyleSheet } from "react-native";

const NumberCircle = ({ number, index }) => {
  return (
    <View style={[styles.numberContainer(index)]}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default NumberCircle;

const styles = StyleSheet.create({
  numberContainer: (index) => ({
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.WHITE,
    marginLeft: index === 0 ? 0 : 6,
  }),
  number: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.DARK,
  },
});
