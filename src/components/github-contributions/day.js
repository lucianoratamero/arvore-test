
import React from "react";


export default class GithubContributions extends React.Component {

  render() {
    const { color, count } = this.props

    return (
      <div className="day" title={count} style={{ backgroundColor: color }}></div>
    )
  }

}
