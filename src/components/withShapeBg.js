import React, { Component } from 'react'

const withShapeBg = WrappedComponent => class ShapeBg extends Component {
  render() {
    return (
      <div className='shape__bg' >
        <div className='shape__content'>
          <WrappedComponent {...this.props} />
        </div>
      </div>
    )
  }
}
 
export default withShapeBg
