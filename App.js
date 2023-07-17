import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Cal from './src/cal'
export default function App() {
  

  return (
    <SafeAreaView style={styles.container}>
  
      <Cal/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    
    backgroundColor: '#fff',
   
  },
});
