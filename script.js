const burger = document.getElementById('burger');
const nav = document.getElementById('mainNav');
const header = document.querySelector('.header');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

window.addEventListener('scroll', () => {
  if (!header) return;
  header.style.boxShadow = window.scrollY > 20 ? '0 10px 30px rgba(0,0,0,.22)' : 'none';
});

const accordionGroups = document.querySelectorAll('.accordion-groups');
accordionGroups.forEach((group) => {
  const details = group.querySelectorAll('details');
  details.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      details.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
});

const faqItems = document.querySelectorAll('.faq-list details');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const casesData = {
  babiplus: {
    title: 'БэбиПлюс',
    type: 'Корпоративный сайт медицинского центра',
    years: '5 лет поддержки и развития',
    since: 'Работаем с 2019 года',
    summary: 'Семейный медицинский центр. Проекту требовалась постоянная поддержка и развитие, чтобы быстро вносить изменения и сохранять стабильную работу ключевых разделов сайта.',
    important: 'Для медицинского сайта важно регулярно обновлять информацию, быстро вносить изменения в разделы и поддерживать стабильную работу сайта для пациентов.',
    tags: ['медицина', 'корпоративный сайт', 'долгосрочное сопровождение'],
    services: [
      'Техническая и информационная поддержка',
      'Поисковое (SEO) продвижение',
      'Контекстная реклама',
      'Разработка сайтов',
      'Редизайн'
    ],
    video: '#'
  },
  terem: {
    title: 'Мебельный Терем',
    type: 'Мебельный интернет-магазин',
    years: '13 лет поддержки и развития',
    since: 'Работаем с 2011 года',
    summary: 'Крупный мебельный интернет-магазин с долгой историей. Важно вести системную поддержку и развитие, чтобы обновления и задачи по сайту выполнялись без задержек.',
    important: 'Для крупного интернет-магазина важно поддерживать актуальность каталога, быстро вносить изменения в контент и рекламные материалы и не тормозить продажи из-за технических задержек.',
    tags: ['интернет-магазин', 'e-commerce', 'долгосрочное сопровождение'],
    services: [
      'Техническая и информационная поддержка',
      'Поисковое (SEO) продвижение',
      'Контекстная реклама',
      'Разработка сайтов',
      'Редизайн',
      'Копирайт'
    ],
    video: '#'
  },
  gkb29: {
    title: 'ГКБ №29 им. Н.Э. Баумана',
    type: 'Корпоративный сайт больницы',
    years: '4 года поддержки и развития',
    since: 'Работаем с 2019 года',
    summary: 'Крупный сайт больницы, где нужна регулярная поддержка и развитие структуры. Команда ведёт проект системно и помогает внедрять обновления без хаоса.',
    important: 'Для крупного сайта больницы важны стабильная работа, развитие структуры, создание новых разделов и удобное обновление информации для посетителей.',
    tags: ['медицина', 'корпоративный сайт', 'долгосрочное сопровождение'],
    services: [
      'Техническая и информационная поддержка',
      'Поисковое (SEO) продвижение',
      'Контекстная реклама',
      'Разработка и проектирование новых разделов',
      'Смена CMS',
      'Ускорение работы'
    ],
    video: '#'
  },
  milana: {
    title: 'Milana Style',
    type: 'Интернет-магазин одежды',
    years: '6 лет поддержки и развития',
    since: 'Работаем с 2017 года',
    summary: 'Интернет-магазин одежды с постоянными сезонными обновлениями. Для проекта критична регулярная поддержка, скорость изменений и стабильная работа сайта.',
    important: 'Для интернет-магазина одежды важно регулярно обновлять визуал, поддерживать скорость работы и быстро вносить изменения под сезонные коллекции и акции.',
    tags: ['интернет-магазин', 'e-commerce', 'долгосрочное сопровождение'],
    services: [
      'Техническая и информационная поддержка',
      'Поисковое (SEO) продвижение',
      'Ускорение работы'
    ],
    video: '#'
  },
  tupai: {
    title: 'TUPAI',
    type: 'Интернет-магазин официального дилера',
    years: '10 лет поддержки и развития',
    since: 'Работаем с 2014 года',
    summary: 'Проект с ассортиментом и рекламной активностью, где важно системно развивать сайт и быстро запускать изменения без потери качества.',
    important: 'Для интернет-магазина с ассортиментом и рекламной активностью важно быстро обновлять страницы, поддерживать актуальность сайта и регулярно развивать его без хаоса.',
    tags: ['интернет-магазин', 'e-commerce', 'долгосрочное сопровождение'],
    services: [
      'Техническая и информационная поддержка',
      'Поисковое (SEO) продвижение',
      'Ускорение работы',
      'Контекстная реклама',
      'Редизайн'
    ],
    video: '#'
  },
  gavrilov: {
    title: 'Центр крови им. О.К. Гаврилова',
    type: 'Крупнейшее учреждение службы крови РФ',
    years: '7 лет поддержки и развития',
    since: 'Работаем с 2016 года',
    summary: 'Социально значимый проект с высокой ответственностью за актуальность информации и стабильность сайта. Поддержка ведётся как постоянный рабочий процесс.',
    important: 'Для социально значимого сайта важно, чтобы важная информация была актуальной, сайт работал стабильно, а нужные изменения вносились без задержек.',
    tags: ['медицина', 'корпоративный сайт', 'долгосрочное сопровождение'],
    services: [
      'Техническая и информационная поддержка',
      'Поисковое (SEO) продвижение',
      'Ускорение работы',
      'Редизайн'
    ],
    video: '#'
  }
};

const caseButtons = document.querySelectorAll('.case-item[data-case]');
const caseType = document.getElementById('caseType');
const caseTitle = document.getElementById('caseTitle');
const caseYears = document.getElementById('caseYears');
const caseSince = document.getElementById('caseSince');
const caseSummary = document.getElementById('caseSummary');
const caseImportant = document.getElementById('caseImportant');
const caseServicesList = document.getElementById('caseServicesList');
const caseTags = document.getElementById('caseTags');
const caseVideo = document.getElementById('caseVideo');
const caseVisualName = document.getElementById('caseVisualName');
const caseScrollServices = document.getElementById('caseScrollServices');
const caseServices = document.getElementById('caseServices');

function renderCase(caseKey) {
  const item = casesData[caseKey];
  if (!item) return;

  caseType.textContent = item.type;
  caseTitle.textContent = item.title;
  caseYears.textContent = item.years;
  caseSince.textContent = item.since;
  caseSummary.textContent = item.summary;
  caseImportant.textContent = item.important;
  caseVideo.href = item.video;
  caseVisualName.textContent = item.title;

  caseServicesList.innerHTML = item.services.map((service) => `<li>${service}</li>`).join('');
  caseTags.innerHTML = item.tags.map((tag) => `<span>${tag}</span>`).join('');
}

caseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const caseKey = button.dataset.case;
    caseButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderCase(caseKey);
  });
});

if (caseScrollServices && caseServices) {
  caseScrollServices.addEventListener('click', () => {
    caseServices.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const taskMoreButtons = document.querySelectorAll('.task-more-toggle');
taskMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.task-card-item');
    if (!card) return;
    card.classList.toggle('show-extra');
    button.textContent = card.classList.contains('show-extra') ? 'Скрыть' : 'Ещё задачи';
  });
});
