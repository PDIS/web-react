import React from 'react';
import ReactDOM from 'react-dom';

class Tools extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tools: [],
            tools_list: {},
            tools_detail_list: []
        };
    }
    async componentDidMount() {
        try {
            // how-we-work-tools = 54 fetch the title & thumb of tools
            let data54 = await fetch('https://talk.pdis.nat.gov.tw/t/54.json');
            let tool_list = await data54.json();
            this.setState({tools_list: tool_list})
            let data208 = await fetch('https://talk.pdis.nat.gov.tw/t/208.json');
            let jsdata = await data208.json();
            jsdata['post_stream']['posts'].forEach(data => {
                let post = {};
                let dom = (new DOMParser()).parseFromString(data["cooked"], "text/html");

                post['title'] = (dom.querySelector("h1,h2,h3,h4,h5,h6")).innerText;

                let imgs = dom.querySelectorAll("img");
                post['img'] = imgs && (imgs[imgs.length - 1].src || imgs[imgs.length - 1].getAttribute("src")) || "http://lorempixel.com/g/600/400/nature";

                post['text'] = dom
                    .querySelector("p")
                    .innerHTML;

                post['link'] = dom.querySelector("aside header a") && (dom.querySelector("aside header a")).outerHTML;

                let ytdata;
                // if lazyYT exist, then return its converted iframe
                post['yt'] = dom.querySelector(".lazyYT") && (ytdata = (dom.querySelector(".lazyYT")).dataset) 
               

                this
                    .state.tools_detail_list
                    .push(post);
            });
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Tools;