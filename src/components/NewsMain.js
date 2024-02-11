import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class NewsMain extends Component {


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      category:this.props.category,
      totalResults:0,
      customTitle :`${(this.props.category === "general")? "Home":(this.props.category).at(0).toUpperCase()+(this.props.category).slice(1,this.props.category.length)}`

    };
    document.title=`NewsMate - ${this.state.customTitle}`;
  }
//  wrl=`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=0bd10ca912404759b347cce9ed6ae373&page=1&pageSize=24`

  fetchData = async (wrl)=>{
    let url = wrl
    this.setState({ dataLoading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      dataLoading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    let url0 = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0bd10ca912404759b347cce9ed6ae373&page=${this.state.page}&pageSize=24`
    this.fetchData(url0)
  }

  handleNextPage = async () => {
    let url1 = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0bd10ca912404759b347cce9ed6ae373&page=${this.state.page + 1}&pageSize=24`;
   this.fetchData(url1);
    this.setState({
      page: this.state.page + 1,
    });
  };

  handlePreviousPage = async () => {
    let url2 = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0bd10ca912404759b347cce9ed6ae373&page=${this.state.page - 1}&pageSize=24`;
    this.fetchData(url2);
    this.setState({
      page: this.state.page - 1,
    });
  };


  render() {

    return (
      <>
        <div className=" container mt-5">
          <h1 className="mb-4">Top-Headlines- {this.state.customTitle}</h1>

{(this.state.dataLoading) &&
<div className="d-flex align-items-center">
<strong role="status">Loading...</strong>
<div className="spinner-border ms-auto" aria-hidden="true"></div>
</div>
}

     { !(this.state.dataLoading) &&
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4 mt-4">
                    <NewsItem
                      url={element.url}
                      imageUrl={element.urlToImage}
                      title={element.title}
                      description={element.description}
                      author={(element.author)? element.author:"Unknown"}
                      publishedAt={element.publishedAt}
                      source={element.source.name}
                    ></NewsItem>
                  </div>
                );
              })}
            </div>

  }
            </div>
  
            <div className=" container d-flex justify-content-between my-5 ">
              <button disabled={(this.state.page===1)} onClick={this.handlePreviousPage} className="btn " style={{backgroundColor:"#f7d31b", color:"black"}}>Previous</button>
              <button disabled={Math.ceil(this.state.totalResults/24)===this.state.page} onClick={this.handleNextPage} className="btn"style={{backgroundColor:"#f7d31b", color:"black"}} >Next</button>
            </div>
      </>
    );
  }
}
