import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    // method causes side-effects (ie. fetching data), but not for 
    // updating state, since it triggers a re-render.
    componentDidMount() {
        // cannot store return value of async call in a variable because 
        // JS executes code in a synchronous manner.
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // fetch all posts but only store 4 posts in constant
                const posts = response.data.slice(0, 4)
                // return a new JS object where the property of the post is
                // distributed, and add an "author" property to "Max"
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                console.log(updatedPosts)
                this.setState({posts: updatedPosts})
            })
            .catch(error => [
                // console.log(error)
                this.setState({error: true})
            ])
    }

    postSelectedHandler = id => { 
        this.setState({selectedPostId: id})
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            // map each post into an array of JSX elements and store in posts
            posts = this.state.posts.map(post => {
                return (
                    <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author} 
                        clicked={this.postSelectedHandler.bind(this, post.id)}
                        // alternate method
                        // clicked={() => (this.postSelectedHandler(post.id))}
                    />
                )
            })
        }

        console.log("posts", posts)
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;