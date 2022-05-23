import React, { useEffect, useState } from 'react';





const ProfileStatusWithHooks = (props) => {
    // let stateWithSetState= useState(true);
    let [EditMode, SetEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    // let EditMode=stateWithSetState[0]
    // let SetEditMode=stateWithSetState[1]
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status] )
    const activateEditMode = () => {
        SetEditMode(true)
    }
    const DeactivateEditMode = () => {
        SetEditMode(false)
        props.UpdateStatus(status)
    }
    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return <div>
        {EditMode &&
            <div>
                <input onChange={OnStatusChange} autoFocus={true} onBlur={DeactivateEditMode} value={status}></input>
            </div>
        }
        {!EditMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-"} </span>
            </div>}



    </div>

}
export default ProfileStatusWithHooks;