import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers, deleteUser} from '../store/actions/usersActions'


function dataForm(params) {
    return <div>
        <input></input>
    </div>
}


 class users extends Component {
    componentDidMount(){
        this.props.getUsers();
    }
    
    componentDidUpdate(){
        this.props.getUsers();
    }

    oncreateSubject(id){
        
        this.props.deleteUser(id);
    }

    render() {
        const {users} = this.props.users
        console.log(users)
        
        return (
            <div>
                {users.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.firstName} {u.lastName}</h6> 
                     <button onClick={()=>this.dataForm(u.id)}>-</button>
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users});

export default connect(mapStateToProps, {getUsers, deleteUser})(users);