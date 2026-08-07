// 1. 고른다
const btn = document.querySelector('#contactBtn');
const title = document.querySelector('h1');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeBtn');

function openModal() {
  modal.classList.add('is-open');
}

function closeModal() {
  modal.classList.remove('is-open');
}

// 2. 듣는다 + 3. 바꾼다
btn.addEventListener('click', () => {
  title.textContent = '반갑습니다';
  openModal();
});

closeBtn.addEventListener('click', closeModal);

// 모달 밖(배경) 클릭 시 닫기
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// ESC 키로 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});
