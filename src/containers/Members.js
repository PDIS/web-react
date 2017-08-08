import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    try {
      let groups = await fetch('https://talk.pdis.nat.gov.tw/groups/PDIS/members.json?limit=100000')
      let group = await groups.json();
      for (let i of group.members) {
        let members = await fetch("https://talk.pdis.nat.gov.tw/u/" + i.username + ".json")
        let member = await members.json()
        let user = member.user
        let people = {};
        people['id'] = user.id;
        if (user.name == '') {
          people['name'] = user.username;
        }
        else {
          people['name'] = user.name;
        }
        people['username'] = user.username;
        people['image'] = 'https://talk.pdis.nat.gov.tw/' + user.avatar_template.replace("{size}", "800");
        people['wiselikelink'] = "https://wiselike.tw/#/user/" + user.username;
        let infos = await fetch("https://talk.pdis.nat.gov.tw/c/wiselike/profile-" + user.username.toString().toLowerCase().replace(/_/g, '-') + ".json")
        let info = await infos.json()
        let topic = info.topic_list.topics[0];
        var content = topic.excerpt.replace(" :new:", "");
        if (content.includes("建立一個完整的")) {
          people['description'] = "";
        }
        else {
          people['description'] = content;
        }
        console.log(people)
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.user.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Home;