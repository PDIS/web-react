import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/layout.css';

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
              <div className="container g-margin-b-100--xs">
          <div id="js__grid-portfolio-gallery" className="cbp">
            <div className="s-portfolio__item cbp-item logos motion">
              <div className="s-portfolio__img-effect">
                <img src="img/970x647/05.jpg" alt="Portfolio Image" />
              </div>
              <div className="s-portfolio__caption-hover--cc">
                <div className="g-margin-b-25--xs">
                  <h4 className="g-font-size-18--xs g-color--white g-margin-b-5--xs">Portfolio Item</h4>
                  <p className="g-color--white-opacity">by KeenThemes Inc.</p>
                </div>
                <ul className="list-inline g-ul-li-lr-5--xs g-margin-b-0--xs">
                  <li>
                    <a href="img/970x647/05.jpg" className="cbp-lightbox s-icon s-icon--sm s-icon--white-bg g-radius--circle" data-title="Portfolio Item <br/> by KeenThemes Inc.">
                      <i className="ti-fullscreen"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" className="s-icon s-icon--sm s-icon s-icon--white-bg g-radius--circle">
                      <i className="ti-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Members;