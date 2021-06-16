import React, { Component } from "react";
import "./search.css";
import axios from "axios";
import ImageResults from "../ImageResults/ImageResults";

class Search extends Component {
  state = {
    searchText: "",
    apiUrl: "https://pixabay.com/api",
    apiKey: "22090391-c20817e6548327ce4ad170348",
    images: [],
  };

  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };
  render() {
    console.log(this.state.images);
    return (
      <div>
       <div className="inputField">
        <input
          type="text"
          placeholder="Search for images"
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
        />
        </div>
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
