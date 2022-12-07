const buttonKem = document.querySelector('#kem');
const buttonAnj = document.querySelector('#anjero');
const buttonProkop = document.querySelector('#prokopievsk');
const buttonMap = document.querySelector('#map');
const buttonTopki = document.querySelector('#topki');



const kemIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ac78f6249ae901c61481365556adf332ebe6638afdb62893dccc471dedf6f1e1f&amp;source=constructor';
const anjIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ae383ca5ae63ef9bf7a647c9522c03191575ff6bf18116f19ddc56f9d24e2799d&amp;source=constructor';
const prokopIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A82093b17f6f7895efffc35c532f90b8d3a4d2c70f01b5c77da2b7dd05aa63001&amp;source=constructor';
const mapIframe ='https://yandex.ru/map-widget/v1/?um=constructor%3Aed277b9e21482d6154077beb8c0d0da0711a85494c66e4cd71a514508165316d&amp;source=constructor'
const topkiIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ad327bd1aca3c480a66db69a155fdd03f50acbd9be96be3c75feb9910e0302e06&amp;source=constructor'
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

buttonPls.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = plsIframe;
})

buttonUrga.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = urgaIframe;
})

buttonBel.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = belIframe;
})

buttonTopki.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = topkiIframe;
})

buttonGram.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = gramIframe;
})

buttonGur.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = gurIframe;
})

buttonInsk.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = inskIframe;
})

buttonGorodok.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = gorodokIframe;
})
