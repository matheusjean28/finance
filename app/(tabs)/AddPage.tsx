import { StyleSheet, View } from "react-native";
import AddGoal from "../components/self-component/AddGoal";

export default function AddPage(){
    return( 
        <View style={styles.container}>
           <AddGoal />
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