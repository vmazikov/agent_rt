const buttonKem = document.querySelector('#kem');
const buttonAnj = document.querySelector('#anjero');
const buttonProkop = document.querySelector('#prokopievsk');
const buttonMap = document.querySelector('#map');
const buttonTopki = document.querySelector('#topki');
const buttonPromislennaya = document.querySelector('#promislennaya');
const buttonBerezovskiy = document.querySelector('#berezovskiy');
const buttonObKem = document.querySelector('#ob_kem');


const kemIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ac78f6249ae901c61481365556adf332ebe6638afdb62893dccc471dedf6f1e1f&amp;source=constructor';
const anjIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ae383ca5ae63ef9bf7a647c9522c03191575ff6bf18116f19ddc56f9d24e2799d&amp;source=constructor';
const prokopIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A82093b17f6f7895efffc35c532f90b8d3a4d2c70f01b5c77da2b7dd05aa63001&amp;source=constructor';
const mapIframe ='https://yandex.ru/map-widget/v1/?um=constructor%3Aed277b9e21482d6154077beb8c0d0da0711a85494c66e4cd71a514508165316d&amp;source=constructor'
const topkiIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ad327bd1aca3c480a66db69a155fdd03f50acbd9be96be3c75feb9910e0302e06&amp;source=constructor'
const promislennayaIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A0b26db91c0bfc41774b87f41d83f3b36a02a38eeb00c0a3141ce8a8e8471d92e&amp;source=constructor'
const berezovskiyIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A6d8ad1d0e8ed2b5587acd265f449dfdf8e2856815c78e1d0a684b9475b3dded4&amp;source=constructor'
const obKemIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A259785c63be2612b3e8dfe7c7cd088094f4ec32e5d0535ddcb90d4c09f509c0d&amp;source=constructor'
const iframe = document.querySelector('.iframe__item');

buttonKem.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = kemIframe;
});

buttonTopki.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = topkiIframe;
});

buttonAnj.addEventListener('click', function() {
  iframe.src = '';
  iframe.src = anjIframe;
});

buttonProkop.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = prokopIframe;
})

buttonMap.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = mapIframe;
})

buttonPromislennaya.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = promislennayaIframe;
})

buttonBerezovskiy.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = berezovskiyIframe;
})

buttonObKem.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = obKemIframe;
})

// buttonBel.addEventListener('click', function(){
//   iframe.src = '';
//   iframe.src = belIframe;
// })

// buttonTopki.addEventListener('click', function(){
//   iframe.src = '';
//   iframe.src = topkiIframe;
// })

// buttonGram.addEventListener('click', function(){
//   iframe.src = '';
//   iframe.src = gramIframe;
// })

// buttonGur.addEventListener('click', function(){
//   iframe.src = '';
//   iframe.src = gurIframe;
// })

// buttonInsk.addEventListener('click', function(){
//   iframe.src = '';
//   iframe.src = inskIframe;
// })

// buttonGorodok.addEventListener('click', function(){
//   iframe.src = '';
//   iframe.src = gorodokIframe;
// })
