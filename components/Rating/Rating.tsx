import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import cn from 'classnames'
import star from './asset/star.jpg'
import starhover from './asset/starhover.jpg'
import { useEffect, useState } from 'react'


export default ({ isAnidable, rating,setRating, ...props }:RatingProps): JSX.Element => {
  const [stateRatingArr, setRatingArr] = useState([])

  useEffect(() => {
    setRatingArr(starConstruct(rating))
  }, [])

  

  const starConstruct = (num:number) => {
    return [...Array(5).keys()].reduce((acc:any,val) => {
      if (num < val) {
        acc.push(<img key={val}
          onMouseEnter={() => setRatingArr(starConstruct(val))}
          onMouseLeave={() => setRatingArr(starConstruct(rating))}
          onClick={() => setRatingArr(starConstruct(val))}
          className={styles.star} src={star.src} />)
      } else {
        acc.push(<img key={val}
          onMouseEnter={() => setRatingArr(starConstruct(val))}
          onMouseLeave={() => setRatingArr(starConstruct(rating))}
          onClick={() => setRatingArr(starConstruct(val))}
          className={styles.star} src={starhover.src} />)
      }
      return acc
    }, [])
  }

  

  return (
    <>{stateRatingArr}</>
  )
}