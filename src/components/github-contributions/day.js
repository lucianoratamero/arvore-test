
import React from "react";


export default class Day extends React.Component {

  render() {
    const { color, count } = this.props

    return (
      <div className="day" title={count} style={{ backgroundColor: color }}></div>
    )
  }

}
