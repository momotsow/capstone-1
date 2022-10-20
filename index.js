const mobileBtn = document.getElementById('mobileMenu');

const nav = document.querySelector('.nav-list');

const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

nav.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

// Read more btn
const moreText = document.getElementById('more');
const toggle = document.getElementById('toggle');

function ReadMore() {
  if (moreText.style.display !== 'none') {
    toggle.innerHTML = 'MORE';
    moreText.style.display = 'none';
  } else {
    toggle.innerHTML = 'LESS';
    moreText.style.display = 'block';
  }
}

ReadMore();

// dynamic page
const speakersObj1 = [
  {
    Image: 'images/speaker1.jpg',
    name: 'Jack Maphosa',
    caption: 'Enterprenuer.',
    discription: 'I believe we should all concern ourselves with the economy of the world.',
  },

  {
    Image: 'images/speaker2.jpg',
    name: 'Ntombi Zulu',
    caption: 'Mentor',
    discription: 'You can never be too old to learn new tricks',
  },
];

const section = document.querySelector('#dynamic-page');
speakersObj1.forEach((speaker1) => {
  const div = document.createElement('div');
  div.className = 'speak';
  div.innerHTML = `
        <img src="${speaker1.Image}" alt="first speaker">

        <div>
            <p>${speaker1.name}</p>
            <cite>${speaker1.caption}</cite>
        </div>

        <div>
            <blockquote>${speaker1.discription}</blockquote>
        </div>
    `;
});

speakersObj1.forEach((speaker1) => {
  window.addEventListener('load', () => {
    const popUpSection = document.createElement('section');
    popUpSection.classList.add('col-md-6','col-sm-12', 'col-lg-6','col-sm-12');
    popUpSection.innerHTML = `
            <div class="speakers">
                <div class="speak-cont col-md-3">
                    <img src="${speaker1.Image}" alt="first speaker" class="speakers-img">
                </div>
                <div class="col-md-9 ml-5">
                    <div class="box">
                        <p class="speaker-name">${speaker1.name}</p>
                        <cite class="speaker-cap">${speaker1.caption}</cite>
                    </div>
                    <hr class="grey-line">
                    <div class="box1">
                        <blockquote class="speaker-desc">${speaker1.discription}</blockquote>
                    </div>
                </div>
            </div>
        `;

    section.appendChild(popUpSection);
  });
});

const speakersObjMore = [
  {
    Image: 'images/speaker3.jpg',
    name: 'Thabo Zuma',
    caption: 'Mentor',
    discription: 'I offer a hand where I can because nobody offered me one.',
  },

  {
    Image: 'images/speaker4.jpg',
    name: 'Musa Shai',
    caption: 'Podcast Owner',
    discription: 'My passion lies in educating everyone on what the education system failed to teach them.',
  },

  {
    Image: 'images/speaker5.jpg',
    name: 'Themba Tau',
    caption: 'Tech-slayer',
    discription: 'Everyone should learn how to code, because the fure depends on it',
  },

  {
    Image: 'images/speaker6.jpg',
    name: 'Lebo Boa',
    caption: 'Tech-prenuer',
    discription: 'You do not need formal education to make it in life, all you need is determination',
  },
];

const section2 = document.querySelector('#more');
speakersObjMore.forEach((speaker1) => {
  const div = document.createElement('div');
  div.className = 'speak';
  div.innerHTML = `
        <img src="${speaker1.Image}" alt="first speaker">

        <div>
            <p>${speaker1.name}</p>
            <cite>${speaker1.caption}</cite>
        </div>

        <div>
            <blockquote>${speaker1.discription}</blockquote>
        </div>
    `;
});

speakersObjMore.forEach((speaker1) => {
  window.addEventListener('load', () => {
    const popUpSection = document.createElement('section');
    popUpSection.classList.add('col-md-6','col-sm-12', 'col-lg-6','col-sm-12');
    popUpSection.innerHTML = `
            <div class="speakers">
                <div class="speak-cont col-3">
                    <img src="${speaker1.Image}" alt="first speaker" class="speakers-img">
                </div>
                <div class="col-9 ml-5">
                    <div class="box">
                        <p class="speaker-name">${speaker1.name}</p>
                        <cite class="speaker-cap">${speaker1.caption}</cite>
                    </div>
                    <hr class="grey-line">
                    <div class="box1">
                        <blockquote class="speaker-desc">${speaker1.discription}</blockquote>
                    </div>
                </div>
            </div>
        `;

    section2.appendChild(popUpSection);
  });
});