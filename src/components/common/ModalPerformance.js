import Modal from './Modal';
import styled from 'styled-components';
import { useState } from 'react';
import op from 'icons/filter.svg';

const ModalPerformance = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Change onClick={onClickButton}>Change</Change>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          value={props.value}
        />
      )}
    </>
  );
};

const Change = styled.div`
  border: 0;
  outline: 0;
  background-color: transparent;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  text-align: right;

  color: #77aefc;
  float: left;
`;

export default ModalPerformance;
