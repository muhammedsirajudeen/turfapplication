import { View,Text,Button, TouchableOpacity,Image, TextInput, ScrollView } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

//importing stylesheet here
import homeStyle from "../stylesheet/homeStyle";
import turfStyle from "../stylesheet/turfStyle";
export default function TurfScreen({navigation}){


    async function signoutHandler(){
        await AsyncStorage.removeItem("email")
        navigation.navigate("Login")
    }
    function homeHandler(){
        navigation.navigate("Home")
    }
    function formHandler(){
        navigation.navigate("Form")
    }
    function historyHandler(){

    }
    function favoriteHandler(){

    }
    function nearbyHandler(){

    }
    function bookHandler(){
        //here give logic to handle booking
    }
    return(
        <>
            <View style={homeStyle.maincontainer}>
                <View style={homeStyle.accountcontainer}>

                    <View style={homeStyle.searchcontainer}>
                        <TextInput placeholder="Search..." style={homeStyle.textinput} ></TextInput>
                    </View>
                </View>



            {/* options container*/}
          
            {/*nearby turfcontainer*/}
                <ScrollView contenntContainerStyle={homeStyle.turfmaincontainer}>
                {/*  here we map and return the turf first just create one                    */}
                    <View style={[homeStyle.turfcontainer,turfStyle.turfcontainer]}>
                        <Image style={homeStyle.turfimage} source={require("../assets/banner.png")}></Image>
                        <View style={homeStyle.turftextcontainer}>
                            <Text style={turfStyle.turfheading} >Sample Turf 1</Text>
                            <TouchableOpacity style={homeStyle.turflocationcontainer}>
                                <Image source={require("../assets/smallnearby.png")}></Image>
                                <Text style={homeStyle.turftext} >Palakkad</Text>
          
                            </TouchableOpacity>
                            <Text style={turfStyle.turfrate} > $ 1000</Text>

                            {/*  here give a way to give ratings*/}

                            <TouchableOpacity style={homeStyle.bookbutton} onPress={bookHandler} >
                                    <Text style={homeStyle.booktext}  >Book Now</Text>
                                </TouchableOpacity>
                        </View>
                   </View>
                   
                   <View style={[homeStyle.turfcontainer,turfStyle.turfcontainer]}>
                        <Image style={homeStyle.turfimage} source={require("../assets/banner.png")}></Image>
                        <View style={homeStyle.turftextcontainer}>
                            <Text style={turfStyle.turfheading} >Sample Turf 1</Text>
                            <TouchableOpacity style={homeStyle.turflocationcontainer}>
                                <Image source={require("../assets/smallnearby.png")}></Image>
                                <Text style={homeStyle.turftext} >Palakkad</Text>
          
                            </TouchableOpacity>
                            <Text style={turfStyle.turfrate} > $ 1000</Text>

                            {/*  here give a way to give ratings*/}

                            <TouchableOpacity style={homeStyle.bookbutton} onPress={bookHandler} >
                                    <Text style={homeStyle.booktext}  >Book Now</Text>
                                </TouchableOpacity>
                        </View>
                   </View>

                
                </ScrollView>
            </View>


            <View style={homeStyle.bottomcontainer}>
                <View style={homeStyle.bottomsubcontainer}>
                    <TouchableOpacity  onPress={homeHandler} >
                        <Image source={require("../assets/home.png")} style={homeStyle.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={formHandler} >
                        <Image source={require("../assets/notification.png")} style={homeStyle.image} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={formHandler} >
                        <Image source={require("../assets/chat.png")} style={homeStyle.image} />
                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}