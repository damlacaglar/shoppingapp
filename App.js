import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tab1 from "./src/screens/tabs/tab1";
import Tab2 from "./src/screens/tabs/tab2";
import Tab3 from "./src/screens/tabs/tab3";
import DrawerContent from "./src/drawer-content";
import Account1 from "./src/screens/account/account1";
import Account2 from "./src/screens/account/account2";
import LoginScreen from "./src/screens/login-screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStore, faSearch, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";


const BottomTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  createBottomTabbedPage = () => {
    return (
      <BottomTab.Navigator
        activeColor="#de6d20"
        inactiveColor="#c3c3c3"
        barStyle={{ backgroundColor: "#4a572a", borderColor: "#8f5d41", borderWidth: 2 }}>
        <BottomTab.Screen name="Tab1" component={Tab1} options={{
          title: "Ürünler", tabBarIcon: ({}) => (
            <FontAwesomeIcon icon={faStore} size={26} color={ 'white' } />
          ),
        }} />
        <BottomTab.Screen name="Tab2" component={Tab2} options={{
          title: "Ara", tabBarIcon: ({}) => (
            <FontAwesomeIcon icon={faSearch} size={26} color={'white'} />
          ),
        }} />
        <BottomTab.Screen name="Tab3" component={Tab3} options={{
          title: "Sepetim", tabBarIcon: ({}) => (
            <FontAwesomeIcon icon={faCartArrowDown} size={26} color={'white'}/>
          ),
        }} />
      </BottomTab.Navigator>
    );
  };

  createTopTabbedPage = () => {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="Account" component={Account1} />
        <TopTab.Screen name="Orders" component={Account2} />
      </TopTab.Navigator>
    );
  };

  createDrawerPage = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Main" children={this.createBottomTabbedPage} />
        <Drawer.Screen name="Account" children={this.createTopTabbedPage} />
      </Drawer.Navigator>
    );
  };

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Home"
            children={this.createDrawerPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}