'use strict';

var React = require('react-native');
var LoginPage = require('./src/test/loginPage');
var LoginView = require('./src/user/login');


var {
    StyleSheet,
    Component,
    NavigatorIOS
    } = React;



//class PropertyApp extends Component {
//  render() {
//    return (
//        <NavigatorIOS
//            style={styles.container}
//            initialRoute={{title: 'User Login',component: LoginPage,}}
//        />
//    );
//  }
//}


class OOCLActivityApp extends Component {
    render() {
        return <LoginView/>;
    }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

React.AppRegistry.registerComponent('OOCLActivity', () => OOCLActivityApp );