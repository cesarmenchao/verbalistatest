import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.secondaryBackground};
  align-items: center;
  justify-content: center;
  height: ${RFValue(105)}px;
  margin-top: ${RFValue(20)}px;
  border-radius: ${RFValue(20)}px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
`;
