import { getDaysUntilDue } from '@/app/functions/getDaysUntilDue'
import { StyleSheet, Text, View } from 'react-native'

type Props = {

}

export default function UpcommingBills() {
    const bill = {
        contas: {
            internet: {
                name: 'internet',
                value: 150,
                dueDate: '2025-10-16',
                status: true//payed or not
            },
            agua: {
                name: 'agua',
                value: 10,
                dueDate: '2025-10-12',
                status: false
            }
        }
    }

    //adicionar um 'vence hoje, se o dia for 0' remover o s de dias se o dia for 1
    return (
        <View style={styles.container}>
            <Text style={styles.nextBills}>Proximos Vencimentos</Text>
            <View style={styles.billCard}>
                <Text>{bill.contas.agua.name}</Text>
                <Text>R$: {bill.contas.agua.value}</Text>
                <Text style={[styles.dayBillCard, bill.contas.agua.status ? "" :styles.dayBillCardnoPay  ]} >{getDaysUntilDue(bill.contas.agua.dueDate)}Dias</Text>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    nextBills:{
        fontSize: 14,
        fontWeight: '300',
    },
    billCard: {
        marginTop: 10,
        height: 100,
        backgroundColor: '#aba4a4ff',
        borderRadius: 9,
        padding: 10,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-evenly'
    },
    dayBillCard: {
        position: 'absolute',
        top:"50%",
        right: 30,
        borderRadius: 9,
        padding: 5,
        backgroundColor: '#4caf50'
    },
    dayBillCardnoPay: {
        backgroundColor: '#d9534f'
    }


})