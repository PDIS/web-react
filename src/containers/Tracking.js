import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
// import '../styles/layout.css';
=======
import * as YAML from 'yamljs';
import '../styles/layout.css';
import $ from 'jquery';
>>>>>>> a3da9241dcff71354d46c4c712be65782bed53c6

class Tracking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      tags: [],
      total: [],
      q: '',
      more_url: '',
      autoLoad: true,
    };
  }

<<<<<<< HEAD
=======
  async getCategories() { //取得分類(置頂文章)
    let catdata = await fetch("https://talk.pdis.nat.gov.tw/t/how-we-work-track/73.json?include_raw=1");
    let cats = await catdata.json();
    let raw = cats['post_stream']['posts'][0]['raw'];
    let categories = YAML.parse(raw);
    return categories;
  }

  async goAnchor(anchor) {
    // console.log(anchor)
    if (anchor == "top") {
      /* go to top */
      $('html, body').animate({
        scrollTop: 0,
      }, 300)
    }
    else if (anchor) {
      /* get the top position of anchor */
      let anchor_y = $(anchor).offset().top
      /* go to anchor (animation to do) */
      $('html, body').animate({
        scrollTop: anchor_y,
      }, 300)
    }
    return false
  }

>>>>>>> a3da9241dcff71354d46c4c712be65782bed53c6
  async componentDidMount() {
    try {
      let tagdata = await fetch("https://talk.pdis.nat.gov.tw/tags/filter/search.json");
      let data = await tagdata.json();
      let tags = [];
      let discourseTags = data['results'];
      for (var i in discourseTags) {
        if (discourseTags[i]['text'] === '尚未回覆') { continue; }
        if (/^(.+)-/.test(discourseTags[i]['text'])) { continue; }
        let tag = {};
        tag['text'] = discourseTags[i]['text'];
        tag['weight'] = discourseTags[i]['count'];
        tag['link'] = "/how-we-work/tracks?q=" + discourseTags[i]['text'];
        tags.push(tag);
      }
      this.setState({ tags: tags })
      /* init categories tab header */
<<<<<<< HEAD

=======
      let Cats = await this.getCategories();
      if (this.state.total.length > 0) return
      this.state.total.push({ category: 'All', posts: new Array() })
      Object.keys(Cats).forEach(key => this.state.total.push({ category: key, posts: new Array() }))
      this.state.total.push({ category: 'Other', posts: new Array() })
      /* Tag Query & Timeline */
      let categories = Cats;
      let url = this.props.location.search;
      if (url != '') {
        let urlparams = url.replace('?q=', '');
        this.setState({ q: urlparams });
      }
      else {
        this.setState({ q: '' });
      }
      if (this.state.q) {
        //this.goAnchor('#cloud');
      }
      this.total.forEach(t => t.posts = []);
>>>>>>> a3da9241dcff71354d46c4c712be65782bed53c6
    }
    catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Tracking;