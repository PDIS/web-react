import React from 'react';
import ReactDOM from 'react-dom';
import * as YAML from 'yamljs';
import $ from 'jquery';

class Tracking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: [],
      tags: [],
      total: [],
      q: '',
      more_url: '',
      autoLoad: true
    };
  }

  async getCategories() { //取得分類(置頂文章)
    let catdata = await fetch("https://talk.pdis.nat.gov.tw/t/how-we-work-track/73.json?include_raw=1");
    let cats = await catdata.json();
    let raw = cats['post_stream']['posts'][0]['raw'];
    let categories = YAML.parse(raw);
    return categories;
  }
  async getIds(q, more_url) { //取得討論區每篇文的ID & more_url
    /* fetch date base on if 'q' & 'more_url' exist */
    /*
        https://talk.pdis.nat.gov.tw/c/pdis-site/how-we-work-track
        /c/pdis-site/how-we-work-track/l/latest?page=1
        https://talk.pdis.nat.gov.tw/tags/c/pdis-site/how-we-work-track/TAG
        /tags/c/pdis-site/how-we-work-track/TAG/l/latest?page=1
    */
    let query
    if (q) {
      if (more_url) {
        query = Discourselink.Host + more_url.replace(/latest/, 'latest.json')
      } else {
        query = Discourselink.Host + Discourselink.Tags + Discourselink.Category + Discourselink.HOWWEWORKTRACK + '/' + q + Discourselink.Filename
      }
    } else {
      if (more_url) {
        query = Discourselink.Host + more_url.replace(/latest/, 'latest.json')
      } else {
        query = Discourselink.Host + Discourselink.Category + Discourselink.HOWWEWORKTRACK + Discourselink.Filename
      }
    }

    return this
      .http
      .get(query)
      /* to get more_url */
      .do 
        (data => this.more_url = data.json().topic_list.more_topics_url || '')
        /* to get ids */
          .map(data => data.json().topic_list.topics.map(topic => topic['id']))
      }
      async goAnchor(anchor) {
        // console.log(anchor)
        if (anchor == "top") {
          /* go to top */
          $('html, body').animate({
            scrollTop: 0
          }, 300)
        } else if (anchor) {
          /* get the top position of anchor */
          let anchor_y = $(anchor)
            .offset()
            .top
          /* go to anchor (animation to do) */
          $('html, body').animate({
            scrollTop: anchor_y
          }, 300)
        }
        return false
      }

      async componentDidMount() {
        try {
          let tagdata = await fetch("https://talk.pdis.nat.gov.tw/tags/filter/search.json");
          let data = await tagdata.json();
          let tags = [];
          let discourseTags = data['results'];
          for (var i in discourseTags) {
            if (discourseTags[i]['text'] === '尚未回覆') {
              continue;
            }
            if (/^(.+)-/.test(discourseTags[i]['text'])) {
              continue;
            }
            let tag = {};
            tag['text'] = discourseTags[i]['text'];
            tag['weight'] = discourseTags[i]['count'];
            tag['link'] = "/how-we-work/tracks?q=" + discourseTags[i]['text'];
            tags.push(tag);
          }
          this.setState({tags: tags})
          /* init categories tab header */
          let Cats = await this.getCategories();
          if (this.state.total.length > 0) 
            return
          this
            .state
            .total
            .push({category: 'All', posts: new Array()})
          Object
            .keys(Cats)
            .forEach(key => this.state.total.push({category: key, posts: new Array()}))
          this
            .state
            .total
            .push({category: 'Other', posts: new Array()})
          /* Tag Query & Timeline */
          let categories = Cats;
          let url = this.props.location.search;
          if (url != '') {
            let urlparams = url.replace('?q=', '');
            this.setState({q: urlparams});
          } else {
            this.setState({q: ''});
          }
          if (this.state.q) {
            //this.goAnchor('#cloud');
          }
          this
            .state
            .total
            .forEach(t => t.posts = []);
        } catch (e) {
          console.log(e)
        }
      }

      render() {
        return (
          <div>
            <ul className="cloud" id="cloud">
              {this
                .state
                .tags
                .map(t => (
                  <li key={t.text} className='cloud-item'>
                    <a href={t.link} data-weight={t.weight}>
                      {t.text}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        );
      }
  }

  export default Tracking;