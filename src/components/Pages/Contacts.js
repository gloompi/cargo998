import React from 'react'
import { compose, lifecycle } from 'recompose'
import axios from 'axios'
import MaterialIcon from 'material-icons-react'

const Contacts = () => (
  <main className='main'>
    <div className='main__background' />
    <section className='common__section page'>
      <div className='container'>
        <h1 className='page__title'>Контакты</h1>
        <div className='page__content'>
          <div className='contacts__wrapper'>
            <div id="map" className='map' />
            <div className='contacts'>
              <p><MaterialIcon icon='call' size={25}/> <strong>Nuri: </strong>13175523503</p>
              <p><MaterialIcon icon='chat_bubble' size={25}/> <strong>WhatsApp: </strong>13175523503</p>
              <p><MaterialIcon icon='chat' size={25}/> <strong>wechat: </strong>13175523503</p>
              <p><MaterialIcon icon='chat_bubble_outline' size={25}/> <strong>QQ: </strong>3318886240</p>
              <p><MaterialIcon icon='email' size={25}/> <strong>Email: </strong>nura_solnyshka@mail.ru</p>
              <p><MaterialIcon icon='room' size={25}/> <strong>Адрес нашего офиса: </strong>Chouzhou North Road 533, 5th floor, Yiwu city, Zhejiang Province, China</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default compose(
  lifecycle({
    async componentDidMount() {
      await axios.get('https://api-maps.yandex.ru/2.1/?apikey=7210ee31-4905-4c55-af20-6f6c9c09e6a6&lang=ru_RU')
      const ymaps = window.ymaps
     
      const init = () => { 
        const myMap = new ymaps.Map('map', {
            center: [29.30861579979043,120.07148847870334],
            zoom: 10
        })

        const myPlacemark = new ymaps.Placemark([29.30861579979043,120.07148847870334])
        myMap.behaviors.disable('scrollZoom')
        myMap.geoObjects.add(myPlacemark)
      }
      ymaps.ready(init)
    }
  })
)(Contacts)
