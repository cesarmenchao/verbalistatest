import React, { useRef, useState } from "react";
import { View, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, InputContainer, MicrophoneButton } from "./styles";
import theme from "../../../../theme";

interface Props {
  onPress: (text: string) => void;
}

const VoiceInput: React.FC<Props> = ({ onPress }) => {
  const [text, setText] = useState("");
  const { COLORS } = theme;

  const handleDonePres = () => {
    setText("");
    onPress(text);
  };

  return (
    <InputContainer>
      <Input
        value={text}
        onChangeText={(newText: string) => setText(newText)}
        placeholder="Type here..."
        returnKeyType="done"
        onSubmit={handleDonePres}
        onSubmitEditing={handleDonePres}
        style={{ width: "90%" }}
      />
      <MicrophoneButton>
        <Icon name="microphone" size={20} color={COLORS.terciaryBackground} />
      </MicrophoneButton>
    </InputContainer>
  );
};

export default VoiceInput;
