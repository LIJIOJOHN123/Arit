import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 10,
  border: "1px solid green",
  backgroundColor: "#999999",
  margin: 6,
  padding: 8
};

class ScrollBar extends React.Component {
  state = {
    items: Array.from({ length: 20 })
  };
  //after 1.5 second  data will add more
  fetchMoreData = () => {
    //here we call api request
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  render() {
    return (
      <div>
        <h1>Infinite Search Bar</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              Lijo John{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ScrollBar;
