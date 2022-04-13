# swiper.js

https://velog.io/@hustle-dev/%EC%9B%B9-%EC%84%B1%EB%8A%A5%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94

#### [전체 README.md로 돌아가기](../../../포트폴리오/README.md)

### 개요
<img src="https://media.giphy.com/media/MXjuiYv3Gco8EgvDse/giphy-downsized-large.gif" width="400px">

* 여태 취미로 그렸던 사진을 슬라이딩 가능한 갤러리로 구현
* 이미지 최적화를 위해 상단 링크에서 영감을 받아 **avif 파일**로 이미지를 삽입해 일반 jpg에 비해 약 **90% 정도의 용량 최적화**를 이루어 배포된 웹 사이트에서 **리소스 부하를 줄이는데 성공**함 



### 스크립트
```js
  var swiper = new Swiper('.swiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        sliderShadows: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    on: {
        init() {
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            })
            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    },
    });
```

* grabCursor : 마우스로 슬라이딩 가능하게 설정
* centeredSlides : 메인 이미지를 중간으로 옮기기 
* slidesPerView : 얼마나 많이 보여줄것인지 설정
* loop : 최종 이미지에 다다를때 다시 처음으로 옮기기
* navigation : 컨트롤 버튼 (우측, 좌측)
* autoplay : 2초마다 자동으로 다음 이미지로 넘어가기
* on : 마우스가 슬라이더 칸에 들어오면 슬라이딩 작동을 멈추게 하여 현재 온 이미지를 더 집중해서 볼 수 있도록 설정.
  * 마우스가 떠나면 다시 자동재생 설정 