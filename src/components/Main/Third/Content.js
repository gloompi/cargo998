import React from 'react'

import { createMarkup } from '../../../helpers'

export default ({ 
  data: {
    slug, 
    cover_pic, 
    title, 
    content ,
  },
}) => (
  <div className='third__content'>
    <div className='third__content-img'>
      <img src={cover_pic} alt={slug}/>
    </div>
    <div className='third__content-main'>
      <h2 className='third__content-title'>{title}</h2>
      <div className='third__content-descr' dangerouslySetInnerHTML={createMarkup(content)} />
    </div>
  </div>
)
