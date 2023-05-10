import React from 'react';
import {Text, View} from 'react-native';
import {useAppTheme} from '@root/theme/theme';
import {Avatar} from 'react-native-paper';
import {TouchFiller} from '@root/components';
import {useNavigation} from '@react-navigation/native';

const AppBar = ({
  header,
  hasBack = false,
}: {
  header: string;
  hasBack?: boolean;
}) => {
  const colors = useAppTheme().colors;

  const navigation = useNavigation();

  const backButton = hasBack ? (
    <View
      style={{
        backgroundColor: colors.buttonBg,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        overflow: 'hidden',
      }}>
      <TouchFiller
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Avatar.Icon
        size={50}
        icon="chevron-left"
        style={{
          backgroundColor: colors.buttonBg,
        }}
        color={colors.buttonIcon}
      />
    </View>
  ) : (
    <View />
  );

  return (
    <View
      style={{
        height: 70,
        flexDirection: 'row',
        alignSelf: 'stretch',
        //justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'red',
        paddingHorizontal: 20,
      }}>
      {backButton}
      <Text
        style={{
          fontSize: 25,
          color: colors.header,
          fontWeight: 'bold',
          marginLeft: 30,
        }}>
        {header}
      </Text>
      <View />
    </View>
  );
};

export default AppBar;
