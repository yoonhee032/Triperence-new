import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const N = styled.button`
  border: 1px solid #77aefc;
  display: inline-block;
  border-radius: 30px;
  width: 120%;
  line-height: 48px;
  cursor: pointer;
  text-align: center;
  background: none;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;
  color: #77aefc;
`;
const formtrans = [
  { id: 1, name: 'transportation', value: 'Public transport' },
  { id: 2, name: 'transportation', value: 'Taxi' },
  { id: 3, name: 'transportation', value: 'Rental Cars' },
];

const CustomButton = (props) => {
  return (
    <div>
      <N>
        <div className="formInput">
          {/* <input type="radio" name={props.name} value={props.value}></input> */}
          <div>{formtrans.name}K- Culture Lover</div>
        </div>
      </N>
    </div>
  );
};

export default CustomButton;
