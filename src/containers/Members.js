import React from 'react';
import ReactDOM from 'react-dom';
import './Member.css'

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: []
    };
  }

  async componentDidMount() {
    try {
      let groups = await fetch('https://talk.pdis.nat.gov.tw/groups/PDIS/members.json?limit=100000')
      let group = await groups.json();
      let people = [];
      for (let i of group.members) {
        let members = await fetch("https://talk.pdis.nat.gov.tw/u/" + i.username + ".json")
        let member = await members.json()
        let user = member.user
        let person = {};
        person['id'] = user.id;
        if (user.name == '') {
          person['name'] = user.username;
        } else {
          person['name'] = user.name;
        }
        person['username'] = user.username;
        person['image'] = 'https://talk.pdis.nat.gov.tw/' + user
          .avatar_template
          .replace("{size}", "800");
        person['wiselikelink'] = "https://wiselike.tw/#/user/" + user.username;
        let infos = await fetch("https://talk.pdis.nat.gov.tw/c/wiselike/profile-" + user.username.toString().toLowerCase().replace(/_/g, '-') + ".json")
        let info = await infos.json()
        let topic = info.topic_list.topics[0];
        var content = topic
          .excerpt
          .replace(" :new:", "");
        if (content.includes("建立一個完整的")) {
          person['description'] = "";
        } else {
          person['description'] = content;
        }
        people.push(person);
        this.setState({members: people})
      }
      //console.log(member)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div id="fh5co-work-section">
        <div className="container">
          <div className="row">
            <div
              className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>對我們有什麼疑問嗎？歡迎點一下大頭照到wiselike問我們問題唷！</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this
              .state
              .members
              .map((member) => (
                <div className="col-md-4" key={member.id}>
                  <div
                    className="fh5co-grid animate-box"
                    style={{
                    'backgroundImage': 'url(' + member.image + ')'
                  }}>
                    <a className="image-popup text-center" href={member.wiselikelink}>
                      <div className="prod-title">
                        <h3>{member.name}</h3>
                        <br/>
                        <span>{member.description}</span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Members;