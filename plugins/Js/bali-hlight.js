const balitrack = document.querySelector('.bali-carousel-track');
const balicards = document.querySelectorAll('.bali-carousel-card');
const baliprevButton = document.querySelector('.bali-carousel-arrow-left');
const balinextButton = document.querySelector('.bali-carousel-arrow-right');

let index = 0;
let balicardWidth = balicards[0].offsetWidth;
let visibleCards = getVisibleCards(); // 目前可見的卡片數量

// 根據螢幕大小計算可見張數
function getVisibleCards() {
  if (window.innerWidth <= 768) {
    return 1; // 手機
  } else if (window.innerWidth <= 1024) {
    return 2; // 平板
  } else {
    return 4; // 桌機
  }
}

// 當視窗縮放時，更新卡片寬度 & 可見張數
window.addEventListener('resize', () => {
  balicardWidth = balicards[0].offsetWidth;
  visibleCards = getVisibleCards();
  // 重新套用位置，避免 resize 後跑版
  balitrack.style.transform = `translateX(-${balicardWidth * index}px)`;
});

balinextButton.addEventListener('click', () => {
  if (index < balicards.length - visibleCards) {
    index++;
    balitrack.style.transform = `translateX(-${balicardWidth * index}px)`;
  }
});

baliprevButton.addEventListener('click', () => {
  if (index > 0) {
    index--;
    balitrack.style.transform = `translateX(-${balicardWidth * index}px)`;
  }
});
