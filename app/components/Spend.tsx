import { StyleSheet, View } from 'react-native'
import CanSpendToday from './self-component/CanSpendToday'
import UpcommingBills from './self-component/UpcommingBills'


//hook context
import { useAppContext } from '../context/useAppContext'
import Popup from './self-component/PopUp'
type Props = {}

export default function Spend() {
    const { popUpStatus, setPopUpStatus } = useAppContext();
    return (
        <View style={styles.container}>
            {!popUpStatus? <><CanSpendToday />
            <UpcommingBills /></> : <Popup/>
        }</View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: "95%",
        backdropFilter: '90%',
    }
})