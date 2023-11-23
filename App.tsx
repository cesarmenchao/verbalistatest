import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { MultipleChoice } from "./src/pages/MultipleChoice/screens/indexMultipleChoices";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 24, marginBottom: 24 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <MultipleChoice />
      </ThemeProvider>
    </SafeAreaView>
  );
}
