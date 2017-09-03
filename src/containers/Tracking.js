import React from 'react';
import ReactDOM from 'react-dom';
import * as YAML from 'yamljs';
import $ from 'jquery';
import './Tracking.css';

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
        query = "https://talk.pdis.nat.gov.tw/" + more_url.replace(/latest/, 'latest.json');
      } else {
        query = "https://talk.pdis.nat.gov.tw/tags/c/pdis-site/how-we-work-track/" + q + ".json";
      }
    } else {
      if (more_url) {
        query = "https://talk.pdis.nat.gov.tw/" + more_url.replace(/latest/, 'latest.json');
      } else {
        query = "https://talk.pdis.nat.gov.tw/c/pdis-site/how-we-work-track.json";
      }
    }

    let moredata = await fetch(query);
    let data = await moredata.json()
    this.more_url = await data.topic_list.more_topics_url || ''
    let topics = await data
      .topic_list
      .topics
      .map(topic => topic['id']);
    return topics;
  }
  async getPost(id) { // 取得單篇PO文
    let postdata = await fetch('https://talk.pdis.nat.gov.tw/t/' + id + ".json?include_raw=1")
    let data = await postdata.json();
    let post = {};
    post['id'] = data['id']
    post['title'] = data['title'];
    post['date'] = data['created_at'];
    post['tags'] = data['tags'];
    // post['content'] = data['post_stream']['posts'][0]['raw'];
    let raw = data['post_stream']['posts'][0]['raw'];
    post['content'] = YAML.parse(raw)['content']
    return post;
  }
  async categorizePost(post, categories) { //將每篇PO文與各分類中的關鍵字比對
    // categories = {conference:['xx','oo'], ...} post = {title:'xxxoo'}
    /* set default */
    post['category'] = 'Other';
    Object
      .keys(categories)
      .forEach(key => {
        for (var i = 0; i < categories[key].length; i++) {
          if (post['title'].indexOf(categories[key][i]) > -1) {
            post['category'] = key;
            return post;
          }
        }
      })
    return post;
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
      let ids = await this.getIds(this.state.q, '');
      /* ids = ids.map(id => (this.state.q)
        ? id
        : id.toString().slice(1)); */
      for (let id of ids) {
        let post = await this.getPost(id);
        post = await this.categorizePost(post, categories)
        this
          .state
          .total[0]['posts']
          .push(post);
        /* put in respective category */
        let cat_list = this
          .state
          .total
          .map(cat => cat['category'])
        let cat_index = cat_list.indexOf(post['category'])
        this
          .state
          .total[cat_index]['posts']
          .push(post)
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <div className="tagcloud03">
          <ul>
            {this
              .state
              .tags
              .map(t => (
                <li key={t.text}>
                  <a href={t.link}>{t.text}
                    <span>{t.weight}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/*  <div class="card">

            <ul class="nav nav-tabs" role="tablist">
              <li *ngFor="let object of total" role="presentation" [ngClass]="{'active':(object.category ==='All')}">
                <a href="#{{object.category}}" [attr.aria-controls]="object.category" role="tab" data-toggle="tab" [ngClass]="object.category">{{object.category}} ({{object.posts.length}})</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              <div *ngFor="let object of total" role="tabpanel" class="tab-pane fade" [ngClass]="{'in active':(object.category ==='All')}" id="{{object.category}}">

                <ul class="timeline">
                    <li *ngFor="let post of object.posts; let i = index" [id]='post.id' class="animated fadeInUp" [ngClass]="{'timeline-inverted':(i%2!==0)}">
                      <div class="timeline-badge" [ngClass]="post.category"></div>
                      <div class="timeline-panel">
                        <div class="timeline-heading">
                          <div class='date'> {{post.date | datePipe:"yyyy/MM/dd"}} </div>
                          <div>
                            <h4 class="title"> {{post.title}} </h4>
                            <a [routerLink]="['/how-we-work/tracks']" [queryParams]="{q: tag}" class="tag" *ngFor="let tag of post.tags">{{tag}}</a>
                          </div>
                        </div>
                        <div class="timeline-body">
                          <p>
                            <a *ngFor="let media of post.content | JSONpipes:'not null object of array'" target="_blank" href="{{media | JSONpipes:'values'}}" class="btn-{{media | JSONpipes:'keys' | lowercase}} btn-pdis" role="button">{{media | JSONpipes:'keys'}}</a>
                          </p>
                        </div>
                        <div class="timeline-footer">
                          <!-- <a [routerLink]="['/how-we-work/tracks']" [fragment]="post.id"> -->
                            #{{ post.id }} &nbsp;
                          <!-- </a> -->
                        </div>
                      </div>
                    </li>
                    <li class="clearfix no-float"></li>
                </ul>

              </div>
            </div>

            <p class="text-center" *ngIf='more_url'>
              <a role="button" title='Read more' class="more" href="#" (click)="getMorePosts(q, more_url); false">
                <i class="fa fa-chevron-down"></i>
              </a>
            </p>

            </div>*/}
      </div>
    );
  }
}

export default Tracking;