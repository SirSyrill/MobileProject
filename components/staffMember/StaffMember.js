import React, { cloneElement, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import getMembers from '../../api/getMembers';
import StaffMemberInfo from './staffmemberInfo';
import axios from 'axios';

class StaffMember extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            isPressed: false
        }
    }

    componentDidMount(){
        let res = axios.get('http://localhost:3000')
        .then(res => {
            console.log(res)
            this.setState({
                data: res.data,
            }) ;
            
        });

    }


    render() {

        let display = [];

        for(let i = 0; i < this.state.data.length; i++){

            let currentDisplay = <StaffMemberInfo id={this.state.data[i].id} name={this.state.data[i].name} phone={this.state.data[i].phone} department={this.state.data[i].department} street={this.state.data[i].street} city={this.state.data[i].city} state={this.state.data[i].state} zip={this.state.data[i].zip} country={this.state.data[i].country}/>

            display[i] = currentDisplay
        }

        return (
            <View style={styles.memberList}>
                <Text style={styles.memberHeader}>
                    STAFF DIRECTORY
                </Text>
                {display}
            </View>
        )
    }

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

})

export default StaffMember