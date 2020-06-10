import React,{Component} from'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import ErrorBoundary from'./ErrorBoundary';
class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filterrobo = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length===0)
        {
            return <h1>Loading..</h1>
        }
        else{
    return(
        <div className='tc'>
        <h1 >RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <ErrorBoundary>
        <Cardlist robots={filterrobo} />
        </ErrorBoundary>
        </div>
    )
    }}
}

export default App;