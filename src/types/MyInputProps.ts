/* eslint-disable max-len */
import {
  ChangeEvent,
  RefObject,
} from 'react';

export interface MyInputProps {
  ref: RefObject<HTMLInputElement>;
  value: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
