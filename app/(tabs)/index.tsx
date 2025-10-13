import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Spend from '../components/Spend';




export default function Index() {
 
  return (
   <GestureHandlerRootView style={styles.container}>
    {/* <AddPayment/> */}
    <Spend />
   </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: '#ffffffff',
  },
});