import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AddPayment from '../../AddPayment';

type Props = {}


/**
 * Este component ira interagir diretamente com a criação de um pagamento
 * 
 * somente este componente pode fazer isto, 
 */
export default function Payment() {
    const [isOpenPainel, setIsOpenPainel] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            {!isOpenPainel ?
                <>
                    <Text style={{ fontSize: 20, textAlign: 'center', paddingBottom: 10 }}>Aqui você pode adicionar seus pagamentos</Text>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}>
                        Cada item adicionado garantira que seu objetivo esta ainda mais certeiro!
                    </Text>
                    <Pressable style={styles.button}
                        onPress={() => {
                             setIsOpenPainel(!isOpenPainel)
                        }}
                    >
                        <Text style={{color: 'white', fontWeight: '600'}}>Registrar movimento</Text>
                    </Pressable>
                </>
                :
                <AddPayment />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        display: 'flex',
        padding: 12,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
        
    }
})