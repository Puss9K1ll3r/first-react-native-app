import { StyleSheet, Text, View, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }) {
    return (
        <View style={gStyle.main}>
            <Image 
                source={route.params.img}
                style={{ width: '100%', height: 300, marginBottom: 20 }}
            />
            <Text style={gStyle.title}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    full: {
        fontFamily: 'r-reg',
        fontSize: 18,
        marginTop: 20,
        color: '#474747'
    }
})