import { TABLET_WIDTH, MOBILE_WIDTH } from './screenSizes';

/**
 * 캐러셀 세팅옵션
 */
export const listPageSettings = {
  infinite: false, // 무한으로 넘길 수 있는지 여부
  speed: 500, // 넘기는 속도
  slidesToShow: 4, // 한 화면에 보이는 개수
  slidesToScroll: 2, // 한 번 넘길 때 넘겨지는 개수
  arrows: true, // 화살표 유무
  autoplay: true, // 자동 넘어감 유무
  autoplaySpeed: 5000, // 자동 넘어감 속도

  // 반응형
  responsive: [
    {
      breakpoint: TABLET_WIDTH,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
      },
    },
    {
      breakpoint: MOBILE_WIDTH,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
      },
    },
  ],
};

export const myPageSetting = {
  infinite: true,
  speed: 500,
  arrows: true,
  rows: 2, // rows 개수
  slidesToShow: 5,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: MOBILE_WIDTH,
      settings: {
        arrows: false,
      },
    },
  ],
};