import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AppThemeType } from "./types";
import { ThemeProvider, useTheme } from "./Theme";
import { Button } from "./components/ui";

const themes: AppThemeType[] = ["light", "dark", "system"];

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

const MainApp = () => {
  const { colors, setTheme } = useTheme();
  // some theme test
  return (
    <View
      style={[
        mainAppStyles.container,
        {
          backgroundColor: colors.bgColor,
        },
      ]}>
      <Text
        style={{
          color: colors.black,
        }}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style='auto' />

      {themes &&
        themes.map((t) => (
          <Pressable
            style={mainAppStyles.btn}
            onPress={() => {
              setTheme(t);
              console.log("theme set to", t);
            }}
            key={t}>
            <Text>{t}</Text>
          </Pressable>
        ))}

      <Button bgColor='blue' title='Hello' textColor='black' />
    </View>
  );
};

const mainAppStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: "gray",
    borderRadius: 20,
    marginBottom: 10,
  },
});
