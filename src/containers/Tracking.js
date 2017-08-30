import React from 'react';
import ReactDOM from 'react-dom';
// import '../styles/layout.css';

class Tracking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      tags: [],
      q: '',
      more_url: '',
      autoLoad: true,
    };
  }

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

    }
    catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
      {console.log(this.state.tags)}
      </div>
    );
  }
}

export default Tracking;