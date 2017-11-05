import React, { Component } from 'react';
import Hobbies from './components/Hobbies';
import Greeting from './components/Greeting';
import Time from './components/Time';
import GitHubProfile from './components/GitHubProfile';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'octocat'
        };
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.textInput.focus();
    }

    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    async search(e){
      const data = await fetch(`https://api.github.com/users/${this.state.username}`)
                          .then((r) => {
                            return r.json()
                          });        
      this.setState({
        gitHubData: data
      });
    }

    render() {
        const children = this.props.children;
        const hobbies = this.props.user.hobbies;
        const username = this.state.username;
        return (
            <div>
                <h1 className="main-heading">
                    <Greeting name={this.props.user.name}/>
                    <Time />
                </h1>
                <div>{this.props.children}</div>
                <input 
                    type="text" 
                    placeholder="username"                     
                    defaultValue={this.state.username}
                    onChange={this.handleChange} 
                ref={(input) => { this.textInput = input; }}/>
                <button onClick={this.search}>Search Username</button>
                  {
                    this.state.gitHubData && <GitHubProfile userData={this.state.gitHubData} />
                  }
                <Hobbies hobbies={hobbies}/>
            </div>
        );
    }
}

export default Application; 