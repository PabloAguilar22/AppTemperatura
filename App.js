import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useState } from 'react';

const App=()=>{

  const [numero, setNumero] = useState(0);
  const cambiar=(num)=> {
    setNumero( (cuenta)=> cuenta*10 + num)
  }


  const descontar=() => {
    setNumero(0)
  }
  
  //Celcius a Kelvin
  const ck=()=> {
    setNumero(numero + 273.15) 
  }

  //Kelvin a Celcius
  const kc=()=>{
    setNumero(numero - 273.15) 
  }
  
  // Fahrenheit a Kelvin
  const fk = () => {
    setNumero(((numero-32)* 5/9) + 273.15)
  }
  
 // Kelvin a Fahrenheit
  const kf = () => {
    setNumero(((numero-273.15)* 9/5 + 32))
  }
  
  // Fahrenheit a Celcius
  const fc=()=>{
    setNumero((numero-32) * 5/9)
  }
  
  //Celcius a Fahrenheit
  const cf=()=>{
    setNumero((numero*9/5) + 32)
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Temperatura</Text>
      <Text style={styles.texto}>{numero}</Text>
      <View style={styles.grados}>
        <View style={styles.contenedor}>
          <TouchableOpacity style={styles.kelvin} onPress={()=>kc()}><Text>K-C</Text></TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          <TouchableOpacity style={styles.kelvin} onPress={()=>ck()}><Text>C-K</Text></TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          <TouchableOpacity style={styles.kelvin} onPress={()=>cf()}><Text>C-F</Text></TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          <TouchableOpacity style={styles.kelvin} onPress={()=>fc()}><Text>F-C</Text></TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          <TouchableOpacity style={styles.kelvin} onPress={()=>kf()}><Text>K-F</Text></TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          <TouchableOpacity style={styles.kelvin} onPress={()=>fk()}><Text>F-K</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.botones}>

        <View style={styles.contenedor}>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(1)}><Text>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(4)}><Text>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(7)}><Text>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.n}></TouchableOpacity>
        </View> 
        <View style={styles.contenedor}>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(2)}><Text>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(5)}><Text>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(8)}><Text>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(0)}><Text>0</Text></TouchableOpacity>
        </View>
        <View style={styles.contenedor}>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(3)}><Text>3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(6)}><Text>6</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>cambiar(9)}><Text>9</Text></TouchableOpacity>
          <TouchableOpacity style={styles.h} onPress={()=>descontar()}><Text>Borrar</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#61879b',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  },
  contenedor:{
    justifyContent:'center',
    paddingTop: 5,
    marginHorizontal: 1
  },
  btn:{
    width:85,
    height: 85,
    backgroundColor: '#C2AEAA',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',
    fontFamily:'Arial',
    marginHorizontal:3,
    marginVertical: 5
  },
  btn2:{
    width:85,
    height: 85,
    backgroundColor: '#C2AEAA',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',
    fontFamily:'Arial',
    shadowColor: '#FCC4BA',
    marginHorizontal:1,
    marginVertical: 5
  },
  botones:{
    flexDirection: 'row',
  },
  grados:{
    flexDirection: 'row',
  },
  h:{
    width:85,
    height: 85,
    backgroundColor: '#C2AEAA',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',
    fontFamily:'Arial',
    marginHorizontal:3,
    marginVertical: 5
  },
  n:{
    width:85,
    height: 85,
    backgroundColor: 'transparent',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',
    fontFamily:'Arial',
    marginHorizontal:1,
    marginVertical: 5
  },
  kelvin:{
    width:45,
    height: 30,
    backgroundColor: '#C2AEAA',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',
    fontFamily:'Arial',
    shadowColor: '#FCC4BA',
    marginHorizontal:0.75,
    marginVertical: 10
  },
  texto:{
    height:30,
    width:220,
    marginTop:40,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent',
    borderColor: '#DCDCDC',
    borderRadius: 4,    
    fontSize: 20
  },
  titulo:{
    height:20,
    width:200,
    marginTop:0,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent', 
    fontSize: 20
  }
});
 
export default App;