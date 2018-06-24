
import React from "react";


export default class GithubContributions extends React.Component {

  render() {
    const { color } = this.props

    return (
      <div className="day" style={{ backgroundColor: color }}>{JSON.stringify(this.props)}</div>
    )
  }

}
