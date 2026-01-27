import chu from '../assets/uncle-hai/chu.png'
import hai from '../assets/uncle-hai/Hai.png'
import chuc from '../assets/uncle-hai/Chuc.png'
import mung from '../assets/uncle-hai/mung.png'
import nam from '../assets/uncle-hai/nam.png'
import moi from '../assets/uncle-hai/moi.png'

const bannerImages = [
  { src: chu, alt: 'Chú', itemClassName: 'uncle-hai-banner__item uncle-hai-banner__item--1', imgClassName: 'uncle-hai-banner__img uncle-hai-banner__img--1' },
  { src: hai, alt: 'Hải', itemClassName: 'uncle-hai-banner__item uncle-hai-banner__item--2', imgClassName: 'uncle-hai-banner__img uncle-hai-banner__img--2' },
  { src: chuc, alt: 'Chúc', itemClassName: 'uncle-hai-banner__item uncle-hai-banner__item--3', imgClassName: 'uncle-hai-banner__img uncle-hai-banner__img--3' },
  { src: mung, alt: 'Mừng', itemClassName: 'uncle-hai-banner__item uncle-hai-banner__item--4', imgClassName: 'uncle-hai-banner__img uncle-hai-banner__img--4' },
  { src: nam, alt: 'Năm', itemClassName: 'uncle-hai-banner__item uncle-hai-banner__item--5', imgClassName: 'uncle-hai-banner__img uncle-hai-banner__img--5' },
  { src: moi, alt: 'Mới', itemClassName: 'uncle-hai-banner__item uncle-hai-banner__item--6', imgClassName: 'uncle-hai-banner__img uncle-hai-banner__img--6' },
]

export default function UncleHaiBanner() {
  return (
    <div className="uncle-hai-banner" aria-hidden="true">
      {bannerImages.map((item) => (
        <span key={item.alt} className={item.itemClassName}>
          <img src={item.src} alt={item.alt} className={item.imgClassName} draggable={false} />
        </span>
      ))}
    </div>
  )
}
