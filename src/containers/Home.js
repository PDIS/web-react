import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  Members() {
    return axios.get(`https://talk.pdis.nat.gov.tw/groups/PDIS/members.json?limit=100000`)
      .then(res => {
        //const posts = res.data.data.children.map(obj => obj.data);
        const posts = res.data.members;
        console.log(posts)
        this.setState({ posts });
      });
  }

  componentDidMount() {
   this.Members()
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Home;