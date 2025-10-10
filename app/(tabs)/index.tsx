import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AddPayment from '../components/AddPayment';




export default function Index() {
 
  return (
   <GestureHandlerRootView style={styles.container}>
    <Text>teste</Text>
    <AddPayment/>
   </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,                 // ocupa toda a tela
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
    backgroundColor: '#25292e',
  },
});