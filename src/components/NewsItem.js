import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { imageUrl, title, description, url, author, publishedAt, source } = this.props;
    return (
      <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left: "75%"}}>
    {source}
  </span>
        <img
          src={
            !imageUrl
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        
          <p className="card-text"> {description} </p>
        </div>
        <ul className="list-group list-group-flush mute ">
    <li className="list-group-item "><i>By: {author}</i></li>
    <li className="list-group-item"><i><small>On: {new Date(publishedAt).toGMTString()}</small></i></li>
  </ul>
        <div className="card-body">
          <a href={url} target="_blank" className="btn btn-sm " style={{backgroundColor:"#f7d31b", color:"black"}}>
            Read More
          </a>
        </div>
      </div>
    );
  }
}
