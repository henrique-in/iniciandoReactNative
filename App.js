import React, {Component} from 'react';
import {View, Text, StyleSheet, Switch,TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Slider from '@react-native-community/slider';
 




class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      nome:'',
      idade:'',
      sexo:0,
      sexos:[
        {sexoNome:"Masculino", valor:1},
        {sexoNome:"Feminino", valor: 2},
      ],
      limite:250,
      estudante:false,
    };

    this.enviarDados= this.enviarDados.bind(this);
  }

  enviarDados(){
    if(this.state.nome === '' ||this.state.idade === ''){
      alert('Preencha todos os dados')
      return;
    }else{
      alert(
        'Conta aberta com sucesso!! \n\n' + 
        'Nome: '+this.state.nome + '\n' + 
        'Idade: ' + this.state.idade + '\n' +
        'Sexo: '+ this.state.sexos[this.state.sexo].sexoNome + ' \n' +
        'Limite Conta: ' + this.state.limite.toFixed(2) + '\n' +
        'Conta Estudante: ' + ((this.state.estudante)? 'Ativo' : 'Inativo')
        );
    }


  }
  render() {

       let sexoItems = this.state.sexos.map((v, k) => {
       return <Picker.Item key={k} value={k} label={v.sexoNome}/>
        }); 
   
   
       return (
      <View style={styles.container}>
        <View style={styles.topo}>    
        <Text style={styles.titulo}> BANCO REACT </Text>
        </View>

        <View style={styles.formulario}>
         <Text style={styles.texto}> NOME: </Text>
          <TextInput style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={(texto) => this.setState({nome: texto})}
          />

        <Text style={styles.texto}> Idade: </Text>
          <TextInput style={styles.input}
          placeholder='Digite sua idade'
          onChangeText={(texto) => this.setState({idade: texto})}
          keyboardType="numeric" 
          />
        
        <View style={styles.areaSexo}>
        <Text style={styles.texto}> Confirme seu sexo: </Text>
        <Picker
  
         selectedValue={this.state.sexo}
         onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}

        >
        
        {sexoItems}
        </Picker>
        </View>

        <Text style={styles.texto}> Informe seu limite </Text>
        <Slider
         minimumValue={250}
         maximumValue= {5000}
         onValueChange={(limiteSelecionado) => this.setState({limite: limiteSelecionado})}
         value={this.state.limite}
        />
        <Text style={styles.txtLimite}> R$ {this.state.limite.toFixed(2)}</Text>
        
        <View style={styles.areaEstudante}>
        <Text style={styles.texto}> Estudante: </Text>
        <Switch
        style={{paddingTop: 20, flexDirection:'row', alignItems: 'flex-end'}}
        trackColor="#00c" 
        
        value={this.state.estudante} 
        onValueChange={(valorEstudante) => this.setState({estudante: valorEstudante})}
        
        />

        </View>

        <TouchableOpacity style={styles.botao} onPress={this.enviarDados}>
        <Text style={styles.botaoTexto}> Abrir Conta</Text>
        </TouchableOpacity>


        
        </View>
        


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  formulario:{
    flexDirection: 'column',
    margin: 10 ,

  },
  botao:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius: 6,
    backgroundColor: '#008B8B',
    borderColor:'#008B8B',
    margin: 20,
    height:40
  },
  botaoTexto:{
    color:"#fff",
    fontSize: 20
  },

  topo:{
    height:60,
    backgroundColor:"#4682B4",
    marginTop:-20
  },

  titulo:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    color: '#FFFF',
    padding:10
  },
  
  input:{
    marginTop:10,
    marginBottom:10,
    borderWidth: 1,
    borderRadius: 4,
    height: 38,
    borderColor: '#111'

    
  },
  texto:{
    marginTop: 10,
    fontWeight:'bold',
    fontSize:20 ,
  },
  Slider:{

  },
  areaSexo:{
   marginTop: 10,
  },
  txtLimite:{
    textAlign:'center',
    marginTop:10,
    fontSize: 25
  },
  areaEstudante:{
    marginTop:10,
    flexDirection:'row',
    
  }
  


});

export default App;

