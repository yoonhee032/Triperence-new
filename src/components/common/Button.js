import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  display: iflex;
  outline: none;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  padding: 1rem;
  align-items: center;
  text-align: center;

  height: 3rem;
  width: 24rem;
  font-size: 1rem;

  background: ${palette.gray[1]};
  &hover {
    background: ${palette.main[0]};
  }
  
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
