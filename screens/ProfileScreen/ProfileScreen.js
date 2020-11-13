import React from "react";
import { View,  StyleSheet, TouchableOpacity, StatusBar, Dimensions, ImageBackground, Image,Text,ScrollView } from "react-native";
import Firebase from '../../firebase';
import { Container, Header, Content, Card, CardItem, Body, Left, Button, Row, Right, Fab } from 'native-base';
const { height, width } = Dimensions.get('screen')
import { withNavigation } from "react-navigation";
import MainSVG from '../../TabBar/Main'
import NotificationSvg from "./assets/NotificationSvg"
import RightArrowSvg from "./assets/RigthArrowSvg"
import ProfileUserSvg from "./assets/ProfileUserSvg"
import InformationSvg from "./assets/InformationSvg";
import LogoutSvg from "./assets/LogoutSvg";
import ProfileNameSvg from "./assets/ProfilenameSvg";
import PhoneNumberSvg from "./assets/PhoneNumberSvg"
import EmailSvg from "./assets/EmailSvg";

import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'


class ProfileScreen extends React.Component {

    state = {
        data: [],
        Name: '',
        PhoneNo: '',
        Email: ''
    }
    componentDidMount() {
        //  console.log(this.props.data.data)
        const data = this.props.data.data
     


    }

