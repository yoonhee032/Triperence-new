import MapModal from './mapmodal';
import styled from 'styled-components';
import { useState } from 'react';
import op from 'icons/filter.svg';

const Mapmodalper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <ModalPerformanceWrap>
      <Filter onClick={onClickButton}></Filter>
      {isOpen && (
        <MapModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </ModalPerformanceWrap>
  );
};

const Filter = styled.div`
  height: 48px;
  width: 48px;
  border: none;
  background-image: url(${op});
  background-color: transparent;
  float: right;
  position: absolute;
  right: 0;
  top: -60px;
  background-size: contain;
  z-index: 100;
`;

const ModalPerformanceWrap = styled.div`
  margin: 10px 40px;
  border: 0px none;
  clear: none;
  background-color: transparent;
  background-size: contain;
  position: relative;
`;

export default Mapmodalper;
