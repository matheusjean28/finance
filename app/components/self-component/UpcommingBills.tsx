import { getDaysUntilDue } from '@/app/functions/getDaysUntilDue';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//context hook
import { useAppContext } from '@/app/context/useAppContext';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
    howCall: string// can be 'popup screen or spend screen'
}
export default function UpcommingBills({ howCall }: Props) {
    const { setScreen, setPopUpStatus, bill } = useAppContext();
    const [isShowingOnPopUp, setIsShowingOnPopUp] = useState<boolean>(false);



    const contasArray = Object.values(bill.contas);

    const contasVisiveis = contasArray.slice(0, 3);

    if (howCall == 'spend') {
        return (
            <View style={styles.container}>
                <Text style={styles.nextBills}>Próximos vencimentos</Text>

                {contasVisiveis.map((conta, index) => {
                    const dias = getDaysUntilDue(conta.dueDate);
                    const labelDias =
                        dias === 0
                            ? 'Vence hoje'
                            : `${dias} dia${dias === 1 ? '' : 's'}`;

                    return (
                        <View key={index} style={styles.billCard}>
                            <Text style={{ textTransform: 'capitalize' }}>
                                {conta.name.charAt(0).toUpperCase() + conta.name.slice(1)}
                            </Text>
                            <Text>R$ {conta.value}</Text>
                            <Text
                                style={[
                                    styles.dayBillCard,
                                    !conta.status && styles.dayBillCardnoPay,
                                ]}
                            >
                                {labelDias}
                            </Text>
                        </View>
                    );
                })}

                {contasArray.length > 3 && (
                    <TouchableOpacity
                        style={styles.showMoreBtn}
                        onPress={() => { setScreen('upCommingBills'), setPopUpStatus(true), console.log('ipcoming') }}
                    >
                        <Text style={styles.showMoreText}>Ver mais</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
    else {
        return (
            <ScrollView  style={styles.scrollviewContainer}>
                <Text style={styles.nextBills}>Próximos vencimentos</Text>

                {contasArray.map((conta, index) => {
                    const dias = getDaysUntilDue(conta.dueDate);
                    const labelDias =
                        dias === 0
                            ? 'Vence hoje'
                            : `${dias} dia${dias === 1 ? '' : 's'}`;

                    return (
                        <View key={index} style={styles.billCard}>
                            <Text style={{ textTransform: 'capitalize' }}>
                                {conta.name.charAt(0).toUpperCase() + conta.name.slice(1)}
                            </Text>
                            <Text>R$ {conta.value}</Text>
                            <Text
                                style={[
                                    styles.dayBillCard,
                                    !conta.status && styles.dayBillCardnoPay,
                                ]}
                            >
                                {labelDias}
                            </Text>
                        </View>
                    );
                })}

            </ScrollView >
        );
    }


}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        position: 'relative'
    },
    nextBills: {
        fontSize: 14,
        fontWeight: '300',
        textTransform: 'capitalize',
    },
    billCard: {
        marginTop: 10,
        height: 80,
        backgroundColor: '#ffffffff',
        borderRadius: 9,
        padding: 10,
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-evenly',

        elevation: 5,
        shadowColor: '#a8a8a8ff',
        shadowOffset: { width: -1, height: 2 },
        shadowOpacity: 0.28,
        shadowRadius: 10,
    },
    dayBillCard: {
        position: 'absolute',
        top: '50%',
        right: 30,
        borderRadius: 9,
        padding: 5,
        backgroundColor: '#4caf50',
        color: 'white',
    },
    dayBillCardnoPay: {
        backgroundColor: '#d9534f',
    },
    showMoreBtn: {
        marginTop: 10,
        alignSelf: 'center',
    },
    showMoreText: {
        color: '#007bff',
        fontWeight: '600',
    },
    scrollviewContainer: {
    marginTop: 10,
    height: "75%",
    width: '90%',         // força ocupar todo o espaço horizontal
    paddingHorizontal: 10, // opcional: espaçamento interno
    position: 'relative',
}

});
