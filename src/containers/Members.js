import React from 'react';
import ReactDOM from 'react-dom';
// import '../styles/layout.css';

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
        }
        else {
          person['name'] = user.name;
        }
        person['username'] = user.username;
        person['image'] = 'https://talk.pdis.nat.gov.tw/' + user.avatar_template.replace("{size}", "800");
        person['wiselikelink'] = "https://wiselike.tw/#/user/" + user.username;
        let infos = await fetch("https://talk.pdis.nat.gov.tw/c/wiselike/profile-" + user.username.toString().toLowerCase().replace(/_/g, '-') + ".json")
        let info = await infos.json()
        let topic = info.topic_list.topics[0];
        var content = topic.excerpt.replace(" :new:", "");
        if (content.includes("建立一個完整的")) {
          person['description'] = "";
        }
        else {
          person['description'] = content;
        }
        people.push(person);
      }
      //console.log(member)
      this.setState({members:people})
    }
    catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
       <div className="wrapper row2">
        <section className="hoc container clear">
          <div className="sectiontitle">
            <h6 className="heading">Members</h6>
          </div>
          <div className="group">
          {this.state.members.map((member) => (
            <div key={member.id} className="one_third"><a className="imgover" href="#"><img src={member.image} alt="" /></a></div>
          ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Members;