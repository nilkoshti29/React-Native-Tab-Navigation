/*import React from 'react';  
import { StyleSheet, Text, View } from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs';
  
class HomeScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Home Screen</Text>  
            </View>  
        );  
    }  
}  
class ProfileScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Profile Screen</Text>  
            </View>  
        );  
    }  
}  
  
const TabNavigator = createBottomTabNavigator({  
    Home: HomeScreen,  
    Profile: ProfileScreen,  
});  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  
  
export default createAppContainer(TabNavigator);  
*/


/* React TabNavigation for Javatpoint
import React from 'react';  
import {StyleSheet, Text, View} from 'react-native';  
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
        </View>  
    );  
  }  
}  
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Profile Screen</Text>  
        </View>  
    );  
  }  
}  
  
const TabNavigator = createBottomTabNavigator(  
    {  
      Home:{  
        screen:HomeScreen,  
        navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-home" color={tintColor} size={25}/>  
          )  
        }  
      },  
      Profile: {  
        screen:ProfileScreen,  
        navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-person" color={tintColor} size={25}/>  
          )  
        }  
      },  
    },  
    {  
      initialRouteName: "Home"  
    },  
);  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center'  
  },  
});  
  
export default createAppContainer(TabNavigator); 

*/



// React TabNavigation 
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class IconWithBadge extends Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Icon name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Settings') {
    iconName = `ios-options${focused ? '' : '-outline'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Settings: { screen: SettingsScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  )
);


/
