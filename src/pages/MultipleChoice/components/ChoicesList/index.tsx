import React, { useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { ChoicesResponseData } from "../../types/types";
import { Container, Separator } from "./styles";
import choices from "../../data/mockData";
import { ChoiceButton } from "../ChoiceButton";
interface Props {
  onPress: (choice: string, input?: boolean) => void;
}

export const ChoiceList: React.FC<Props> = ({ onPress }) => {
  const renderItem: ListRenderItem<ChoicesResponseData> = useCallback(
    ({ item }) => {
      return (
        <ChoiceButton
          choice={item.ptbr}
          key={item.id}
          onPress={() => onPress(item.en, true)}
        />
      );
    },
    [onPress]
  );

  return (
    <Container>
      <FlatList
        data={choices}
        numColumns={4}
        renderItem={renderItem}
        scrollEnabled={false}
        keyExtractor={(item: ChoicesResponseData) => String(item.id)}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
};
