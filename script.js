const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You like this";
    }

    return e(
      "button",
      {
        onDoubleClick: () => this.setState({ liked: true }),
        onMouseLeave: () => {
          this.setState({ liked: true });
        },
        onClick: () => {
          this.setState({ liked: true });
        }
      },
      "Like"
    );
  }
}

const domContainer = document.getElementById("like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
