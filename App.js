import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  // setCount es una función que permite actualizar el estado count.
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  // función que retorna el contenido que se muestra en la pantalla.
  return (
    <View style={styles.container}>
      <Text>You pressed the button {count} times</Text>
      <Button title="Press me" onPress={updateCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});