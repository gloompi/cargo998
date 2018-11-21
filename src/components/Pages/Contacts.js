import React from 'react'
import MaterialIcon from 'material-icons-react'

const Contacts = () => (
  <main className='main'>
    <div className='main__background' />
    <section className='common__section page'>
      <div className='container'>
        <h1 className='page__title'>Контакты</h1>
        <div className='page__content'>
          <div className='contacts__wrapper'>
            <div className='map storehouse__pic'>
              <img src="/images/truck.jpg" alt="StoreHouse"/>
            </div>
            <div className='contacts'>
              <p><MaterialIcon icon='call' size={25}/> <strong>Nuri: </strong>13175523503</p>
              <p><MaterialIcon icon='chat_bubble' size={25}/> <strong>WhatsApp: </strong>13175523503</p>
              <p><MaterialIcon icon='chat' size={25}/> <strong>wechat: </strong>13175523503</p>
              <p><MaterialIcon icon='chat_bubble_outline' size={25}/> <strong>QQ: </strong>3318886240</p>
              <p><MaterialIcon icon='email' size={25}/> <strong>Email: </strong>nura_solnyshka@mail.ru</p>
              <p><MaterialIcon icon='room' size={25}/> <strong>Адрес нашего офиса: </strong>Chouzhou North Road 533, 5th floor, Yiwu city, Zhejiang Province, China</p>
            </div>
          </div>
          <div className='contacts__wrapper storehouse'>
            <div className='storehouse__pic'>
              <img src="http://cargo998.ru/media/gallery/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20181113150820_Y5YYT39.jpg" alt="StoreHouse"/>
            </div>
            <div className='contacts'>
              <p><h3>Склад</h3></p>
              <p><MaterialIcon icon='call' size={25}/> <strong>Liu Long: </strong>18611537778 </p>
              <p><MaterialIcon icon='chat' size={25}/> <strong>wechat: </strong>18611537778 </p>
              <p><MaterialIcon icon='chat_bubble_outline' size={25}/> <strong>QQ: </strong>5357321 </p>
              <p><MaterialIcon icon='email' size={25}/> <strong>Email: </strong>5357321@qq.com</p>
              <p><MaterialIcon icon='room' size={25}/> <strong>Адрес нашего склада: </strong>998 Warehouse, No. 517, Zongze North Road, Yiwu City Liu Long 18611537778</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Contacts
