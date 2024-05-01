
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native"
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native"

import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { RootStackParams } from "../../routes/StackNavigator";
import { HamburgerMenu } from "../../components/shared/HamburgerMenu";

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable
  //         onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }
  //       >
  //         <Text>Menu</Text>
  //       </Pressable>
  //     )
  //   })
  // },[]);

  return (

    <View style={ globalStyles.container }>

      <HamburgerMenu />

      <PrimaryButton 
        onPress={ () => navigation.navigate('Products') }
        label="Productos"
      />

      <PrimaryButton 
        onPress={ () => navigation.navigate('Settings') }
        label="Settings"
      />

    </View>

  )
}
