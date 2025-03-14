import { Text, View } from 'react-native'
import styles from '../styles'
import { FlatList } from 'react-native-gesture-handler';

const ItemTypes = ["Laptops", "Desktops", "Monitors", "Other Accessories/Cables"]

const Category = (props) => {
    return (
        <FlatList
                data = {ItemTypes}
                keyExtractor={(category) => category}
                renderItem={() => {

                    return (
                        <Text> {element.item} </Text>
                    )
                }}>


        </FlatList>
    );
};

export default Category;