import {ReactNode} from 'react';
import { DetailedPropButt } from '../../@types';
export interface ButtonProps extends DetailedPropButt {
  aps: 'primary' | 'ghost'
  children:ReactNode
}