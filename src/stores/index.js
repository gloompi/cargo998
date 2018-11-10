import Header from './Header'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import SixthSection from './SixthSection'
import Gallery from './Gallery'
import Pages from './Pages'

const stores = {}

Object.assign(stores, {
  pages: new Pages(stores),
  header: new Header(stores),
  gallery: new Gallery(stores),
  firstSection: new FirstSection(stores),
  secondSection: new SecondSection(stores),
  thirdSection: new ThirdSection(stores),
  fourthSection: new FourthSection(stores),
  fifthSection: new FifthSection(stores),
  sixthSection: new SixthSection(stores)
})

export default stores
