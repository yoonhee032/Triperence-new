import styled, {css} from 'styled-components';


const categories = [
  {
    name: 'all',
    text: 'All',
  },
  {
    name: 75,
    text: 'Leports',
  },
  {
    name: 76,
    text: 'Landmark',
  },
  {
    name: 78,
    text: 'Culture',
  },
  {
    name: 79,
    text: 'Shopping',
  },
  {
    name: 80,
    text: 'Accommodation',
  },
  {
    name: 82,
    text: 'Dining',
  },
  {
    name: 85,
    text: 'Festival',
  },
];

const CategoriesBlock = styled.div`
  display:flex;
  padding:1rem;
  width : 768px;
  margin-left:24px;
  @media screen and (max-width: 768px){
    width:100%;
    overflow-x:auto;
  }
`;
const Category = styled.div`
  font-size: 1rem;
  font:"pretendard";
  font-weight:500;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #c1c1c1;
  border: 1px solid #c1c1c1;
  padding : 0.5rem;
  padding-left : 0.8rem;
  padding-right : 0.8rem;
  border-radius: 50px;

  &:hover {
    color: #77AEFC;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border: 2px solid #77AEFC;
      color: #77aefc;
      &:hover {
        color: #77AEFC;
      }
    `}
  &+& {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  // setValues({...values, [e.target.name]: e.target.value});

  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name} active={category === c.name} onClick={() => onSelect(c.name)}>
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};
export default Categories;
