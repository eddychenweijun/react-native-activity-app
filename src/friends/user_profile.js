/**
 * Created by chened2 on 15/11/1.
 */


'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Image,
    View,
    Text,
    } = React;


var UserProfileView = React.createClass( {

    render: function() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={require('../../resource/tonywu.png')} />
                <View style={styles.heading}>
                    <Text style={styles.price}>Tony Wu</Text>
                    <Text style={styles.title}>General Technical Engineer</Text>
                    <View style={styles.separator}/>
                </View>
                <Text style={styles.description}>A man who have a lot of properties, a real diamond bachelor！</Text>
            </View>
        );
    }
});



var styles = StyleSheet.create({
    container: {
        marginTop: 65
    },
    heading: {
        backgroundColor: '#F8F8F8',
    },
    separator: {
        height: 1,
        backgroundColor: '#DDDDDD'
    },
    image: {
        width: 400,
        height: 400
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5,
        color: '#48BBEC'
    },
    title: {
        fontSize: 20,
        margin: 5,
        color: '#656565'
    },
    description: {
        fontSize: 18,
        margin: 5,
        color: '#656565'
    }
});

module.exports = UserProfileView;