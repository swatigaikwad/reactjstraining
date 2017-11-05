import React, { Component } from 'react';

export default class  extends Component {
    render() {
        const userData = this.props.userData;
        return (
            <div>
                <img src={userData.avatar_url} />
                <span> {userData.name} </span>
            </div>
        );
    }
}