import 'components/Pages/myPage.css';
import MyPageoption from 'components/myPagecomponents/myPageoption';
import React, { useState } from 'react';
import AM from 'components/myPagecomponents/optionckd/AM';
import Modal1 from '../components/common/unModal';
import WishList from 'components/WishList/WishList';
import Modal from '../components/common/Modal';
import { useEffect } from 'react';
import AuthService from '../components/Header/services/auth.service';

const MyPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setoption] = useState('AM');

  const onchange = (e) => {
    setoption(e.target.value);
  };

  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <section className="mainsection">
      <article className="option2">
        <MyPageoption />

        <label className="option1">
          <input
            onChange={onchange}
            style={{ display: 'none' }}
            value="AM"
            type="radio"
            name="option"
          />
          <div>Account Management</div>
        </label>
        <label className="option1">
          <input
            onChange={onchange}
            value="B"
            style={{ display: 'none' }}
            type="radio"
            name="option"
          />
          <div>Bookmark</div>
        </label>
        <label className="option1">
          <div
            value="U"
            type="radio"
            name="option"
            onClick={onClickButton}
            style={{ marginTop: '0px' }}
          >
            Unregister
          </div>
        </label>
      </article>

      <article className="statuis">
        {option === 'AM' ? (
          <AM />
        ) : (
          <div>
            <WishList />
          </div>
        )}
        {isOpen && (
          <Modal1
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </article>
    </section>
  );
};

export default MyPage;
