import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    render() {
        return <div>
            {this.state.editMode ?
                <div>
                    <input autoFocus={true } onBlur={this.deActivateEditMode} value={this.props.status}></input>
                </div>
                : <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>}



        </div>
    }
}
export default ProfileStatus;