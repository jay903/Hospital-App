import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LoginSvgOne } from './assets/SubtlePrismSvg'
import auth from '@react-native-firebase/auth';

const { height, width } = Dimensions.get('screen')




const LoginScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
   
    
    const [account, setAccount] = useState(false);

    useEffect(() => {   
      auth().onAuthStateChanged(user => {
        if(user===null){
          setAccount(false)
          
        }else{
          if(user.email===null){
            setAccount(false)
          }else{
            setAccount(true)
          }
        }
        
      })
      
    },[])


    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 6 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = async(email, password) => {

        // const foundUser = Users.filter( item => {
        //     return userName == item.username && password == item.password;
        // } );

      //  this.setState({ loading: true, userAcc:true })
  
        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

       
    
       console.log(email,password)
        await auth()
          .signInWithEmailAndPassword(email, password)
          .then(async(emailDone) => {
              // this.setState({
              //   loading: false,
              // })
            
          })
          .catch(error => {
           
            if (error.code === 'auth/invalid-email') {
              Alert.alert('Error!', "That email address is invalid!", [
                {text: 'Okay'}
              ])
            }else{
              Alert.alert('Error!', "Check email/ Password!", [
                {text: 'Okay'}
              ])
            }
            
          return;
            // if (this._isMounted) {
            //   this.setState({ errorMessage: error.message, loading: false, 
            //     userAcc:false
            //   })
            // }
          })

        
    }
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#2e86c1' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
               // backgroundColor: "#fff"
            }]}
        >
         

<View style={{bottom:-20}}>
          <LoginSvgOne width={width*1} height={height*0.15} color={'#fff'} ></LoginSvgOne>
        </View>

        <View style={styles.footernew}> 
        {account?
<View>
            <Text style={styles.text_footer}>You are already logged in as {auth().currentUser.email}.{'\n'}
            Click continue to complete phone authentication.{'\n'}</Text>
            <TouchableOpacity
                    style={{...styles.signIn,width:width*0.6,alignSelf:"center"}}
                    onPress={() => navigation.navigate('Phone')}
                >
                <LinearGradient
                    colors={['#87CEEB', '#2e86c1']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Continue</Text>
                </LinearGradient>
                </TouchableOpacity>

                <Text style={styles.text_footer}>{'\n'}Want to signin with other account?</Text>
                <TouchableOpacity
                    style={{width:width*0.6,alignSelf:"center"}}
                    onPress={() => auth().signOut()}
                >
                <LinearGradient
                    colors={['#87CEEB', '#2e86c1']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Logout</Text>
                </LinearGradient>
                </TouchableOpacity>

</View>
            :<><Text style={[styles.text_footer, {
             //   color: colors.text
            }]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                   // color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                      //  color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Incorrect Email.</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
              //  color: colors.text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
               //     color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                 //       color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            

            {/* <TouchableOpacity>
                <Text style={{color: '#2e86c1', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity> */}
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                <LinearGradient
                    colors={['#87CEEB', '#2e86c1']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Log In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Phone')}
                    style={[styles.signIn, {
                        borderColor: '#2e86c1',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#2e86c1'
                    }]}>Forget Password</Text>
                </TouchableOpacity>
            </View></>}
            </View>
        </Animatable.View>
      </View>
    );
};
export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#2e86c1'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 0
    },
    footer: {
        flex: 5,
        backgroundColor: 'transparent',
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
     //   paddingHorizontal: 0,
         padding: 0,
         margin: 0
    },
    footernew: {
      flex: 1,
      backgroundColor: '#fff',
      // borderTopLeftRadius: 30,
      // borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });