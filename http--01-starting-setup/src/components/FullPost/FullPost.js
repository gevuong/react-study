import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    // method causes side-effects (ie. fetching data), and triggers a re-render.
    // method triggers immediately after updating occurs (ie. when 
    // selected post id changes)
    componentDidUpdate() {
        // make sure post is selected (or id is not null)
        if (this.props.id) {
            // to prevent an infinite loop caused by setState,
            // fetch data if loadedPost is null, OR, if loadedPost exists 
            // and the current and previous post id's do not match
            if (!this.state.loadedPost || (this.state.loadedPost && this.props.id !== this.state.loadedPost.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => {
                        // setState will update component, triggering a re-render
                        this.setState({loadedPost: response.data})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }

    deletePostHandler = id => {
        axios.delete('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log(response)
            })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>
        // if post has been selected, first render loading text
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>
        }
        // if post has been fetched, then render post content
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button 
                            className="Delete"
                            onClick={() => this.deletePostHandler(this.state.loadedPost.id)}>Delete
                        </button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;