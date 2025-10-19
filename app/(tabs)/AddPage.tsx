import { StyleSheet, Text, View } from "react-native";

export default function AddPage(){
    return( 
        <View style={styles.container}>
            <Text>
                Add page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    position: 'relative'
  },
})