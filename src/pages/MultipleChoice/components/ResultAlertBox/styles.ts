import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(130)}px;
  width: 90%;
  padding: ${RFValue(16)}px;
  border-radius: ${RFValue(20)}px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primaryBackground};
`;

export const Button = styled.TouchableOpacity`
  border-radius: ${RFValue(20)}px;
  height: ${RFValue(30)}px;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: ${({ theme }) => theme.COLORS.secondaryBackground};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  font-weight: 600;
`;

export const TitleButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
  font-weight: 600;
`;

export const SubContainer = styled.View`
  justify-content: center;
  z-index: 10;
  align-items: center;
`;
