/* eslint-disable max-len */
import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  RefObject, 
} from 'react';
import { MyInputProps } from '../../types/MyInputProps';

// interface MyInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
// HTMLInputElement> {
//   ref: RefObject<HTMLInputElement>;
//   value: string;
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
// }

// const myInputProps: MyInputProps = {
//   ref: …..,
//   type: 'text',
//   className: 'my-input',
//   placeholder: 'Enter text',
//   value: 'Some value',
//   onChange: (event) => {
//     // Handle change
//   },
// };

type Props = {
  myInputProps: MyInputProps,
};

export const Input: React.FC = ({ myInputProps }: Props): DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> => {
  return (
    <input
      ref={myInputProps.ref}
      className="input"
      placeholder="Enter new name"
      value={myInputProps.value}
      onChange={myInputProps.onChange}
    />
  );
};
