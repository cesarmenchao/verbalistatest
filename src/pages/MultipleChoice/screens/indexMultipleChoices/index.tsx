import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextBox } from "../../components/TextBox";
import { ChoiceList } from "../../components/ChoicesList";
import VoiceInput from "../../components/VoiceInput";
import choices from "../../data/mockData";
import { useMultipleChoice } from "../../hooks/useMultipleChoices";

export const MultipleChoice = () => {
  const {
    renderModal,
    isBottomSheetVisible,
    setIsBottomSheetVisible,
    answer,
    setAnswer,
    randomWord,
  } = useMultipleChoice();

  const renderListOfChoices = useCallback(() => {
    return (
      <>
        <TextBox word={randomWord} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={RFValue(70)}
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          {renderModal(answer)}
          <ChoiceList onPress={handleButtonClick} />
          <VoiceInput onPress={handleButtonClick} />
        </KeyboardAvoidingView>
      </>
    );
  }, [randomWord, isBottomSheetVisible, answer]);

  const handleButtonClick = useCallback(
    (label: string, input?: boolean) => {
      const choice = choices.find(
        (c) =>
          c.ptbr === label.toLowerCase() ||
          (input && c.en === label.toLowerCase())
      );
      if (choice?.en === randomWord) {
        setIsBottomSheetVisible(true);
        setAnswer(true);
      } else {
        setIsBottomSheetVisible(true);
        setAnswer(false);
      }
    },
    [randomWord]
  );

  return <Container>{renderListOfChoices()}</Container>;
};
