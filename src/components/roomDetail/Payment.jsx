import React from 'react';
import { Link } from 'react-router-dom';
import { HiStar } from 'react-icons/hi';
import { GrDown, GrUp } from 'react-icons/gr';
import classNames from 'classnames';
import moment from 'moment';

const Payment = ({
  rating,
  reviewNum,
  price,
  visible,
  onShowPopup,
  onCloseModal,
}) => {
  // url에서 정보 가져오기
  let url = new URL(window.location.href);
  let checkInDate = url.searchParams.get('checkInDate');
  let checkoutDate = url.searchParams.get('checkoutDate');
  let adultNum = url.searchParams.get('adultNum');
  let childNum = url.searchParams.get('childNum');
  let infantNum = url.searchParams.get('infantNum');
  let accommodationId = window.location.pathname.split('/')[2];

  const day = moment(checkoutDate).diff(moment(checkInDate), 'day') || 0;
  const pricewithDay = price * day;
  const fees = Math.round(price * 0.07 * day);
  const totalPrice = +price * +day + +fees + 10000;
  const ratingRoundUp = rating.toFixed(2);
  const totalGuest = +adultNum + +childNum + +infantNum;

  // 금액 표기 시 세자리 수마다 콤마(,)찍어주기
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="w-full px-2.4rem py-10 sticky border rounded-3xl shadow-xl bg-white">
      <div>
        <div className="space-between">
          <span className="text-2.2rem font-bold">
            ₩{numberWithCommas(price)}원
          </span>
          <span className="text-#717171 text-1.6rem"> / 박</span>
          <div className="inline-flex text-1.4rem ml-40">
            <span className="inline-flex items-center flex-start mr-1 mb-1">
              <HiStar className="inline-block text-airbnb" />
            </span>
            <span className="font-bold mr-2">{ratingRoundUp}</span>
            <span className="text-#717171">({reviewNum})</span>
          </div>
        </div>
        <div className="h-11.2rem justify-items-center mt-8 mb-4 border rounded-2xl border-gray-400 ">
          <div className="flex justify-content">
            <div className="w-64 h-5.6rem pt-2 pl-5 border-r border-gray-400">
              <b>체크인</b>
              <button
                onClick={
                  visible.state ? onCloseModal : () => onShowPopup('calendar')
                }
                data-name="close"
              >
                <label htmlFor="checkIn" />
                <input
                  id="checkIn"
                  name="checkIn"
                  placeholder="날짜추가"
                  value={checkInDate ? checkInDate : ''}
                  className="block text-1.4rem pt-2 leading-normal bg-transparent cursor-pointer"
                  disabled
                />
              </button>
            </div>
            <div className="w-64 h-5.6rem pl-5 pt-2 ">
              <b>체크아웃</b>
              <button
                onClick={
                  visible.state ? onCloseModal : () => onShowPopup('calendar')
                }
                data-name="close"
              >
                <label htmlFor="checkOut" />
                <input
                  id="checkOut"
                  name="checkOut"
                  placeholder="날짜추가"
                  value={checkoutDate ? checkoutDate : ''}
                  className="block text-1.4rem pt-2 leading-normal bg-transparent cursor-pointer"
                  disabled
                />
              </button>
            </div>
          </div>
          <div
            class={classNames(
              'w-full h-5.6rem pt-1 border-t-2 border-gray-400 spt-2 pl-5 relative',
              {
                'border-2 border-gray-800 rounded-2xl': visible.state,
              },
            )}
            data-name="close"
          >
            <p className="font-bold pt-1" data-name="close">
              인원
            </p>
            <button
              className="inline-flex justify-between text-left pt-1 w-full h-full bg-transparent"
              onClick={
                visible.state ? onCloseModal : () => onShowPopup('guest')
              }
              data-name="close"
            >
              <span className="text-gray-400 text-1.4rem " data-name="close">
                게스트 {totalGuest}명
              </span>
              {visible.state ? (
                <GrUp className="mr-4 text-black text-3xl text-center" />
              ) : (
                <GrDown className="mr-4 text-black text-3xl text-center" />
              )}
            </button>
          </div>
        </div>
        <Link
          to={`/booking/payment/${accommodationId}?checkInDate=${checkInDate}&checkoutDate=${checkoutDate}&adultNum=${adultNum}&childNum=${
            childNum ? childNum : 0
          }&infantNum=${infantNum ? infantNum : 0}`}
        >
          {totalGuest !== 0 && checkInDate && checkoutDate ? (
            <button className="bg-airbnb hover:bg-airbnbHover text-white font-bold rounded-2xl transition-all duration-150 shadow-md focus:outline-none w-full h-20 px-6 m-2 text-2xl transform focus:scale-90">
              예약하기
            </button>
          ) : (
            <button
              className="bg-gray-300 text-white font-bold rounded-2xl transition-all duration-150 shadow-md focus:outline-none w-full h-20 px-6 m-2 text-2xl transform focus:scale-90 cursor-default"
              disabled="true"
            >
              예약하기
            </button>
          )}
        </Link>
      </div>
      <p className="my-5 text-1.4rem text-center">
        예약 확정 전에는 요금이 청구되지 않습니다.
      </p>
      <div>
        <ul className="text-1.6rem">
          <li className="mb-3 flex justify-between">
            <span className="underline">
              ₩{numberWithCommas(price)} × {day}박
            </span>
            <span>₩{numberWithCommas(pricewithDay)}원</span>
          </li>
          <li className="mb-3 flex justify-between">
            <span className="underline">청소비</span>
            <span>₩10,000원</span>
          </li>
          <li className="mb-3 flex justify-between">
            <span className="underline">서비스 수수료</span>
            <span>₩{numberWithCommas(fees)}원</span>
          </li>
        </ul>
      </div>
      <div className="my-2.4rem border-b"></div>
      <div className="font-bold text-1.6rem flex justify-between">
        <span>
          총 합계<span className="underline">(KRW)</span>
        </span>
        <span>₩{numberWithCommas(totalPrice)}원</span>
      </div>
    </div>
  );
};

export default Payment;
