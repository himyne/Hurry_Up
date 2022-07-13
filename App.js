import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>허리업</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc8c8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ff5e5e',
    fontSize: 40, 
  }
});

