import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "https://dummy.com",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/venuyeggadi");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Inside setInterval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    console.log("Child Component Will Unmount");
    clearInterval(this.timer);
  }

  render() {
    //const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    const { count1, count2 } = this.state;
    console.log("Child Render");

    return (
      <div className="user-card">
        <h3>Count1 = {count1}</h3>
        <h3>Count2 = {count2}</h3>
        <button
          onClick={() => {
            this.setState({
              //...this.state, not needed. It only updates those properties passed in setState.
              count1: count1 + 1,
            });
          }}
        >
          Increase Count1
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <img src={avatar_url}></img>
        <h3>Contact: None</h3>
      </div>
    );
  }
}

export default UserClass;
