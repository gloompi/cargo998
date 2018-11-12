import React from 'react'
import MaterialIcon from 'material-icons-react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

import Loader from '../Loader'

const Services = ({
  services: {
    loaded,
    data,
  },
}) => (
  <main className='main'>
    <div className='main__background' />
    <section className='common__section page'>
      <div className='container'>
        <h1 className='page__title'>Услуги</h1>
        <div className='page__content'>
        <ul className='service__list'>
          {loaded
            ? Object.values(data).map(({ slug, title, descr }, idx) => (
              <li key={slug} className='service__item'>
                <MaterialIcon icon={slug} size={50} />
                <div className='service__info'>
                  <h3>{title}</h3>
                  <span>{descr}</span>
                </div>
              </li>
            ))
            : <Loader />
          }
        </ul>
        <div className='services__container'>
          <h3>Условия отгрузок (Дополнительные траты)</h3>
          <ul>
            <li><i className='fas fa-weight-hanging'/> АВИА: МИНИМАЛЬНЫЙ ВЕС ГРУЗА ОТ 1 КГ</li>
            <li><i className='fas fa-weight'/> АВТО: МИНИМАЛЬНЫЙ ВЕС ГРУЗА до россии нет ограничений, до казахстана НЕ МЕНЕЕ 500 КГ</li>
            <li><i className='fas fa-truck'/> АВТО ДОСТАВКА: СКЛАДСКОЕ ОБСЛУЖИВАНИЕ, ПОГРУЗОЧНО-РАЗГРУЗОЧНЫЕ РАБОТЫ</li>
            <li><i className='fas fa-box'/> УПАКОВКА с 10 юаней СТАНДАРТ (СКотч-мешок, скотч, обрешетка)</li>
            <li><i className='fas fa-hand-holding-usd '/> СТРАХОВКА 1%-2%</li>
            <li><i className='fas fa-piggy-bank'/> ХРАНЕНИЕ БЕСПЛАТНО</li>
            <li><i className='fas fa-sitemap'/> ПЛОТНОСТЬ = ВЕС/ОБЪЕМ</li>
            <span>стоимость зависит что за товар, от веса и обема, как будет упоковать ВАш товар  </span>
          </ul>
        </div>
        </div>
      </div>
    </section>
  </main>
)

export default compose(
  inject('services'),
  lifecycle({
    componentDidMount() {
      const { fetch, loaded } = this.props.services
      if (!loaded) fetch()
    }
  }),
  observer,
)(Services)
