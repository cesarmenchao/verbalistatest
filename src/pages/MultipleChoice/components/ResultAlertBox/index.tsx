import React, { useCallback } from "react";
import { Button, Container, SubContainer, Title, TitleButton } from "./styles";
import AnimatedLottieView from "lottie-react-native";
import { useMultipleChoice } from "../../hooks/useMultipleChoices";

interface Props {
  title: string;
  titleButton: string;
  onPress: () => void;
  userAnswer: boolean;
}

export const ResultAlertBox: React.FC<Props> = ({
  onPress,
  title,
  titleButton,
  userAnswer,
}) => {
  const { renderLottieAnimation } = useMultipleChoice();

  const renderAnimation = useCallback(() => {
    return renderLottieAnimation(userAnswer);
  }, [userAnswer]);

  return (
    <Container>
      <Title>{title}</Title>
      <SubContainer>{renderAnimation()}</SubContainer>
      <Button onPress={onPress}>
        <TitleButton>{titleButton}</TitleButton>
      </Button>
    </Container>
  );
};
