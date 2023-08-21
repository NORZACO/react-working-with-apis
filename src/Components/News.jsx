import React, { Component } from "react";
import dotenv from "dotenv";
dotenv.config();
import NewSingle from "./NewsSingle";

const newsURL =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-07-21&sortBy=publishedAt&apiKey=";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  componentDidMount() {
    const url = `${newsURL}${process.env.NEWS_SECRET_KEY}`;

    fetch(url)
      .then((response) => response.json())

      .then((data) => this.setState({ news: data.articles }))

      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state?.news?.map(function (item) {
      <NewSingle key={item.url} item={item} />;
    });
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
