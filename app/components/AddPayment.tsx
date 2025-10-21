import { SetStateAction } from 'react';
import { View } from 'react-native';
import CardInput from './self-component/CardInput';
export default function AddPayment() {
  return (
    <View style={{ width: '100%', height: '100%' ,padding: 10}}>
      <CardInput label="type" key={1} typeofInput="text" selected={null} setSelected={function (value: SetStateAction<string | null>): void {
              throw new Error('Function not implemented.');
          } } />
    </View>
  );
}
