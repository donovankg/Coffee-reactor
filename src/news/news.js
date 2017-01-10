import React, { Component } from 'react';
import NewsListItem from './newslist';

class News extends Component {
  constructor(props){
    super(props);
    this.onNewsSelect = this.onNewsSelect.bind(this);
    this.state = {news: [], image: '', description: ''};
  }
  componentDidMount(){
    this.NewsList();
  }
  onNewsSelect(name){
    this.setState({image: name.urlToImage, description: name.description});
  }
  NewsList(){
    return fetch("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=39a06ecd5fba4f7ebe995729e8d95c15")
      .then((response)=> response.json())
      .then((responseJson) =>{
        // console.log(responseJson)
        this.setState({news: responseJson.articles, image: responseJson.articles[0].urlToImage, description: responseJson.articles[0].description});
      });
  };
  render(){
    const newss = this.state.news.map((item) =>{
      return (
            <NewsListItem onNewsSelect={this.onNewsSelect} item={item} />
          );
    });

    return (
          <div id="layout-content" className="lauout-content-wrapper">
            <div className="row">
              <div className="col-md-3">
                <h1>Breaking News</h1>
                <ul className="panel-list">{ newss }</ul>
              </div>
              <div className="col-md-6">
                  <img src={this.state.image} role="presentation"/>
                  <h5>{this.state.description}</h5>
              </div>
            </div>
          </div>
    );

  };
}
export default News;
