import React from 'react'

export default function UserForm(props) {
    return (
        <div>
             <form className="container" onSubmit={props.submit}>
                <div className="card form-group">
                
                <label>
                NAME 
                <input type="text"  name="name"  className="form-control" value={props.name} onChange={(event)=>props.changed(event)}/>
                </label>
                <br/>
                <label>
                    Type
                    <select value={props.type} onChange={props.changed} className="form-control" name="type" onChange={(event)=>props.changed(event)}>
                        <option value="Movie">Movie</option>
                        <option value="Food">Food</option>
                    </select>    
                </label>
                <br/>
                <label>
                    Favorite
                <input type="text"  name="favoriate" value={props.favoriate} className="form-control"  onChange={(event)=>props.changed(event)}/>
                </label>
                <br/>
                <button type="button" className="btn btn-primary" onClick={props.submit}>ADD</button>
                </div>
            </form>
            
        </div>
    )
}

