import React, { Component } from "react"  

import {
  SafeAreaView,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  
  View,
  ImageBackground,
  Linking

} from "react-native"  
import { withNavigation } from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Text, Body,Title,Button,Right,Icon,Accordion } from 'native-base';
import RNUrlPreview from 'react-native-url-preview';
import _ from 'lodash';

const { height, width } = Dimensions.get('screen')  
const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
];
class ReportScreen extends Component {

  state = {
    historyData:[]
  }
  async componentDidMount (){
      //  console.log(this.props.data.data.history)
    
       await _.map( this.props.data.data.history, (e) => {
         
        this.state.historyData.push(e)
      })
    //  console.log(data)
  }

  openReport=async(url)=>{
   
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    
    
  
  }



   _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#A9DAD6" }}>
      <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  }



  render() {
  //  this.props.data.data.history
  const date = this.props.data.data.history[Object.keys(this.props.data.data.history)[0]].sethistory.Date.toLocaleString().substr(0, 9)
  const Remark = this.props.data.data.history[Object.keys(this.props.data.data.history)[0]].sethistory.Remark
  const report = this.props.data.data.history[Object.keys(this.props.data.data.history)[0]].sethistory.reportAvatarURL
  const Prescription = this.props.data.data.history[Object.keys(this.props.data.data.history)[0]].sethistory.PrescriptionAvatarURL
    return (
    <View style={styles.container}>

   {console.log(this.state.historyData)}

        <Card style={{width:width*0.85,alignSelf:"center",borderRadius:20}}>
            <CardItem header style={{borderTopStartRadius:20,borderTopEndRadius:20,backgroundColor:'#45b3e0'}}>
              <Title>Checkup Details</Title>
            </CardItem>
          
                {this.props.data.data.history?
                <>
                  <CardItem>
                
              <Body>
                <Text style={{fontWeight:'700'}}>
                    
                 
                  Your last checkup was on {date}
                </Text>
               
                <Text >
                    <Text style={{fontWeight:'bold'}}>
                    Remarks: &nbsp;
                    </Text>
                 
                
                   {Remark}
                  
                </Text>
                </Body>
                </CardItem>
                <CardItem>
                  <Body style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    backgroundColor:'#fff',height:'auto'
                    
                  }}>

                  <View style={{ height: 50,justifyContent:"center",backgroundColor:'#fff'}}>
                    <Button style={{backgroundColor:'#45b3e0'}}
                       onPress={()=>{this.openReport(report)}}
                       >
                    <Text>Report</Text>

                    </Button>
                  </View>
                  <View style={{height: 50 ,justifyContent:"center", backgroundColor:'#fff'}} >
                  <Button style={{backgroundColor:'#45b3e0'}}  onPress={()=>{this.openReport(Prescription)}}>
                    <Text>Prescription</Text>
                    </Button>
                  </View>






              </Body> 
              </CardItem>
              <CardItem  
                // style={{
                //   borderBottomStartRadius:20,
                //   borderBottomEndRadius:20,
                //   backgroundColor:'#87CEEB'}}
                  >
              {/* <Text>View All </Text> */}
              {/* <Right>
                <Icon name="arrow-forward" iconColor={"#000"}/>
              </Right> */}

              <Accordion
              dataArray={dataArray}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                headerStyle={{ backgroundColor: "#b7daf8" }}
                contentStyle={{ backgroundColor: "#ddecf8" }}
                icon="arrow-forward"
                expandedIcon="remove"
                iconStyle={{ color: "green" }}
                expandedIconStyle={{ color: "red" }}
              />



            </CardItem>
              </>:<CardItem>
              <Body>
              <Text>
                  NO data to display ;)
              </Text>
          </Body> </CardItem>}
           
            
         </Card>
   </View>
    )  
  }

  
}
export default withNavigation(ReportScreen);
const styles = StyleSheet.create({
  container: {
  
   // flex: 1,
  
  },

 
})  