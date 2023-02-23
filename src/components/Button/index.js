import React from "react";
import colors from "../../utils/colors";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ text, btnStyle, textStyle, onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.5}
      style={[styles.btnContainer, btnStyle]}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    paddingTop: 13,
    borderWidth: 2,
    borderRadius: 25,
    paddingBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.APP_THEME,
    backgroundColor: colors.WHITE,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.APP_THEME,
  },
});
