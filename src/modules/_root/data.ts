export const data = [
  {
    key: 'm1',
    text: 'Темнота... ',
    actions: [
      {
        key: 'm1a1',
        text: 'Открыть глаза',
        next: 'm2',
      },
    ],
  },
  {
    key: 'm2',
    text: 'Это не помогло. Даже если попытаться моргнуть раз или два, всё равно темно. Веки, словно свинцовые, ворочаются с неохотой, доставляя дискомфорт и жжение. Кажется, так проходит пару секунд (или минут?), пока с очередным вдохом ты не проваливаешься в ощущение падения в ледяную воду. Грудь сковывает жёстким кольцом невозможность вдохнуть, а кончики пальцев на руках и ногах покалывает не столько физическая боль, сколько проникающее до самого сердца чувство страха.',
    actions: [
      {
        key: 'm2a1',
        text: 'Прогнать!',
        next: 'm3',
      },
    ],
  },
  {
    key: 'm3',
    text: 'Резко, так же, как началось, наваждение заканчивается, оставляя тебя на холодном полу темной прихожей. В доме промозгло. Возможно именно это заставило тебя испытать это дискомфортное чувство при пробуждении. Что ж, спать на полу в любом случае не самое лучшее решение.',
    actions: [
      {
        key: 'm3a1',
        text: 'Осмотреться',
        next: 'm4',
      },
    ],
  },
  {
    key: 'm4',
    text: 'Придя в себя ты замечаешь, что на коже правой твоей руки играет тускловатый свет от кухонной лампы. А левой касается обёртка леденца, одного из многих, рассыпанных на пол из большой стеклянной вазы, едва удерживающейся на пузатом боку на краю комода, что выглядывает из дверного проёма в зал. А спереди густеет темнота, поднимается на второй этаж, пряча в себе одну за одной потёртые ступени лестницы.',
    actions: [
      {
        key: 'm4a1',
        text: 'Пойти в зал',
        next: 'm8',
      },
      {
        key: 'm4a2',
        text: 'Пойти в кухню',
        next: 'm9',
      },
      {
        key: 'm4a3',
        text: 'Выйти из дома',
        next: 'm5',
      },
    ],
  },
  {
    key: 'm5',
    text: 'Стоит тебе коснуться двери и открыть её, леденящий порывистый ветер тут же подхватывает её так, словно она - бумажный самолетик, вырывает из руки и с треском ударяет о внешнюю стену. Маленькие огни соседних домов скрыты в клубах поднимающейся и движущейся по улочке пыли. Она моментально попадает в нос, вызывая желание чихнуть, и стоит приоткрыть рот - скрипит на зубах отвратительно уличным привкусом.',
    actions: [
      {
        key: 'm5a1',
        text: 'Закрыть дверь',
        next: 'm6',
      },
      {
        key: 'm5a2',
        text: 'Ждать',
        next: 'm7',
      },
    ],
  },
  {
    key: 'm6',
    text: 'Кажется, погода нынче не летная. По крайней мере приодеться уж точно стоит перед тем, как пытаться сунуться наружу. С трудом возвращая себе контроль над дверью ты захлопываешь ее и снова оказываешься в хоть как-то защищенной от холода полутьме.',
    actions: [
      {
        key: 'm6a1',
        text: 'Осмотреться',
        next: 'm11',
      },
    ],
  },
  {
    key: 'm7',
    text: 'Чем дольше ты стоишь, тем больше понимаешь свою ошибку. Каждая секунда на пороге открытой двери в этот ледянной пылевой поток вместо ясности в голове, привносит только больше боли глазах и трудности в дыхании.',
    actions: [
      {
        key: 'm7a1',
        text: 'Закрыть дверь',
        next: 'm6',
      },
    ],
  },
  {
    key: 'm8',
    text: 'Взгляд на цветные фантики, озорно поглядывающие на тебя из темноты зала, заставляет тебя испытать дискомфортно-вяжущее чувство во рту - жажда начинается с кончика языка, щекочет нёбо и спускается к горлу, неприятно почёсывая его своими сухими пальцами. Кажется, чтобы мыслить хоть сколько-нибудь - стоит выпить воды.',
    actions: [
      {
        key: 'm8a1',
        text: 'Пойти на кухню',
        next: 'm9',
      },
    ],
  },
  {
    key: 'm9',
    text: 'Тебя манит тепло кухонного света. Кое какие полки на ней приоткрыты, а какие-то и вовсе распахнуты. Беспорядок кухонной утвари вторит расползающимся мыслям в твоей голове.',
    actions: [
      {
        key: 'm9a1',
        text: 'Попытаться собрать мысли',
        next: 'm10',
      },
    ],
  },
  {
    key: 'm10',
    text: 'Вроде бы за тобой никогда не была замечена такая неряшливость. Попытка вспомнить прошлые дни отдается в голову острой болью сродни похмелью. Кажется, вчера была выпивка. Но где, с кем?',
    actions: [
      {
        key: 'm10a1',
        text: 'Осмотреться',
        next: 'm12',
      },
    ],
  },
  {
    key: 'm11',
    text: 'Справа струится тускловатый свет от кухонной лампы. Слева дверной проём в зал, из которого выглядывает комод, с почти упавшей вазой. Спереди густеет темнота, поднимается на второй этаж, пряча в себе одну за одной потёртые ступени лестницы. Сзади тебя дверь на улицу.',
    actions: [
      {
        key: 'm4a1',
        text: 'Пойти в зал',
        next: 'm8',
      },
      {
        key: 'm4a2',
        text: 'Пойти в кухню',
        next: 'm9',
      },
      {
        key: 'm4a3',
        text: 'Выйти из дома',
        next: 'm5',
      },
    ],
  },
  {
    key: 'm12',
    text: 'Каллиграфическим почерком выведено на вложенном белоснежном листе:\nПривет, дорогуша! Мы так давно не виделись, что скажешь о выпивке? Я позвала наш старый кружок из колледжа! Все те, кого ты любишь! От тебя последние пол года ни слуху ни духу.Не ходишь на наши пятничные вечеринки, звонишь редко.Что уж говорить о свадьбе Майи?! Она вообще прошла мимо тебя.Нам кажется, что ты в некоторой депрессии, поэтому мы ждем тебя на выпивку вечером в четверг! И не сомневайся - если ты не придешь, мы все завалимся к тебе!',
    actions: [
      {
        key: 'm12a1',
        text: 'Далее',
        next: 'm17',
      },
    ],
  },
  {
    key: 'm13',
    text: 'TBD',
    actions: [
    ],
  },
  {
    key: 'm14',
    text: 'TBD [[Описание что есть в холодильнике кроме воды]]',
    actions: [
      {
        key: 'm14a1',
        text: 'Выпить прохладной воды',
        next: 'm16',
      },
      {
        key: 'm14a2',
        text: 'Отойти от холодильника',
        next: 'm15',
      },
    ],
  },
  {
    key: 'm15',
    text: 'Медленно перемещаясь по кухне ты замечаешь оставленный на столе открытый разноцветный конверт с торчащим из него письмом. Рядом с письмом ты видишь графин с водой. Заметив его, ты вспоминаешь, что во рту сухо, и было неплохо это исправить. В дальнем углу комнаты ты замечаешь небольшой холодильник.',
    actions: [
      {
        key: 'm15a1',
        text: 'Прочесть письмо',
        next: 'm12',
      },
      {
        key: 'm15a2',
        text: 'Выпить воду из графина',
        next: 'm13',
      },
      {
        key: 'm15a3',
        text: 'Заглянуть в холодильник',
        next: 'm14',
      },
    ],
  },
  {
    key: 'm16',
    text: 'TBD',
    actions: [
    ],
  },
  {
    key: 'm17',
    text: 'Теперь отрывки воспоминаний мелькают в твоей голове. Пришлось согласиться на эту стрёмную вечеринку, чтобы к тебе домой не завалилась чертова толпа бывших друзей. Они давно уже перестали быть друзьями, разделять общие интересы, уже женились и повыскакивали замуж! Тоже мне друзья. Разговоров только о пеленках, нянях и сортах молока. Другое дело она… Что? Кто “она”? Голова заходится неприятной болью, а в горле пересыхает до такой степени, что даже дыхание отзывается на слизистой жжением. По памяти тела ты подаешься к холодильнику за водой, но вдруг вспоминаешь про полный графин и стакан неподалеку. Было ли твоей привычкой наливать воду в графин? Сложно вспомнить',
    actions: [
    ],
  },
  {
    key: 'm18',
    text: 'TBD',
    actions: [
    ],
  },
];