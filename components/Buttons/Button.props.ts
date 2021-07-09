import {ReactNode} from 'react';
import { DetailedProp } from '../../@types';
export interface ButtonProps extends DetailedProp {
  aps: 'primary' | 'ghost'
  children:ReactNode
}