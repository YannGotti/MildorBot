

//let tg = window.Telegram.WebApp;
//tg.expand();


//LOCAL_ID = tg.initDataUnsafe.user.id

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
LOCAL_ID = getRandomInt(1, 100)

let data = {
    'id' : LOCAL_ID,
    'username': LOCAL_ID,
    'first_name' : 'tg.initDataUnsafe.user.first_name',
    'auth': true
}


createSocket(data)


