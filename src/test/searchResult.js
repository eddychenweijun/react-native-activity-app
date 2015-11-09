/**
 * Created by chened2 on 15/11/1.
 */

'use strict';

var React = require('react-native');
var DetailsView = require('./details');
var {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    ListView,
    Text,
    Component
    } = React;



class SearchResults extends Component {
    constructor(props) {
        //debugger;
        super(props);
        var dataSource = new ListView.DataSource(
            {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.listings)
        };
    }

    rowPressed(propertyGuid) {
        //debugger;
        var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];
        this.props.navigator.push({
            title:"Details",
            component:DetailsView,
            passProps: {property: property}

        })
    };

    renderRow(rowData, sectionID, rowID) {
        //debugger;
        var price = rowData.price_formatted.split(' ')[0];

        return (
            <TouchableHighlight onPress={() => this.rowPressed(rowData.guid)}
                                underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <Image style={styles.thumb} source={{ uri: rowData.img_url }} />
                        <View  style={styles.textContainer}>
                            <Text style={styles.price}>£{price}</Text>
                            <Text style={styles.title}
                                  numberOfLines={1}>{rowData.title}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        //debugger;
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
        );
    }

};


var styles = StyleSheet.create({
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    }
});
module.exports = SearchResults;
