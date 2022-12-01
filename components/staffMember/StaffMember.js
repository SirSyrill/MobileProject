import React, { cloneElement, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import getMembers from '../../api/getMembers';

const StaffMember = () => {

    let res = [
        {
            id: '1',
            name: 'John Smith',
            phone:'0299882211',
            department: '1',
            street: '1 Code Lane',
            city: 'Javaville',
            state: 'NSW',
            zip: '0100',
            country: 'Australia'
        },
        {
            id: '2',
            name: 'Sue White',
            phone:'0388992255',
            department: '2',
            street: '16 Bit Way',
            city: 'Byte Cove',
            state: 'QLD',
            zip: '1101',
            country: 'Australia'
        }, {
            id: '3',
            name: 'Bob O’Bits',
            phone:'0577882255',
            department: '3',
            street: '8 Silicon Road',
            city: 'Cloud Hills',
            state: 'VIC',
            zip: '1001',
            country: 'Australia'
        }
    ];
    console.log(res);

    // function showHide(id){
    //     let item = document.getElementById(id)
    //     item.style.display == 'none' ? item.style.display = 'flex' : item.style.display = 'none'
    // }
    let display = [];

    for(let i = 0; i < res.length; i++){

        let currentDisplay = <View style={styles.member}>
                                <div className='memberShow' style={styles.memberShow}>
                                    <div>{res[i].name}</div> 
                                </div>
                                <div className='memberInfo' id={`memberInfo${res[i].id}`} style={styles.memberInfo} >
                                    <div>ID: {res[i].id}</div>
                                    <div>NAME: {res[i].name}</div>
                                    <div>PHONE: {res[i].phone}</div>
                                    <div>DEPARTMENT: {res[i].department}</div>
                                    <div>STREET: {res[i].street}</div>
                                    <div>CITY: {res[i].city}</div>
                                    <div>STATE: {res[i].state}</div>
                                    <div>ZIP: {res[i].zip}</div>
                                    <div>COUNTRY: {res[i].country}</div>
                                </div>
                            </View>

        display[i] = currentDisplay
    }

    return <View style={styles.memberList}>
                <div style={styles.memberHeader}>
                    STAFF DIRECTORY
                </div>
                {display}
            </View>
}

const styles = StyleSheet.create({
    memberHeader: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'ceneter',
        backgroundColor: 'black',
        color: 'white'
    },
    memberList:{
        display: 'flex',
        flexDirection: 'column'
    },
    member: {
        
    },
    memberShow: {
        width: '100%',
        paddingTop: '20px',
        paddingBottom: '20px',
        backgroundColor: 'lightgray',
        fontSize: '25px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    memberInfo: {
        // display: 'none',
        display: 'flex',
        backgroundColor: 'grey',
        color: 'white',
        fontSize: '20px',
        
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

})

export default StaffMember