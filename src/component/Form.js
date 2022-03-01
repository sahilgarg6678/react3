import React from 'react';
import './Form.css';


export class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:"",
            dprt:"",
            rating:"",
            user:[],
           showdata:true,
           heading:'Employee FeedBack Form'
        }
    }
    manageChange=(e)=>
  {
     this.setState({
         [e.target.name]:e.target.value
     })
  }
  handle=(e)=>
  {
      e.preventDefault();
     console.log(this.state);
      const{name,dprt,rating}=this.state;
      if(name && dprt && rating)
      {
      const obj={
          id:new Date().getTime().toString(),
          name:name,
          dprt:dprt,
          rating:rating
      }
      const tempArr=this.state.user;
      tempArr.push(obj);
      this.setState({
          user:tempArr
      })
    }
    else
    alert("Field is required");
    this.setState({showdata:false,heading:'Employee FeedBack Data'})
     
  }
   clickk=()=>{
       this.setState({
           showdata:true,
           heading:'Employee FeedBack Form'

       })
   }
    
    render()
    {
        return(
            <div>
            {
                this.state.showdata?
                
                <div>
                <h1 className='head'>{this.state.heading}</h1>
                  <form onSubmit={this.handle}>
                  <div className='mainDiv'>
                  <div className='first'>
                  <label for='n'>Name</label>
                  <input type="text" id='n' name="name" onChange={this.manageChange}></input>
                  </div>
                  <div className='first'>
                  <label for='d'>Department</label>
                  <input type="text"id='d' name="dprt" onChange={this.manageChange}></input>
                  </div>
                  <div className='first'>
                  <label for='r'>Rating</label>
                  <input type="text" id='r' name="rating" onChange={this.manageChange}></input>
                  </div>
                  <div>
                  <button className='btn'>Submit</button>
                  </div>
                  </div>
              </form>
              </div>
                :
                <div>
                <h1 className='head'>{this.state.heading}</h1>
                <div className='btmDiv'>
                
                <div className='second'>
                {
                  this.state.user.map((currentElement)=>{
                      const{id,name,dprt,rating}=currentElement;
                     
                     
                      return(
                          <div key={(id)} className='eachDiv'>
                          Name:{name}&nbsp; | &nbsp;
                            Department:{dprt}&nbsp; | &nbsp;
                            Rating:{rating}
                          </div>
                      )
                  })
                }
                </div>

                  
                <div className='buttonDiv'>
                <button onClick={this.clickk} className='btn'> Go Back</button>
                </div>

            </div>
            </div>
            
            }
            </div>
            )
            
            
    }
}