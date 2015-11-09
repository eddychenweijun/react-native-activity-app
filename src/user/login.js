/**
 * Created by chened2 on 15/11/3.
 */
'use strict'

var React = require('react-native');
var TabBarView = require('../common/tabbar');

var {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS
    } = React;

var LoginView = React.createClass({

    getInitialState: function(){
        return {
            username:'',
            pwd:'',
            isLogin:false,
            isLoading:false,
        }
    },

    login:function(){
        var _this = this;
        _this.setState({ isLoading: true });
        fetch("http://www.baidu.com"
        ).then(function(res){
            if(res.status = 200){
                _this.setState({isLogin:true,isLoading:false});
            }else{
                _this.setState({isLogin:false});
            }
        }, function(e){
                _this.setState({isLogin:false});
                alert('login failed');
        }).done(function(){

        });

    },

    render:function(){
        if(this.state.isLogin){
            return <TabBarView/>;

        }
        return (

            <View style={styles.superContainer}>

                    <View style={styles.loginViewContainer}>
                        <View style={styles.imageLogoView}>
                            <Image style={styles.imageLogo} source={require('../../resource/doitforlife.jpg')}/>
                        </View>
                        <View style={styles.textTitle}>
                            <Text style={styles.textTitleStyle}>OOCL Activity</Text>

                        </View>
                        <View style={styles.formView}>
                            <TextInput
                                style={styles.userInput}
                                placeholder='username'
                                onChangeText={(text)=>this.setState({username:text})}/>
                            <TextInput
                                style={styles.userInput}
                                placeholder='password' password={true}
                                onChangeText={(pwdtext)=>this.setState({pwd:pwdtext})}/>
                        </View>

                        <View style={styles.operationView}>
                            <TouchableHighlight underlayColor='transparent' onPress={this.login}>
                                <Text style={styles.ButtonText}>Login</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.BottomViewContainer}/>

            </View>

        );
    }
});


var styles = StyleSheet.create({
    superContainer: {
        flex: 1 ,
        flexDirection: 'column',
        //backgroundColor: '#F5FCFF'
    },

    BottomViewContainer: {
        //flex: 0.05,
        //opacity: 0,
        //backgroundColor: 'black',
        marginBottom:10,
    },

    loginViewContainer: {
        marginTop: 40,
        flex: 0.3,
        opacity: 0.95,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
        //backgroundColor: '#37a0f1',
        //backgroundColor: '#ee2c2c',

    },
    imageLogoView: {
        //opacity: 0.95,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop:100,
    },
    imageLogo: {
        width:261,
        height:150
    },
    textTitle: {

        opacity: 0.95,
        marginTop:20,
        justifyContent: 'center'
    },
    formView: {
        marginTop: 30,
        opacity: 0.95,
        justifyContent: 'center',
       // backgroundColor: '#ee2c2c'

    },
    operationView: {
        opacity: 0.95,
        marginTop: 20,
        justifyContent: 'center',
        marginBottom: 10
    },
    textTitleStyle: {
        color: 'green',
        textAlign: 'center',
        fontSize: 28
    },
    textDescriptionStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 12
    },
    ButtonText: {
        color: '#bdbdbd',
        textAlign: 'center',
        fontSize: 22,
        marginTop: 5,
    },
    button: {
        width:50,
        height:10,
        backgroundColor:'blue'

    },
    orText: {
        color: '#fffdfd',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 10,
    },
    userInput: {
        backgroundColor: 'white',
        marginLeft: 40,
        marginRight: 40,
        borderColor: '#37a0f1',
        marginTop: 0,
        fontSize: 18,
        height: 30,
        borderRadius: 3,
        margin: 10,
        borderWidth: 1,
    },


});
module.exports = LoginView;





