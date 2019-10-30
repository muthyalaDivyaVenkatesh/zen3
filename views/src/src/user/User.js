import React, { Component } from 'react';
import axios from 'axios';

// import form 
import UserForm from './UserForm'

 class User extends Component {

    state = {
        favoriate:'',
        name:'',
        type:'',
        userData:[]
    }

      //  method for Displaying 
      componentDidMount() {
        axios.get('http://localhost:8080/').then(data =>{
            console.log(data.data.userData)
            this.setState({
                userData:this.state.userData.concat(data.data.userData)
            }, () => {console.log(this.state.userData);})
        })
    }
    
    //onChnageHander     
    onChangeHandler =  (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    } 
    
    // submitHandler 
    onSubmitHandler = (event) =>{
        console.log("we are in onSubmitHandler")
        event.preventDefault();
        let  axiosData = {
            Name:this.state.name,
            Type:this.state.type,
            Favorite:this.state.favoriate
        }
        // post data 
        axios.post('http://localhost:8080/user',axiosData).then(()=>{
            console.log("sucessfully submited the data")
            alert("succefuly submitted the Data")
        })

    }
    methodForAdding = () =>{

         return ( 
         <UserForm  name={this.state.name} type= {this.state.type} favoriate ={this.state.favoriate} 
          submit={this.onSubmitHandler}   changed={(event)=>this.onChangeHandler(event)} />
          )
    }

    
    methodForDisplaying = () =>{
        
        if(this.state.userData) {
            // console.log(this.state.userData.map(val => console.log(val)))
           return  (
           <form className="container">
            <div className="card form-group">
                userData
                {this.state.userData.map((userData)=>(
                    <div key ={userData._id}>
                     <div>
                         <label>
                             Name<br/>
                         <input  type="text"  onChange={this.editOnchangeHandler}name="name"  defaultValue={userData.Name}/>
                       </label>  
                       <br/> 
                    <label>
                        Favorite<br/>
                    <input  type="text" className="form-control" onChange={this.editOnchangeHandler} name="favoriate" defaultValue={userData.Favorite}/>
                    </label>
                    <br/>
                    <label>
                     Type <br/>
                   <input   type="text" className="form-control"  onChange={this.editOnchangeHandler} name="type" defaultValue={userData.Type}/>
                   </label>
                   <br/> 
                    <button className="btn btn-warning" onClick={(event)=>this.editSubmitHandler(event,userData._id)}>Edit</button>
                    <button className="btn btn-danger" onClick={(event)=>this.deleteHandler(event,userData._id)}>Delete</button>
                    </div>
                    </div>
                ))}
               </div> 
          </form>
          )
          }        
        
    }

    //  onChange the data 
    editOnchangeHandler = (event) =>{
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //  submiting the edited data
    editSubmitHandler = (event,id)=>{
        event.preventDefault();
        let  axiosDataupdate = {
            Name:this.state.name,
            Type:this.state.type,
            Favorite:this.state.favoriate
        }
        console.log(axiosDataupdate);
        console.log('http://localhost:8080/user/'+id)
        axios.put("http://localhost:8080/user/"+id, axiosDataupdate).then(data=>{
            console.log("we are seeing the data",data)
            console.log("sucess")
        }) 
        
    }
    // these method is used for deleting the data 
    deleteHandler = (event,id) =>{
        event.preventDefault();
        //  copying into new element 
        var a = this.state.userData
        //  checking a
        console.log("[we are seeing a]",a);
        // checking the value
        console.log("we are seeing the id",id)
        // console.log(a.filter(value=>console.log(value)))
        let tempArray = [];
         tempArray = a.filter((value,id)=> value['_id']!=  id)
        console.log(tempArray)
        this.setState({
            userData:tempArray
        },()=>{console.log('Data deleted');})

        axios.delete("http://localhost:8080/user/"+id).then(()=>{
            console.log("succesfully deleted data")
        }).catch(err =>{
            console.log(err)
        })

    }


    render() {
        return (
            <div>
                {this.methodForAdding()}
                 {this.methodForDisplaying()} 
            </div>
        )
    }
}


export default User;