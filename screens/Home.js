import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { Searchbar } from 'react-native-paper';

export default function Home({navigation}) {

    const [number, setNumber] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const check = () => {
        
        if(number == 1) {
            console.log("ONE")
        } else if(number == 2) {
            console.log("TWO")
        } else if(number == 3) {
            navigation.push('About')
        }
        console.log(number);
        setNumber(number + 1)
    }

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <TouchableOpacity   onPress={() => check()} 
                                style={number === 1 ? styles.btnBlue : 
                                                number === 2 ? styles.btnRed : styles.btnGreen }>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E4E6C3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#63C5DA',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: '#800000',
        borderColor: '#800000',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: '#00563B',
        borderColor: '#00563B',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    }
});
