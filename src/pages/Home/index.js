/*import { StatusBar } from 'expo-status-bar';*/
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id:1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 // despesas
  },
  {
    id:2,
    label: 'Pix cliente x',
    value: '2.500,90',
    date: '20/09/2022',
    type: 1 // receita / entradas
  },
  {
    id:3,
    label: 'Salário',
    value: '3.400,90',
    date: '22/09/2022',
    type: 1 // receita / entradas
  }

]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Hermes da Paz!"/>


        <Balance saldo="9.250,70" gastos="-530,00"/>

        <Actions/>

        <Text style={styles.title}>Ùltimas movimentações</Text>

        <FlatList
          style={styles.list}
          data={list}
          ReyExtractor={(item) => String(item.id)}  // transforma qualquer iten em string
          showsVerticalScrollIndicator={false}  // retira barra de rolagem
          renderItem= {({ item }) => <Moviments data={item}/>}


        />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',    
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,


  }
});
