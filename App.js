import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './screens/Onboarding';
import CustomDrawer from './screens/CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SuccessfulDownloadsScreen from './screens/SuccessfulDownloadsScreen';
import UserActionScreen from './screens/UserActionScreen';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" styles={{height:200, marginTop:40}}>
    <Drawer.Screen name="No of Users referred" component={HomeScreen} />
    <Drawer.Screen name="Action taken by user" component={UserActionScreen}/>
    <Drawer.Screen name="No of successful downloads" component={SuccessfulDownloadsScreen} />
  </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
