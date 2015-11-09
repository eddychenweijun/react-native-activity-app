/**
 * Created by chened2 on 15/11/1.
 */

'use strict';

var React = require('react-native');
var UserProfileView = require('./user_profile');
var {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    ListView,
    Text,
    Component,
    ActivityIndicatorIOS
    } = React;



var  ContactListView = React.createClass({

    getInitialState:function(){
        return ({
            dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid}),
            isLoading:true
        });
    },

    componentDidMount: function() {
        this.fetchData();
    },

    fetchData: function() {
        var url = urlForQueryAndPage('place_name', 'london', 1);
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.response.listings),
                    isLoading: false
                });
            })
            .done();
    },

    rowPressed: function(propertyGuid) {
        var property = this.state.dataSource._dataBlob.s1.filter(prop => prop.guid === propertyGuid)[0];
        this.props.navigator.push({
            title:"Profile",
            component:UserProfileView,
            passProps: {property: property}

        })

    },

    renderRow: function(rowData) {
        var price = rowData.price_formatted.split(' ')[0];

        return (
            <TouchableHighlight onPress={() => this.rowPressed(rowData.guid)}
                                underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <Image style={styles.thumb} source={require('../../resource/tonywu.jpg')} />
                        <View  style={styles.textContainer}>
                            <Text style={styles.username}>Tony Wu</Text>
                            <Text style={styles.signature}
                                  numberOfLines={1}>General Technical Engineer</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        );
    },

    render: function() {
        if (this.state.isLoading) {
            return this.renderLoadingView();
        };
        return (
            <View style={styles.container} >
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
            </View>
        );
    },

    renderLoadingView: function() {
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS
                    size='large'/>
                <Text>
                    Loading ...
                </Text>
            </View>
        );
    }

});

function urlForQueryAndPage(key, value, pageNumber) {
    var data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber
    };
    data[key] = value;
    var querystring = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');
    return 'http://api.nestoria.co.uk/api?' + querystring;
};

var styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:60
    },
    thumb: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    textContainer: {
        flex: 1,
        marginTop:8
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    signature: {
        fontSize: 14    ,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 4
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
module.exports = ContactListView;
