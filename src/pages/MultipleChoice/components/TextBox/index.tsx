import React from "react";
import { Container, Text } from "./styles";
interface Props {
  word: string;
}
export const TextBox: React.FC<Props> = ({ word }) => {
  return (
    <Container>
      <Text>{word}</Text>
    </Container>
  );
};
