import React, { Component } from 'react'

class Block extends Component<{ block: any }> {
  render() {
    return (
      <div className="block">
        <p>{this.props.block && this.props.block.content}</p>
      </div>
    )
  }
}

export default Block
