import React from "react"

class MinhaLista extends React.Component{
   state = {
        title: "My List",
        addTodo: "",
        todo: []
   };

   handleAddItem = () =>{
    let prevList = this.state.todo;   
    
    const item = {
           id: this.state.todo.length,
           name: this.state.addTodo,
           isDone: false
       };
       
       prevList.push(item);

       this.setState({
           todo: prevList,
           addTodo: ""
        });
    };

    //Vou precisar de ajuda pra entender esse :/   
    onChangeInput = event => {
        const value = event.target.value;
        this.setState({addTodo: value});
    };

    toogleDone = id =>{
        let cloneList = this.state.todo.map(item => {
            if(item.id === id){
                item.isDone = !item.isDone;
            }
            return item;
        });
        this.setState({todo: cloneList})
    }

    render (){
        return (
            <div>
            <h1>Miss.. Vaaaanjie!</h1>
            <input 
            type="text" 
            onChange={this.onChangeInput}
            value={this.state.addTodo}
            />
            <button type="button" onClick={this.handleAddItem}>Add Item</button>
            <hr />
            <br></br>
            <b>Not Done:</b>
                <ul>
                    {this.state.todo.map(item => {
                        if(!item.isDone){
                            return(
                                <li onClick={() => this.toogleDone(item.id)}>
                                    <input type="checkbox" checked={item.isDone}/>
                                    <span 
                                    style={{
                                    textDecoration: item.isDone ? "line-through" : ""
                                    }}
                                >{item.name}</span>
                                </li>
                            );
                        }
                    })}
                </ul>
                
                <b>Done:</b>
                <ul>
                    {this.state.todo.map(item => {
                        if(item.isDone){
                            return(
                                <li onClick={() => this.toogleDone(item.id)}>
                                    <input type="checkbox" checked={item.isDone}/>
                                    <span 
                                    style={{
                                    textDecoration: item.isDone ? "line-through" : ""
                                    }}
                                >{item.name}</span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default MinhaLista;