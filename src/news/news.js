import React, { Component } from 'react';


// const API_KEY ='39a06ecd5fba4f7ebe995729e8d95c15';

class News extends Component {
  constructor(props){
    super(props);

    this.state = {news: []};
  }

  componentDidMount(){
    this.NewsList();
  }

  NewsList(){
    return fetch("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=39a06ecd5fba4f7ebe995729e8d95c15")
      .then((response)=> response.json())
      .then((responseJson) =>{
        console.log(responseJson.articles);
        this.setState({news: responseJson.articles});
      });
  };
  render(){
    const newss = this.state.news.map((item, i) =>{
      return <div>
              <h1>{item.title}</h1>
              <span>{item.author}</span><br /><span>{item.description}</span><br />
              <span>{item.url}</span><br />
              <span><img src ={item.urlToImage} /></span><br />
              <span>{item.publishedAt}</span>
              </div>
    });

    return (
          <div id="layout-content" className="lauout-content-wrapper">
            <div className="panel-list">{ newss }</div>
          </div>
    );

  };
}

export default News;
