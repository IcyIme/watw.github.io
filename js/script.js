let btnRandom = document.querySelector('button');
let result = document.querySelector('h3');
let users = ['Death note', 'A silent voice', 'A whisker away', 'Spirited away', 'Modest heroes', 'Princess mononoke', 'My neighbor Totoro', 'My neighbor Totoro'
,'Dragon quest your story','Words bubble up like soda pop','Shiki','Tokyo Ghoul','Sk8 And Infinity','Haikyuu','Demon slayer','Mirai Nikki',
'Plunderer','Kemono jihen','Castlevania','My hero academia','Naruto','Black clover','One pice','Hunter x hunter','Fullmetal alchemist brotherhood',
'Fire force','7 deadly sins','Sword art online','Assasination Classroom','Bungou Stray Dogs','Attack on titan','A certain magical index','The ancient magus bride',
'Bunny girl senpai','Food wars','Jujutsu kaisen','Kakegurvi','Angels Of Death','One punch man','Tokyo Revengers','Charlotte','Sirius the Jaeger',
'Toilet bound hanako kun','Rising on the shield hero','Darling in the franxx','The promised neverland','Great pretender','High-rise invasion',
'Ultramarime magmell','Gleipnir','Violet evergarden','The daily life of the immortal','king','Owari no Seraph','Another','Re:Creators',
'Re:Zero','Akashic records','Nanbaka','The millionaire detective','The stranger by the beach'

];
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
});