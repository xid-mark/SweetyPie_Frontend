import React from 'react';
import { IoStar, IoShieldCheckmarkSharp } from 'react-icons/io5';
import { GoShield } from 'react-icons/go';

const Host = ({ hostName, hostDesc, hostReviewNum }) => {
  const img = window.location.origin;
  const hostDescription =
    hostDesc ||
    '강릉 토박이이며, 가깝고도 먼 주문진으로 시집온지 이십년이 넘은 쌍둥이 맘입니다. 스킨스쿠버와 커피, 코딩을 좋아하며, 특기는 냥냥펀치 입니다:D 여러 나라, 지역에서 다양한 게스트들을 만나고 싶고, 많이 찾아 주셨으면 좋겠습니다~~';

  return (
    <div className="">
      <div className="flex mb-2.4rem">
        <img
          className="inline-block rounded-full w-28 h-28 mr-10"
          src={img + '/img/JamJam2.jpg'}
          alt="호스트 프로필 사진"
        />
        <div className="">
          <h1 className="text-2.2rem font-bold mb-0.8rem">
            호스트: {hostName}님
          </h1>
          <span className="text-1.4rem text-#717171">
            회원 가입일: 2017년 2월
          </span>
        </div>
      </div>
      <div className="w-full text-1.6rem flex">
        <div className="w-1/2 pr-28">
          <div className="flex mb-1.6rem">
            <span className="flex mr-20">
              <IoStar className="=w-8 h-8 mr-1.2rem text-airbnb" />
              후기 {hostReviewNum}개
            </span>
            <span className="flex">
              <IoShieldCheckmarkSharp className="w-8 h-8 mr-1.2rem text-airbnb" />
              본인 인증 완료
            </span>
          </div>
          <p className="mb-10">{hostDescription.substring(0, 300)}</p>
          <h2 className="font-bold mb-0.8rem">숙박중 게스트와의 교류</h2>
          <p className="">
            If you need any help, always feel free to ask us. Please contact us
            in advance if you want to hang out together.
          </p>
        </div>
        <div className="w-1/2 pl-10 pr-28">
          <p className="mb-1.6rem">언어: English, 한국어</p>
          <p className="mb-1.6rem">응답률: 100%</p>
          <p className="mb-20">응답 시간: 1시간 이내</p>
          <p className="text-1.2rem flex">
            <GoShield className="w-8 h-8 mr-1.2rem" />
            안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나
            대화를 나누지 마세요.
          </p>
        </div>
      </div>
      <div className="my-20 border-b"></div>
    </div>
  );
};

export default Host;
