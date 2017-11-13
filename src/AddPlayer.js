import React from 'react';

class AddPlayer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: " "
        }

        this.onPlayerChange = this.onPlayerChange.bind(this)
        this.onAddPlayer = this.onAddPlayer.bind(this)
    }

    onPlayerChange(event){
        this.setState({
            name: event.target.value
        })
    }

    onAddPlayer(event){
        this.props.onAdd(this.state.name)
        this.setState({
            name: ""
        })
    }

    render(){

        const styles = {
            container: {
                padding: 100
            },
            input: {
                flex: 1,
                paddingRight: 20,
                width: "45%",
                height: 20
            },
            button: {
                float: "right",
                marginRight: 80,
                width: 120,
                padding: 10
            }
        }

        return (
            <div style={styles.container}>
                <input style={styles.input} onChange={this.onPlayerChange} type="text" placeholder="Put your favorite developer name here..." value={this.state.name}/>
                <button style={styles.button} onClick={this.onAddPlayer}>Add Player</button>
            </div>
        )
    }
}

export default AddPlayer