import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import AnimatedLottieView from "lottie-react-native";
import Modal from "react-native-modal/dist/modal";
import { ResultAlertBox } from "../components/ResultAlertBox";
import { View } from "react-native";
import choices from "../data/mockData";

interface MultipleChoiceHooks {
  renderLottieAnimation: (userAnswer: boolean) => JSX.Element;
  renderModal: (userAnswer: boolean) => JSX.Element;
  isBottomSheetVisible: boolean;
  setIsBottomSheetVisible: Dispatch<SetStateAction<boolean>>;
  answer: boolean;
  setAnswer: Dispatch<SetStateAction<boolean>>;
  randomWord: string;
}

export const useMultipleChoice = (): MultipleChoiceHooks => {
  const [answer, setAnswer] = useState<boolean>(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [randomWord, setRandomWord] = useState(
    [...choices].sort(() => Math.random() - 0.5)[0].en
  );
  const handleNewWord = () => {
    const shuffledChoices = [...choices].sort(() => Math.random() - 0.5);
    setRandomWord(shuffledChoices[0].en);
  };

  const toggleBottomSheet = () => {
    setBottomSheetVisible((state) => !state);
    if (answer) {
      handleNewWord();
    }
  };

  const renderLottieAnimation = useCallback(
    (userAnswer: boolean) => {
      if (userAnswer) {
        return (
          <AnimatedLottieView
            source={require(`../../../assets/lotties/okLottie.json`)}
            autoPlay
            style={{
              width: userAnswer ? 50 : 32,
              height: userAnswer ? 50 : 32,
              zIndex: 5,
            }}
            duration={3000}
            loop={false}
          />
        );
      }
      return (
        <AnimatedLottieView
          source={require(`../../../assets/lotties/errorLottie.json`)}
          autoPlay
          style={{
            width: userAnswer ? 50 : 32,
            height: userAnswer ? 50 : 32,
            zIndex: 1,
          }}
          duration={3000}
          loop={false}
        />
      );
    },
    [answer]
  );

  const renderModal = useCallback(
    (userAnswer: boolean) => {
      return (
        <Modal isVisible={isBottomSheetVisible} swipeDirection={[]}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ResultAlertBox
              title={
                userAnswer
                  ? "Congratulations! you're right!"
                  : "What a shame you made a mistake!"
              }
              titleButton={userAnswer ? "Next word" : "Try again"}
              onPress={toggleBottomSheet}
              userAnswer={userAnswer}
            />
          </View>
        </Modal>
      );
    },
    [answer, isBottomSheetVisible]
  );

  return {
    renderLottieAnimation,
    renderModal,
    isBottomSheetVisible,
    setIsBottomSheetVisible: setBottomSheetVisible,
    answer,
    setAnswer,
    randomWord,
  };
};
