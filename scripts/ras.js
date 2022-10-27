const buttonKem = document.querySelector('#kem');
const buttonAnj = document.querySelector('#anjttk');
const buttonLen = document.querySelector('#len');
const buttonBereza = document.querySelector('#berezovskij');
const buttonPls = document.querySelector('#pls');
const buttonUrga = document.querySelector('#urga');
const buttonBel = document.querySelector('#belttk');
const buttonTopki = document.querySelector('#topkittk');
const buttonGram = document.querySelector('#grttk');
const buttonGur = document.querySelector('#gurttk');
const buttonInsk = document.querySelector('#inskttk');
const buttonGorodok = document.querySelector('#gorodok');

const belIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A664bf7e4678dffcc860132bfeed103523b24a35cf577401be7cd1d9847b19057&amp;source=constructor';
const berezaIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A93a9fdf4fbb0db0b404beafefc8dd74bb7d4aa2822e0ab5fb03682aa5499afcc&amp;source=constructor';
const gramIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A93f0a14e2e0670c70142ebada7c760caa6d6a77727398ee915fd0445aae97ec7&amp;source=constructor';
const gurIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa723d9a33bdbbcb8f82e993b50b6f14319dff3e1a75a22dff07b317300285064&amp;source=constructor';
const inskIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A3c7f5aefb9503efde16fd85a2724b28a1cb895523e844ae8f9e00c4a68061939&amp;source=constructor';
const lenIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Addc9f0a0d59cbd467feefb52f6bd3ad2ecbade789eddf798c1546b2cf015de52&amp;source=constructor';
const plsIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Adb82a4a744b6bb2d6ed77136630bcee03b8b624513d7c842fbab74f08f871287&amp;source=constructor';
const topkiIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ac77ea714fad022deee2b93aeacdd98c6f4a40460978073fa3a8e84e208a8b9f8&amp;source=constructor';
const urgaIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Aadd23b8e9e8c674c7681fc631f1fa2e16350b7c894538d5aee4460d65455b321&amp;source=constructor';
const anjIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A2134187a4d3beade3afad40164ca9fbbfe29caed7d8a0c4bf01d29ba95ccc59a&amp;source=constructor';
const kemIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ac78f6249ae901c61481365556adf332ebe6638afdb62893dccc471dedf6f1e1f&amp;source=constructor';
const gorodokIframe = 'https://yandex.ru/map-widget/v1/?um=constructor%3A6a19dadc8047e352f73f9449009958976f26542f37b5b4aad77d4afa09da8830&amp;source=constructor'
const iframe = document.querySelector('.iframe__item');

buttonKem.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = kemIframe;
});

buttonAnj.addEventListener('click', function() {
  iframe.src = '';
  iframe.src = anjIframe;
});

buttonLen.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = lenIframe;
})

buttonBereza.addEventListener('click', function(){
  iframe.src = '';
  iframe.src = berezaIframe;
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
