import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ImageBackground } from 'react-native';
import Button from '../components/Button';
import { Picker } from '@react-native-picker/picker';
import fondo from '../assets/1.jpg'

const Delete = ({ ip }) => {
  const [jugadores, setJugadores] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  // Obtener la lista de jugadores al cargar el componente
  useEffect(() => {
    fetch(`http://${ip}:3000/read`)
      .then((response) => response.json())
      .then((data) => setJugadores(data))
      .catch((error) => console.error('Error al obtener jugadores:', error));
  }, []);

  // Función para manejar el borrado de jugador
  const handleDelete = async () => {
    // Validar que se haya seleccionado un jugador
    if (!selectedPlayer) {
      Alert.alert('Error', 'Por favor, selecciona un jugador');
      return;
    }

    // Mostrar un modal de confirmación antes de borrar
    Alert.alert(
      'Confirmar Borrado',
      `¿Estás seguro que quieres borrar a ${selectedPlayer.Nombre}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Borrar',
          onPress: async () => {
            // Realiza la solicitud HTTP para borrar al jugador
            try {
              const response = await fetch(`http://${ip}:3000/delete/${selectedPlayer.id}`, {
                method: 'DELETE',
              });

              if (response.status === 204) {
                // Jugador borrado exitosamente
                console.log('Jugador borrado con éxito');
                // Puedes realizar alguna acción adicional si es necesario
                Alert.alert('Éxito', 'Jugador borrado con éxito');
                // Actualizar la lista de jugadores después de borrar
                setJugadores((prevJugadores) =>
                  prevJugadores.filter((jugador) => jugador.id !== selectedPlayer.id)
                );
                // Limpiar la selección actual
                setSelectedPlayer(null);
              } else {
                console.error('Error al borrar jugador:', response.status);
                // Muestra un modal de error si el borrado falla
                Alert.alert(
                  'Error',
                  'No se pudo borrar el jugador. Por favor, inténtalo de nuevo.'
                );
              }
            } catch (error) {
              console.error('Error al borrar jugador:', error);
              // Muestra un modal de error si hay un error en la solicitud HTTP
              Alert.alert(
                'Error',
                'Hubo un error al borrar el jugador. Por favor, inténtalo de nuevo.'
              );
            }
          },
        },
      ]
    );
  };

  return (
    <ImageBackground source={fondo}>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <View style={styles.card}>
          <View style={styles.container}>
            <View style={styles.pickerContainer}>
              <Text style={styles.title}>Elija un jugador para borrar:</Text>
              <Picker
                style={{ color: '#888', backgroundColor: '#f0f0f0' }}
                selectedValue={selectedPlayer}
                onValueChange={(itemValue) => setSelectedPlayer(itemValue)}>
                <Picker.Item label="Seleccione un jugador" value={null} />
                {jugadores.map((jugador) => (
                  <Picker.Item key={jugador.id} label={jugador.Nombre} value={jugador} />
                ))}
              </Picker>
            </View>
            <Button title="Borrar" onPress={handleDelete} color={'#00C852'} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerContainer: {
    margin: 16,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    color: '#555'
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default Delete;
