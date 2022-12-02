import axios from 'axios';
import React, { cloneElement } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPressed: false,
            updateCancel: true
        }
        this.showHide = this.showHide.bind(this)
        this.createReq = this.createReq.bind(this)
    }

    showHide(){
        this.state.isPressed ? this.setState({isPressed: false}) : this.setState({isPressed: true})
    }
    createReq(){
        axios.post('http://localhost:3000/post', {
            name: this.state.CreateName,
            phone: this.state.CreatePhone,
            department: this.state.CreateDepartment,
            street: this.state.CreateStreet,
            city: this.state.CreateCity,
            state: this.state.CreateState,
            zip: this.state.CreateZip,
            country: this.state.CreateCountry,
        })
        .then(res => {
            if(res.status == 200) {
                alert('Member added. changes will become visible next time you launch your app')
            }
        });
    }

    render(){
        return(
            <View style={styles.header}>
                <View style={styles.headerUpper}>
                    <Text style={styles.logo}>
                        ROI
                    </Text>
                    <Text style={styles.addMember} onClick={this.showHide}>
                        ADD
                    </Text>
                </View>
                <View style={styles.headerlower}>
                <View style={styles.memberAdd}>
                        
                        <View style={this.state.isPressed ? styles.memberInfoSh : styles.memberInfoHi} >
                        <View style={styles.addMemberText}>ADDING NEW MEMBER</View>
                        <View style={styles.updateField}>
                                <Text style={styles.memberText}>NAME: {this.state.name}</Text>
                                <input style={styles.input} onChange={(e) => this.setState({ CreateName: e.target.value })}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>PHONE: {this.state.phone}</Text>
                                <input style={styles.input} onChange={(e) => this.setState({ createPhone: e.target.value })}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>DEPARTMENT: {this.state.department}</Text>
                                <input style={styles.input} onChange={(e) => this.setState({ CreateDepartment: e.target.value })}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>STREET: {this.state.street}</Text>
                                <input style={styles.input} onChange={(e) => this.setState({ CreateStreet: e.target.value })}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>CITY: {this.state.city}</Text>
                                <input style={styles.input} onChange={(e) => this.setState({ CreateCity: e.target.value })}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>STATE: {this.state.state}</Text>
                                <input style={styles.input} onChange={(e) => this.setState({ CreateState: e.target.value })}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>ZIP: {this.state.zip}</Text>
                                <input style={styles.input} onChange={(e) => this.setState({ CreateZip: e.target.value })}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>COUNTRY: {this.state.country}</Text>
                                <input style={styles.input} onChange={(e) => this.setState({ CreateCountry: e.target.value })}></input>
                            </View>
                            <View style={styles.buttonView}>
                                <button style={styles.button} onClick={this.createReq}>SUBMIT</button>
                                <button style={styles.button} onClick={this.updateCancel}>CANCEL</button>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerUpper: {
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    logo: {
        backgroundColor: "#941a1d",
        width: "150px",
        height: "65px",
        border: '7px solid black',
        color: 'white',
        textAlign: 'center',
        fontSize: '45px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    addMember: {
        width: '50px',
        height: '40px',
        backgroundColor: '#941a1d',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    },
    memberInfoSh: {
        display: 'flex',
        backgroundColor: 'grey',
        fontSize: '20px',
        
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    memberInfoHi: {
        display: 'none',
        backgroundColor: 'grey',
        fontSize: '20px',
        
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    memberText: {
        color: 'white'
    },
    buttonView: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '10px'
    },
    addMemberText:{
        color: 'white',
        textAlign: 'center',
        marginBottom: '15px'
    },  
    updateField: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: "40%",
        marginLeft: '100px'
    },
    button: {
        backgroundColor: "#941a1d",
        color: 'white',
        width: "150px",
        height: "40px",
        justifyContent: 'center',
    }
  });

export default Header;