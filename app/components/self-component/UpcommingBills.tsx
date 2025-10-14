import { getDaysUntilDue } from '@/app/functions/getDaysUntilDue';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//context hook
import { useAppContext } from '@/app/context/useAppContext';

export default function UpcommingBills() {
    const {setScreen, setPopUpStatus,bill} = useAppContext();


    
    const contasArray = Object.values(bill.contas);

    const contasVisiveis = contasArray.slice(0, 3);

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
                    onPress={() =>{setScreen('upCommingBills'),setPopUpStatus(true), console.log('ipcoming')}}
                >
                    <Text style={styles.showMoreText}>Ver mais</Text>
                </TouchableOpacity>
            )}
        </View>
    );
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
});
