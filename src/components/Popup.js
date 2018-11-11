import React from 'react'
import ReactDOM from 'react-dom'
import { compose, lifecycle, withHandlers } from 'recompose'

const Popup = ({ active, handleClick, src }) => (
  <div className={`popup ${active ? 'active' : ''}`}>
    <div className='popup__container'>
      <img src={src} alt='popup_image' />
      <a href='#close' className='popup__close' onClick={() => handleClick(false)}>
        &#9747;
      </a>
    </div>
  </div>
)

export default compose(
  withHandlers({
    handleClickOutside: ({ handleClick }) => that => e => {
      let withinListItems = ReactDOM.findDOMNode(that).contains(e.target)
      if (withinListItems && e.target.tagName !== 'IMG') {
        handleClick(false)
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      window.addEventListener('mousedown', this.props.handleClickOutside(this))
    },
    componentWillUnmount() {
      window.removeEventListener('mousedown', this.props.handleClickOutside)
    }
  })
)(Popup)
