const loc = {
  "home": {
    "eng": "<img src=\"./images/eng/home.png\" style=\"height: 80px;width: 113px;\">",
    "rus": "<img src=\"./images/rus/home.png\" style=\"height: 80px;width: 113px;\">",
    "bel": "<img src=\"./images/bel/home.png\" style=\"height: 80px;width: 113px;\">"
  },
  "hm": {
    "eng": "<img src=\"./images/eng/hm.png\" style=\"height: 80px;width: 113px;\">",
    "rus": "<img src=\"./images/rus/hm.png\" style=\"height: 80px;width: 113px;\">",
    "bel": "<img src=\"./images/bel/hm.png\" style=\"height: 80px;width: 113px;\">"
  },
  "works": {
    "eng": "<img src=\"./images/eng/works.png\" style=\"height: 80px;width: 113px;\">",
    "rus": "<img src=\"./images/rus/works.png\" style=\"height: 80px;width: 113px;\">",
    "bel": "<img src=\"./images/bel/works.png\" style=\"height: 80px;width: 113px;\">",
  },
  "about": {
    "eng": "<img src=\"./images/eng/about.png\" style=\"height: 80px;width: 113px;\">",
    "rus": "<img src=\"./images/rus/about.png\" style=\"height: 80px;width: 113px;\">",
    "bel": "<img src=\"./images/bel/about.png\" style=\"height: 80px;width: 113px;\">"
  },
  "minsk": {
  	"eng": "Minsk",
    "rus": "Минск",
    "bel": "Мінск"
  },
  "greet": {
  	"eng": "Hi! I'm an illustrator and 2D animator from Minsk. Please contact me through <a href=\"naka.seka@mail.ru\">naka.seka@mail.ru</a> if I can be of value to your project. I will happy to working with you!",
    "rus": "Привет! Я иллюстратор и 2D аниматор из Минска. Пожалуйста, обращайтесь ко мне <a href=\"naka.seka@mail.ru\">naka.seka@mail.ru</a>, если я могу быть полезна в вашем проекте. Буду счастлива поработать с вами!",
    "bel": "Прывітанне! Я ілюстратар и 2D аніматар з Мінску. Калі ласка, звяртайцеся да мяне <a href=\"naka.seka@mail.ru\">naka.seka@mail.ru</a>, калі я магу быць карыснай у вашым праекце. Буду шчаслівая папрацаваць з вамі!"
  }
};
 
const applyL10n = (lang) => {
  $('[data-l10n]').each((i, el) => {
    const key = $(el).attr("data-l10n");
		if(key){
     const loctext = loc[key][lang];
     $(el).html(loctext);
    }
  })
};


$(".btn-rus").click((e) => {
	applyL10n("rus");
});

$(".btn-eng").click(() => {
	applyL10n("eng");
});

$(".btn-bel").click(() => {
	applyL10n("bel");
});

$(".lang-pad .btn").click( e => {
    $(".lang-pad .btn").removeClass("selected");
    $(e.currentTarget).addClass("selected");
});

