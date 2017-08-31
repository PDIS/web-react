import React from 'react';
import ReactDOM from 'react-dom';
import './Member.css'
/* import '../styles/template/animate.css'
import '../styles/template/icomoon.css'
import '../styles/template/bootstrap.css'
import '../styles/template/superfish.css'
import '../styles/template/style.css' */


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
      this.setState({ members: people })
    }
    catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      /* <div className="wrapper row2">
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
     </div>  */
      <div id="fh5co-work-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
              <h3>Outstanding Projects</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="fh5co-grid animate-box" style={{'backgroundImage': 'url(images/work-1.jpg)'}}>
                <a className="image-popup text-center" href="#">
                  <div className="prod-title">
                    <h3>Don’t Just Stand There</h3>
                    <span>Illustration, Print</span>
                  </div>
                </a>
              </div>
            </div>
         {/*    <div className="col-md-4">
              <div className="fh5co-grid animate-box" style="background-image: url(images/work-2.jpg);">
                <a className="image-popup text-center" href="#">
                  <div className="prod-title">
                    <h3>Don’t Just Stand There</h3>
                    <span>Illustration, Print</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fh5co-grid animate-box" style="background-image: url(images/work-3.jpg);">
                <a className="image-popup text-center" href="#">
                  <div className="prod-title">
                    <h3>Don’t Just Stand There</h3>
                    <span>Illustration, Print</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fh5co-grid animate-box" style="background-image: url(images/work-4.jpg);">
                <a className="image-popup text-center" href="#">
                  <div className="prod-title">
                    <h3>Don’t Just Stand There</h3>
                    <span>Illustration, Print</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fh5co-grid animate-box" style="background-image: url(images/work-5.jpg);">
                <a className="image-popup text-center" href="#">
                  <div className="prod-title">
                    <h3>Don’t Just Stand There</h3>
                    <span>Illustration, Print</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fh5co-grid animate-box" style="background-image: url(images/work-6.jpg);">
                <a className="image-popup text-center" href="#">
                  <div className="prod-title">
                    <h3>Don’t Just Stand There</h3>
                    <span>Illustration, Print</span>
                  </div>
                </a>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    );
  }
}

export default Members;