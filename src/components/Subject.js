import { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1 className="title">
          <a
            href="/"
            onClick={function (e) {
               e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        <h2 className="toc_title">{this.props.sub}</h2>
      </header>
    );
  }
}

export default Subject;