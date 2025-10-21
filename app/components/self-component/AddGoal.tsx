import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Goal from './AddGoal/Goal';
import Payment from './AddGoal/Payment';

type Props = {

}

export default function AddGoal() {
    const [screenPayOrGoal, setScreenPayOrGoal] = useState('payment');

    return (
        <View style={style.container}>
            <View style={style.cardSelection}>
                <Pressable style={[style.option, screenPayOrGoal == 'payment' ? style.selectedOption : style.option]}
                    onPress={() => {
                        setScreenPayOrGoal('payment') }}>
                    <Text style={[style.option, screenPayOrGoal == 'payment' ? style.selectedOptionTextColor : style.option]}>Pagamentos</Text>
                </Pressable>

                <Pressable style={[style.option, screenPayOrGoal == 'goal' ? style.selectedOption : style.option]}
                    onPress={() => {
                        setScreenPayOrGoal('entrada'),
                            setScreenPayOrGoal('goal') }}>
                    <Text style={[style.option, screenPayOrGoal == 'goal' ? style.selectedOptionTextColor : style.option]}>Objetivos</Text>
                </Pressable>
            </View>
                <View style={style.containerContent}>
                    {screenPayOrGoal == 'payment' ? 
                    <Payment/>: <Goal/>}
                </View>

        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative', width: '100%'
    },
    cardSelection: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'whitesmoke',
        paddingBottom: 5,
        gap: 50,
        justifyContent: 'space-around'
    },
    option: {
        display: 'flex',
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,

    },
    selectedOption: {
        borderBottomColor: '#007bff',
        borderBottomWidth: 1,
    },
    selectedOptionTextColor: {
        color: '#007bff',
        fontWeight: '600',
    },
    containerContent: {
        display: 'flex',
    }

})