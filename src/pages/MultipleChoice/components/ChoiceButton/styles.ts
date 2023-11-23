import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const Button = styled.TouchableOpacity`
  padding: ${RFValue(2)}px ${RFValue(6)}px;
  margin: auto;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.COLORS.primaryBackground};
  border-radius: ${RFValue(30)}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.secondaryBackground};
  ${Platform.OS === "ios"
    ? css`
        shadow-color: #000;
        shadow-offset: 0px 4px;
        shadow-opacity: 0.2;
        shadow-radius: 1px;
      `
    : css`
        elevation: 5;
      `};
`;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 500;
`;
