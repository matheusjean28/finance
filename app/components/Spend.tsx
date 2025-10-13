import { StyleSheet, View } from 'react-native'
import CanSpendToday from './self-component/CanSpendToday'

type Props = {}

export default function Spend() {
    return (
        <View style={styles.container}>
            <CanSpendToday />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: "95%",
        backdropFilter: '90%',
        backgroundColor: 'whitesmoke'
    }
})