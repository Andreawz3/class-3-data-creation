import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text } from 'react-native';
import { bookStore } from '../data/books'
import { useState } from 'react'
import { List, Divider } from 'react-native-paper';

export default function About({navigation}) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    };

    return (
        <View style={styles.container}>
            <Text>Welcome to the dashboard</Text>
            <Button style={styles.button} title="Show data" onPress={() => addingData()}/>
            {
                data && data.books.map((b, index) => {
                    if(b.category.toLowerCase() == "java") {
                        return (
                            <View key={index}>
                                <Text style={styles.title}>{b.title}:</Text>
                            {
                                b.authors && b.authors.map((a, ind) => {
                                    return(
                                        <View key={ind}>
                                            <List.Item
                                                description={a}
                                                left={props => <List.Icon {...props} icon="equal" />}
                                            />
                                            <Divider />
                                        </View>                                   
                                    )
                                })
                            }
                            </View>
                        )
                    }
                })
            }
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
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
