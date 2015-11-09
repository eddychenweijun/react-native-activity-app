/**
 * Created by chened2 on 15/11/4.
 */
'use strict';

var React = require('react-native');
var ContactsView =require('../friends/contacts');
var LoginView = require('../user/login');


var {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    } = React;

var TabBar = React.createClass({
    statics: {
        title: '<TabBarIOS>',
        description: 'Tab-based navigation.'
    },
    getInitialState: function() {
        return {
            abc:false,
            selectedTab: 'contactsTab',
            notifCount: 0,
            presses: 0,
        };
    },

    render: function() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    systemIcon='top-rated'
                    selected={this.state.selectedTab === 'activitiesTab'}
                    onPress={() => {this.setState({selectedTab: 'activitiesTab'});}}
                 >
                {this._renderContent('#414A8C', 'Activities')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="contacts"
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === 'contactsTab'}
                    onPress={() => {this.setState({selectedTab: 'contactsTab',notifCount: this.state.notifCount + 1,});}}
                >
                <ContactsView/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="favorites"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {this.setState({abc: 'greenTab',presses: this.state.presses + 1});}}
                >

                </TabBarIOS.Item>
            </TabBarIOS>
        );
    },

    _renderContent: function(color: string, pageText: string) {
        return (<LoginView/>);
        //return (
        //    <View style={[styles.tabContent, {backgroundColor: color}]}>
        //        <Text style={styles.tabText}>{pageText}</Text>
        //        <Text style={styles.tabText}>{this.state.presses} re-renders of the More tab</Text>
        //    </View>
        //);
    },
});
var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});
module.exports = TabBar;