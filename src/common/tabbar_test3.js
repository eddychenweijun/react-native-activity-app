/**
 * Created by chened2 on 15/11/4.
 */

var React = require('react-native');
//var NavigatorComponent = require('./NavigatorComponent');

var {
    TabBarIOS
    } = React;

var TabBarView = React.createClass({

    getInitialState: function () {
        return ({
            dataSource: this.props.dataSource,
            selectedTab: this.props.dataSource[0].title,
            component: this.props.dataSource[0].displayComponent
        })

    },
    render: function () {
        return (
            <React.TabBarIOS>
                {
                    Object.keys(this.state.dataSource).map(
                        (key) => (
                            <React.TabBarIOS.Item
                                title={this.state.dataSource[key].title}
                                icon={(this.state.dataSource[key].icon)?this.state.dataSource[key].icon:null}
                                systemIcon={(this.state.dataSource[key].systemIcon)?this.state.dataSource[key].systemIcon:null }
                                selected={this.state.selectedTab === this.state.dataSource[key].title}
                                onPress={() => {
                                      this.setState({
                                          selectedTab: this.state.dataSource[key].title,
                                      });
                            }}>{this._renderView(this.state.dataSource[key].displayComponent)}</React.TabBarIOS.Item>
                        )
                    )
                }
            </React.TabBarIOS>
        );
    },
    _renderView: function (Component) {
        return (<Component style={{backgroundColor:'green'}}/>);
    }
});

module.exports = TabBarView;