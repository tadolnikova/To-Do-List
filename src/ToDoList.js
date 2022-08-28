import { Component } from "react";
import icon from './icon.png';

export class ToDoList extends Component{
    state={
userInput:'',
planToDo:[]
    }
    onChangeEvent(e){
        this.setState({userInput:e})
    }
    addItem(input){
if(input===''){
    alert("Please, enter an item")
}else{

        let listArray=this.state.planToDo;
        listArray.push(input);
        this.setState({planToDo:listArray, userInput:''})
        
    }
}
    deleteItem(){
        let listArray = this.state.planToDo;
        listArray = [];
        this.setState({planToDo:listArray})
    }

    
    crossWord(event){
        const li=event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="What to do today:"
                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() =>this.addItem (this.state.userInput)} className = "add">Add</button>
            </div>
            <ul>
                {this.state.planToDo.map((item, index)=>(
                    <li onClick ={this.crossWord} key={index}>
                        <img src={icon}width="40px" alt="desk"/>
                        {item}</li>

                ))}
            </ul>
            <div className="container">
            <button onClick={()=>this.deleteItem()} className = "delete">Delete</button>
            </div>
            </form>
            </div>

        )
    }
}