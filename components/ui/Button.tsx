import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../Theme/ThemeContext";
import { ColorKey } from "../../types";
import { AppText } from "./Text";

interface IButtonProps {
  bgColor: ColorKey;
  textColor?: ColorKey;
  title: string;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<IButtonProps> = ({
  bgColor,
  textColor = "black",
  title,
  btnStyle,
  textStyle,
}) => {
  const { colors } = useTheme();

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: colors[bgColor],
        },
        btnStyle,
      ]}>
      <AppText color={textColor} style={textStyle}>
        {title}
      </AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
