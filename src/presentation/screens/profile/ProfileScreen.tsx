
import { View, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";


export const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();

  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top
    }}>

      <Text style={{ marginBottom: 15 }}>ProfileScreen</Text>

      <PrimaryButton
        onPress={ () => navigator.dispatch( DrawerActions.toggleDrawer ) }
        label={"Abrir menú"} 
      />

    </View>
  )
}
