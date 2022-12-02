import React from 'react';
import { View, Text, Button, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

class StaffMemberInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            phone: props.phone,
            department: props.department,
            street: props.street,
            city: props.city,
            state: props.state,
            zip: props.zip,
            country: props.country,
            isPressed: false,
            showUpdate: true
        }
        
        this.showHide = this.showHide.bind(this)
        this.updateCancel = this.updateCancel.bind(this)
    }

    showHide(){
        this.state.isPressed ? this.setState({isPressed: false}) : this.setState({isPressed: true})
    }
    updateCancel(){
        this.state.showUpdate ? this.setState({showUpdate: false}) : this.setState({showUpdate: true})
    }

    render(){
        if(this.state.showUpdate == true) {
            return <View style={styles.member}>
                        <View className='memberShow' style={styles.memberShow} onClick={this.showHide}>
                            <Text>{this.state.name}</Text> 
                        </View>
                        <View className='memberInfo' id={`memberInfo${this.state.id}`} style={this.state.isPressed ? styles.memberInfoSh : styles.memberInfoHi} >
                            <Text style={styles.memberText}>ID: {this.state.id}</Text>
                            <Text style={styles.memberText}>NAME: {this.state.name}</Text>
                            <Text style={styles.memberText}>PHONE: {this.state.phone}</Text>
                            <Text style={styles.memberText}>DEPARTMENT: {this.state.department}</Text>
                            <Text style={styles.memberText}>STREET: {this.state.street}</Text>
                            <Text style={styles.memberText}>CITY: {this.state.city}</Text>
                            <Text style={styles.memberText}>STATE: {this.state.state}</Text>
                            <Text style={styles.memberText}>ZIP: {this.state.zip}</Text>
                            <Text style={styles.memberText}>COUNTRY: {this.state.country}</Text>
                            <View style={styles.buttonView}>
                                <button style={styles.button} onClick={this.updateCancel}>UPDATE</button>
                            </View>
                            
                        </View>
                    </View>
        }
        else if(this.state.showUpdate == false){
            return <View style={styles.member}>
                        <View className='memberShow' style={styles.memberShow} onClick={this.showHide}>
                            <Text>{this.state.name}</Text> 
                        </View>
                        <View className='memberInfo' id={`memberInfo${this.state.id}`} style={this.state.isPressed ? styles.memberInfoSh : styles.memberInfoHi} >
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>NAME: {this.state.name}</Text>
                                <input style={styles.input}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>PHONE: {this.state.phone}</Text>
                                <input style={styles.input}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>DEPARTMENT: {this.state.department}</Text>
                                <input style={styles.input}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>STREET: {this.state.street}</Text>
                                <input style={styles.input}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>CITY: {this.state.city}</Text>
                                <input style={styles.input}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>STATE: {this.state.state}</Text>
                                <input style={styles.input}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>ZIP: {this.state.zip}</Text>
                                <input style={styles.input}></input>
                            </View>
                            <View style={styles.updateField}>
                                <Text style={styles.memberText}>COUNTRY: {this.state.country}</Text>
                                <input style={styles.input}></input>
                            </View>
                            <View style={styles.buttonView}>
                                <button style={styles.button}>SUBMIT</button>
                                <button style={styles.button} onClick={this.updateCancel}>CANCEL</button>
                            </View>
                        </View>
                    </View>
        }

    }  
}

const styles = StyleSheet.create({
    memberShow: {
        width: '100%',
        paddingTop: '20px',
        paddingBottom: '20px',
        backgroundColor: 'lightgray',
        fontSize: '25px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: '1px',
        borderBottomColor: 'solid black'
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

})

export default StaffMemberInfo;