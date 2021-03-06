import React from 'react'

class ProfileStatus extends React.Component {


    state = {
        status: this.props.status,
        editMode: false,

    }



    activateEditMode(){
        console.log(this.state);
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode(){
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.state.status = this.props.status;
        }

    }

    render() {
        console.log()
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={() => {this.activateEditMode()}}>
                       {this.props.status}
                    </span>
                </div>
            }

            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={() => { this.deactivateEditMode()}} value={this.state.status}/>
                </div>
            }
        </div>

    };


}

export default ProfileStatus