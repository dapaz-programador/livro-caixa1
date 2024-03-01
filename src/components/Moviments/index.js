import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
 } from 'react-native';


export default function Moviments({data }) {
    const [showValue, setShowValue] = useState(false);

 return (
   <TouchableOpacity style={Styles.container} onPress={() => setShowValue(!showValue)} >
    <Text style={Styles.data}>{data.date}</Text>

    <View style={Styles.content}>
        <Text style={Styles.label}>{data.label}</Text>

      { showValue ? (
          <Text
           style={data.type === 1 ? Styles.value : Styles.expenses}
           >
          {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}` }
      </Text>
      ) : (
        <View style={Styles.skeleton}>

        </View>
      )}

    </View>
   </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 24,
        borderBottomWidth: 0.9,  //cria linha
        borderBottomColor: '#DADADA', // cor da linha    
        
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date:{
        color:'#DADADA',
        fontWeight: 'bold',        
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    value:{
        fontSize: 16,
        color:'#2ecc71',
        fontWeight: 'bold',
    },
    expenses:{
        fontSize: 16,
        color:'#e74c3c',
        fontWeight: 'bold',
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8,

    }
})