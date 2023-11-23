import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const InputContainer = styled.View`
  flex-direction: row;
  padding: 0 ${RFValue(2)}px;
  align-items: center;
  justify-content: space-between;
  height: ${RFValue(28)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.COLORS.secondaryBackground};
`;

export const MicrophoneButton = styled.TouchableOpacity`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;

export const Input = styled(TextInput)`
  width: 90%;
  margin-left: ${RFValue(5)}px;
`;
