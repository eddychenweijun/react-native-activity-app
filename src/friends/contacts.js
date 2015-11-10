/**
 * Created by chened2 on 15/11/4.
 */
'use strict';

var React = require('react-native');
var ContactListView = require('./contact_list');

var {
    StyleSheet,
    NavigatorIOS,
    } = React;

var ContactsView = React.createClass({

    render: function(){
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{title: 'Contacts',component: ContactListView}}
            />
        )
        //return <ContactListView/>;
    },

});



var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = ContactsView;
