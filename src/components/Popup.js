import React from 'react'
import MaterialIcon from 'material-icons-react'
import { compose, lifecycle, withHandlers } from 'recompose'

const Popup = ({ active, handleClick, src }) => (
  <div className={`popup ${active ? 'active' : ''}`}>
    <div className='popup__container'>
      <img src={src} className='popup__img' alt='popup_image' />
      <a href='#close' className='popup__close' onClick={() => handleClick(false)}>
        <MaterialIcon icon='close' size={25} color='#008BD9' />
      </a>
    </div>
  </div>
)

export default compose(
  withHandlers({
    handleClickOutside: ({ handleClick }) => e => {
      if (e.target.tagName !== 'IMG' && e.target.className !== 'popup__img') {
        handleClick(false)
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      window.addEventListener('mousedown', this.props.handleClickOutside)
    },
    componentWillUnmount() {
      window.removeEventListener('mousedown', this.props.handleClickOutside)
    }
  })
)(Popup)
