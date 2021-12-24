import react from 'react';
import './App.css';

class App extends react.Component{
  state = {todos:[{id:0,task:'eat',done:false},{id:1,task:'sleep',done:false},{id:2,task:'repeat',done:false}]}

  addtodo=()=>{this.setState({ todos:  [...this.state.todos,{id:Math.random(), done:false,task: this.state.text }]    })}
  deletetodo=(x )=>{this.setState({todos: this.state.todos.filter(el=> el.id !=x )})}

  donetodo=(x )=>{this.setState({todos: this.state.todos.map(el=> el.id==x ? {...el, done:!el.done} : el )})}
  render (){

  return (

    <div className='one' >
      <input onChange={(event)=>this.setState({text:event.target.value})}/>
      <button   style={{
                borderRadius:'5%',
                backgroundColor:'#dc3545',
                borderColor:'#dc3545' ,
                color:'white',
                textAlign: "center",
                marginLeft:'100px'
                
            }}
      
      
      onClick={()=>this.addtodo()}style={{color:'orange',fontWeight:"bold"}}>Add</button>
      {this.state.todos.map(el=> <div> 
        <li style={{textDecoration:el.done ?"line-through":null }}>{el.task}</li>
        <button   style={{
                borderRadius:'5%',
                backgroundColor:'#dc3545',
                borderColor:'#dc3545' ,
                color:'white',
                textAlign: "center",
                marginLeft:'100px'
                
            }}
        
        onClick={()=>this.deletetodo(el.id)}style={{color:'purple',fontWeight:"bold"}}>Delete</button>
        <button   style={{
                borderRadius:'5%',
                backgroundColor:'#dc3545',
                borderColor:'#dc3545' ,
                color:'white',
                textAlign: "center",
                marginLeft:'100px'
                
            }}
        
        onClick={()=>this.donetodo(el.id)}>Done</button>
        </div>
        )}
    
    
    
    </div>
  )

  }
}

export default App;
