import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
 } from 'react-native';


export default function Moviments({data }) {
 return (
   <TouchableOpacity style={StyleSheet.container}>
    <Text style={style.data}>{data.date}</Text>

    <View style={style.content}>
        <Text style={style.label}>{data.label}</Text>

        <Text style={style.value}>
            {data.value}
        </Text>
    </View>
   </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    container:{

    }
})