import React, { Component } from 'react'
import Block from './Block'

const API = 'http://api.noto.ack.pt/block'

class Home extends Component<{}, { blocks: any[] }> {
  constructor(props: any) {
    super(props)

    this.state = {
      blocks: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ blocks: data }))
  }

  render() {
    return (
      <>
        <h3>Blocks</h3>

        {this.state.blocks.map((block: any) => (
          <Block key={block._id} block={block} />
        ))}
      </>
    )
  }
}

export default Home
