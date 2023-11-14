import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Create from './screens/Create';
import Read from './screens/Read';
import Update from './screens/Update';
import Delete from './screens/Delete';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Button from './components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import fondo from './assets/1.jpg'

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={fondo}>
      <View style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', background: `${fondo}`
      }}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Opciones:</Text>
          <Button title="Agregar jugador" onPress={() => navigation.navigate('Create')} color={'#00C852'} />
          <Button title="Ver listas" onPress={() => navigation.navigate('Read')} color={'#00C852'} />
          <Button title="Actualizar jugadores" onPress={() => navigation.navigate('Update')} color={'#00C852'} />
          <Button title="Borrar jugadores" onPress={() => navigation.navigate('Delete')} color={'#00C852'} />
        </View>
      </View>
    </ImageBackground>
  );
};

const ip = '192.168.100.2';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={'#888'} size={size} />
            ), headerShown: false,
          }}
        />
        <Tab.Screen
          name="Create"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="plus" color={'#888'} size={size} />
            ),
            headerShown: false,
          }}
        >
          {(props) => <Create {...props} ip={ip} />}
        </Tab.Screen>
        <Tab.Screen
          name="Read"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={'#888'} size={size} />
            ),
            headerShown: false,
          }}
        >
          {(props) => <Read {...props} ip={ip} />}
        </Tab.Screen>
        <Tab.Screen
          name="Update"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="pencil" color={'#888'} size={size} />
            ),
            headerShown: false,
          }}
        >
          {(props) => <Update {...props} ip={ip} />}
        </Tab.Screen>
        <Tab.Screen
          name="Delete"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="trash" color={'#888'} size={size} />
            ),
            headerShown: false,
          }}
        >
          {(props) => <Delete {...props} ip={ip} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 30,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardTitle: {
    marginBottom: 20,
    color: '#393939',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;