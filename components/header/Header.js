import React, { cloneElement } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const Header = () => {
    return(
        <View style={styles.header}>
            <div style={styles.logo}>
                ROI
            </div>
            <div style={styles.addMember}>
                ADD
            </div>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
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
    }
  });

export default Header;