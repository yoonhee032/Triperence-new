import Header from 'components/Header/header';
import styled from 'styled-components';
import 'components/Pages/detail.css';
import Box from 'components/common/ckd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import HeartButton from 'components/common/HeartButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import DetailMap from './detailMap';
import Weather from '../components/Weather/weather';
import defaultimg from '../images/default.jpg';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Heart = styled.div`
  width: 100px;
  position: absolute;
  top: -165px;
  right: 10px;
`;

const containerStyle = {
  width: '792px',
  height: '420px',
};

const center = {
  lat: 37.4692,
  lng: 126.451,
};

const Detail = () => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [A, setA] = useState(null);
  

  var checknull = '';
  const id = location.state.contentid;
  console.log(id);
  useEffect(() => {}, [location]);

  useEffect(() => {
    //async 를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`http://localhost:8080/places/detail/${id}`);
        console.debug(response.data);
        setPlace(response.data);
        console.log(place.cat2);
        setA(place.areacode);
      } catch (e) {}
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
  }
  // 아직 item 값이 설정되지 않았을 때
  if (!place) {
    return null;
  }
  return (
    <div>
      <section className="section">
        {/* <Weather place={place}/> */}
        <Heart>
          <HeartButton HeartButton contentid={place.contentid} />
        </Heart>
        <article className="categorie">
          {place.areacode === 1
            ? 'Seoul'
            : place.areacode === 2
            ? 'Incheon'
            : place.areacode === 3
            ? 'Daejeon'
            : place.areacode === 4
            ? 'Daegu'
            : place.areacode === 5
            ? 'Gwangju'
            : place.areacode === 6
            ? 'Busan'
            : place.areacode === 7
            ? 'Ulsan'
            : place.areacode === 8
            ? 'Sejong'
            : place.areacode === 31
            ? 'Gyeonggi'
            : place.areacode === 32
            ? 'Gangwon'
            : place.areacode === 33
            ? 'Chungbuk'
            : place.areacode === 34
            ? 'Chungnam'
            : place.areacode === 35
            ? 'Gyeongbuk'
            : place.areacode === 36
            ? 'GyeongNam'
            : place.areacodeA === 37
            ? 'JeonBuk'
            : 'Jeju'}
        </article>
        <article className="title">
          {place.title}

          {/* <HeartButton like={like} onClick={toggleLike}/> */}
        </article>

      
          {place.originimgurl.map((img, idx) => {
            return (
              <div className="bordera">
                <img className={`img${idx + 1}`} src={img} alt="tripimg" />
              </div>
            );
          })}


        <Box place={place} />
        <div className="entire">
          <article className="Information" dangerouslySetInnerHTML={{ __html: place.overview }} />
          <hr />
          <article className="Details">
            <img className="details" src={require('icons/p.svg').default} alt="" />
            {place.addr1}
            <CopyToClipboard text={place.addr1}>
              <img
                className="d"
                src={require('icons/ss.svg').default}
                onClick={() => alert('Copy success')}
                alt=""
              />
            </CopyToClipboard>
          </article>

          {place.tel === null ? (
            ''
          ) : (
            <article className="Details">
              <img className="details" src={require('icons/tel.svg').default} alt="" />
              {place.tel}
              <CopyToClipboard text={place.tel}>
                <img
                  className="d"
                  src={require('icons/ss.svg').default}
                  onClick={() => alert('Copy success')}
                  alt=""
                />
              </CopyToClipboard>
            </article>
          )}

          {place.usefee === null ? (
            ''
          ) : (
            <article className="Details" style={{ marginBottom: '24px' }}>
              <img className="details" src={require('icons/w.svg').default} alt="" />
              <div dangerouslySetInnerHTML={{ __html: place.usefee }}></div>
            </article>
          )}
          <hr />
          <br />
          <div className="subtitle">Detailed Location</div>
          {/* 지도 */}
          <DetailMap place={place} />
          <div className="locationdetail">
            {place.directions === null ? (
              ''
            ) : (
              <div
                className="locationdetail"
                dangerouslySetInnerHTML={{ __html: place.directions }}
              ></div>
            )}
          </div>
          <div className="locationdetail">
            {place.placeinfo === null ? (
              ''
            ) : (
              <div
                className="locationdetail"
                dangerouslySetInnerHTML={{ __html: place.placeinfo }}
              ></div>
            )}
          </div>
          <br />
          <hr />
          <div className="subtitle">Detailed Information</div>
          <div className="DetailEntire">
            {/* 연령 여부 */}
            {place.eventstartdate === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/eventstartdate.svg').default}
                  alt=""
                />
                <div className="detailtitle">Festival Date</div>
                <div className="detailindex">
                  Start : {place.eventstartdate}
                  <br />
                  End : {place.eventenddate}
                </div>
              </div>
            )}

            {place.parking === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/parking.svg').default}
                  alt=""
                />
                <div className="detailtitle">Parking</div>
                <div className="detailindex" dangerouslySetInnerHTML={{ __html: place.parking }} />
              </div>
            )}
            {place.usetime === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/usetime.svg').default}
                  alt=""
                />
                <div className="detailtitle">Usetime</div>
                <div className="detailindex" dangerouslySetInnerHTML={{ __html: place.usetime }} />
              </div>
            )}
            {place.restdate === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/restdate.svg').default}
                  alt=""
                />
                <div className="detailtitle">Day Off</div>
                <div className="detailindex" dangerouslySetInnerHTML={{ __html: place.restdate }} />
              </div>
            )}

            {/* 요리 가능 여부 */}
            {place.chkcooking === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/chkcooking.svg').default}
                  alt=""
                />
                <div className="detailtitle">Cooking</div>
                <div
                  className="detailindex"
                  dangerouslySetInnerHTML={{ __html: place.chkcooking }}
                />
              </div>
            )}

            {/* 픽업 가능 여부 */}
            {place.pickup === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/pickup.svg').default}
                  alt=""
                />
                <div className="detailtitle">Pickup Service</div>
                <div className="detailindex" dangerouslySetInnerHTML={{ __html: place.pickup }} />
              </div>
            )}
            {/* 예약 가능 여부 */}
            {place.reservation === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/reservation.svg').default}
                  alt=""
                />
                <div className="detailtitle">Reservation</div>
                <div
                  className="detailindex"
                  dangerouslySetInnerHTML={{ __html: place.reservation }}
                />
              </div>
            )}

            {place.checkintime === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/checkinout.svg').default}
                  alt=""
                />
                <div className="detailtitle">Check In/Out</div>
                <div className="detailindex">
                  Check-In : {place.checkintime}
                  <br />
                  Check-Out : {place.checkouttime}
                </div>
              </div>
            )}

            {/* 각종시설 가능 여부 */}
            {place.foodplace === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/foodplace.svg').default}
                  alt=""
                />
                <div className="detailtitle">Foodplace</div>
                <div
                  className="detailindex"
                  dangerouslySetInnerHTML={{ __html: place.foodplace }}
                />
              </div>
            )}

            {/* 연령 여부 */}
            {place.expagerange === null ? (
              ''
            ) : (
              <div className="detailbox">
                <img
                  className="detailicon"
                  src={require('icons/detail/expagerange.svg').default}
                  alt=""
                />
                <div className="detailtitle">Age Limit</div>
                <div
                  className="detailindex"
                  dangerouslySetInnerHTML={{ __html: place.expagerange }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Detail;
