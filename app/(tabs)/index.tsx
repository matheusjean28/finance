import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Spend from '../components/Spend';

// Context
import React, { useState } from 'react';
import AppContext from '../context/AppContext';
import { useAppContext } from '../context/useAppContext';

export default function Index() {
  const [screen, setScreen] = useState<string | null>(null);
  const [popUpStatus,setPopUpStatus] = useState<boolean>(false);
  const {bill} = useAppContext();
  const {objetivos } = useAppContext()
  console.log(popUpStatus)

  return (
    <AppContext.Provider value={{ screen, setScreen, popUpStatus,setPopUpStatus,bill, objetivos}}>
      <GestureHandlerRootView style={styles.container}>
        <Spend />
      </GestureHandlerRootView>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    position: 'relative'
  },
});
