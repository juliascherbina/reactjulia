import React from 'react';

class ProfileStatus extends React.Component {
 
    state = {
        editMode: false,
       status: this.props.status
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.UpdateStatus(this.state.status);
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        
    }
    OnStatusChange=(e)=>{
          this.setState({
              status:e.currentTarget.value 
          });
    }
    componentDidUpdate(prevProps, prevState) {
      if(prevProps.status != this.props.status){
          this.setState({
              status: this.props.status
          });
      }
console.log('componentdidupdate')
    }
    render() {
        console.log('render')
        return <div>
            {this.state.editMode ?
                <div>
                    <input  onChange={this.OnStatusChange} autoFocus={true } onBlur={this.deActivateEditMode} value={this.state.status}></input>
                </div>
                : <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "-"}</span>
                </div>}



        </div>
    }
}
export default ProfileStatus;