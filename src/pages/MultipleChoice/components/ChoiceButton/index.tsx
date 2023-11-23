import React from "react";
import { Button, Text } from "./styles";

interface Props {
  choice: string;
  onPress: (choice: string, word: string) => void;
}

export const ChoiceButton: React.FC<Props> = ({ choice, onPress }) => {
  return (
    <Button onPress={onPress}>
      <Text>{choice}</Text>
    </Button>
  );
};
