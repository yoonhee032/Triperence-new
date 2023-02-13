import styled from 'styled-components';
import axios from 'axios';

const Tagplace = styled.div`
  float: left;
  width: calc(28.95vw - 68px);
`;

const Tagbtn = styled.button`
  height: 28px;
  min-height: 140px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #77aefc;

  word-break: break-word;
  color: #595959;
  margin-bottom: 24px;
`;
const Tag = ({ item1 }) => {
  return (
    <Tagplace>
      <Tagbtn>ad</Tagbtn>
      <hr style={{ float: 'left', height: '0px', width: '25vw' }} />
    </Tagplace>
  );
};
export default Tag;
