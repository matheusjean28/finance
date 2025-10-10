import { View } from 'react-native';
import CardInput from './self-component/CardInput';
export default function AddPayment() {
  return (
    <View style={{ width: '90%',  }}>
      <CardInput label="value" key={1} typeofInput="text" />
    </View>
  );
}
