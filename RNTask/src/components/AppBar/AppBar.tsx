import React from 'react';
import {Text, View} from 'react-native';
import {useAppTheme} from '@root/theme/theme';
import {Avatar} from 'react-native-paper';
import {TouchFiller} from '@root/components';

const AppBar = ({
  header,
  hasBack = false,
}: {
  header: string;
  hasBack?: boolean;
}) => {
  const colors = useAppTheme().colors;

  const backButton = hasBack ? (
    <View
      style={{
        backgroundColor: colors.buttonBg,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
      }}>
      <TouchFiller onPress={() => {}} />
      <Avatar.Icon
        size={50}
        icon="chevron-left"
        style={{
          borderRadius: 10,
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
