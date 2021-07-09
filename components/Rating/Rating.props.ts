import { DetailedPropDiv } from '../../@types';

export interface RatingProps extends DetailedPropDiv {
  isAnidable?: boolean,
  rating: number,
  setRating?: (rating:number) => void
}