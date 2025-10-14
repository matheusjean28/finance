import { useAppContext } from '@/app/context/useAppContext';
import percentegemRemaining from '@/app/functions/percentagemRemaining';
import { Text, View } from 'react-native';

export default function SavingProgress() {
    const { objetivos } = useAppContext();
    console.log('gere',objetivos)
    console.log('gere',objetivos.viagem.goal)

    console.log(percentegemRemaining(objetivos.viagem.goal, objetivos.viagem.achived ))
       return (
        <View>
            <Text>
                 {percentegemRemaining(objetivos.viagem.goal, objetivos.viagem.achived )}
            </Text>
        </View>
       )

}