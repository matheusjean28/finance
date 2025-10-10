import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
    imgSource : ImageSourcePropType,
    width?: number,
    heigth?: number,
    selectedImage?: string,
};

export default function Imageviewer({imgSource, selectedImage}: Props){
    const imageSource = selectedImage? {uri: selectedImage} : imgSource;
    return <Image source={imageSource}  style={styles.image} />;

}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})