    signOutUser = () => {
        Firebase.auth().signOut();
    };
    render() {
        const data = this.state.data
        // console.log(this.state.data.data)
        const Name = this.props.data.data.Name
        const Phone = this.props.data.data.Phone
        const Address = this.props.data.data.Address
        const Email = this.props.data.data.Email
        const Disease = this.props.data.data.Disease
        const Doctor = this.props.data.data.Doctor

        return (


            <View style={styles.container}>
                <StatusBar backgroundColor={'#87CEEB'} />
               

<View style={{flex:1,flexDirection:'column'}}>
<Fab
            // active={this.state.active}
            
           // containerStyle={{ height:30,width:30}}
            style={{ backgroundColor: '#45b3e0',height:50,width:50 }}
            position="topRight"
            onPress={this.signOutUser}
           >
            <AntDesignIcon name="logout" />
           
          </Fab>

                {/* <View style={{ backgroundColor: '#87CEEB', height: 50, }}>
              <MainSVG width={width} height={150}></MainSVG>
              <Text style={{fontSize:25,position:"absolute",marginLeft:20,top:20,color:'#171717',fontWeight:'400'}}>
              Profile
              </Text>
            </View> */}
            <View style={{position:'relative'}}>
          <View style={{backgroundColor:'#87CEEB',height:height*0.06}} ></View>
          <View style={{backgroundColor:'#87CEEB',height:20}}>
            <MainSVG width={width} height={height*0.15}></MainSVG>
          </View>
        </View>
        <View style={{ backgroundColor: '#87CEEB', height: 50,position:"absolute" }}>
              <MainSVG width={width} height={150}></MainSVG>
              <Text style={{fontSize:25,position:"absolute",marginLeft:20,top:40,color:'#171717',fontWeight:'400'}}>
              Profile
              </Text>
            </View>

               

                <ScrollView style={{ marginTop:100,marginBottom:60 }}>
           <Card style={{width:width*0.9,alignSelf:"center",borderTopLeftRadius:20,borderTopRightRadius:20}}>
            <CardItem header bordered style={{borderTopStartRadius:20,borderTopEndRadius:20,backgroundColor:'#45b3e0'}}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Edit Account</Text>
            </CardItem>
            
            <CardItem bordered button onPress={() => alert("Edit profile here")}>
              <AntDesignIcon size={20} name="user" />
              <Text>&nbsp; {Name}</Text>
              <Right>
                <AntDesignIcon size={20} color={'grey'} name="arrowright" />
              </Right>
             </CardItem>

             <CardItem bordered button onPress={() => alert("Edit profile here")}>
              <AntDesignIcon size={20} name="phone" />
              <Text>&nbsp; {Phone}</Text>
              <Right>
                <AntDesignIcon size={20} color={'grey'} name="arrowright" />
              </Right>
             </CardItem>

             <CardItem bordered button onPress={() => alert("Edit profile here")}>
              <AntDesignIcon size={20} name="mail" />
              <Text>&nbsp; {Email}</Text>
              <Right>
                <AntDesignIcon size={20} color={'grey'} name="arrowright" />
              </Right>
             </CardItem>

             <CardItem bordered button onPress={() => alert("Edit profile here")}>
              <EntypoIcon size={20} name="address" />
              <Text>&nbsp; {Address}</Text>
              <Right >
                <AntDesignIcon size={20} color={'grey'} name="arrowright" />
              </Right>
             </CardItem>

            
          </Card>

          <Card style={{width:width*0.9,alignSelf:"center",borderRadius:20,marginTop:20}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Notification')}>
            <CardItem header bordered style={{borderRadius:20}} onPress={() => this.props.navigation.navigate('Notification')}>
            <MaterialIcons size={20} name="notifications-none" />

              <Text style={{color:'#000',fontWeight:'bold',fontSize:15}}> &nbsp; Notifications</Text>
              <Right >
                <AntDesignIcon size={20} color={'grey'} name="arrowright" />
              </Right>
            </CardItem>
        </TouchableOpacity>

            
          </Card>
          
          <Card style={{width:width*0.9,alignSelf:"center",borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:20}}>
            <CardItem header bordered style={{borderTopStartRadius:10,borderTopEndRadius:10,backgroundColor:'#45b3e0'}}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:15}}>Patient data</Text>
            </CardItem>
            
            <CardItem bordered button>
              <FontistoIcon size={20} name="bed-patient" />
              <Text> &nbsp; {Disease}</Text>
             
             </CardItem>

             <CardItem bordered button >
              <FontistoIcon size={20} name="doctor" />
              <Text> &nbsp; {Doctor} </Text>
             
             </CardItem>


            
          </Card>

        
      
          <Card style={{width:width*0.9,alignSelf:"center",borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:20}}>
            <CardItem header bordered style={{borderTopStartRadius:10,borderTopEndRadius:10,backgroundColor:'#45b3e0'}}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:15}}>About Us</Text>
            </CardItem>
            
            <CardItem  button>
              <FontistoIcon size={20} name="bed-patient" />
              <Text> Hospital Name</Text>
             
             </CardItem>

             <CardItem bordered button >
              <FontistoIcon size={20} name="doctor" />
              <Text> Hospital Address </Text>
             
             </CardItem>


            
          </Card>

         




                    {/* <Card style={styles.LogoutStyles}>


                        <TouchableOpacity style={{ alignSelf: "center", display: "flex", flexDirection: "row", width: width * 0.4, height: 50 }} 
                        onPress={this.signOutUser}>

                            <Text style={{ fontWeight: "bold", alignSelf: "center", marginTop: 5, marginHorizontal: 35, color: "black" }}>Logout</Text>
                            <View style={{
                                marginTop: 14,
                                // marginHorizontal:80
                            }}>
                                <LogoutSvg />
                            </View>
                        </TouchableOpacity>




                    </Card> */}


                </ScrollView>
                </View>
            </View>





        );

    }

}


export default withNavigation(ProfileScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#87ceeb33"
    },
    UserdetailStyle: {
        padding: 5,
        borderRadius: 20,
        alignSelf: "center",
        width: width * 0.85,
        height: height * 0.25,
        top: 10,

        borderWidth: 1,
        borderColor: "#87ceeb",
        borderRadius: 6,
        borderBottomWidth: 1
    },

    AboutUsStyle: {
        borderColor: "#87ceeb",
        width: width * 0.85,
        height: height * 0.18,
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
    },
    LogoutStyles: {
        marginTop: height * 0.02,
        borderColor: "#87ceeb",
        alignSelf: "center",
        width: width * 0.4,
        borderRadius: 14,
        borderWidth: 1
    }






});
