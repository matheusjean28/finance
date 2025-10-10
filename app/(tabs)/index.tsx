import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AddPayment from '../components/AddPayment';




export default function Index() {
 
  return (
   <GestureHandlerRootView style={styles.container}>
    <AddPayment/>
   </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: '#25292e',
  },
});