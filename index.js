const ChatApp = require('./chat');

let webinarChat =  new ChatApp('webinar');
let facebookChat = new ChatApp('=========facebook');
let vkChat =       new ChatApp('---------vk');

let chatOnMessage = (message) => {
  console.log(message);
};

webinarChat.on('message', chatOnMessage);
facebookChat.on('message', chatOnMessage);
vkChat.on('message', chatOnMessage);


// Добавить обработчик события message для Чата Вебинара (webinarChat), который выводит в консоль сообщение 'Готовлюсь к ответу'.
// Обработчик создать в отдельной функции
let chatOnMessageModified = () => {
  console.log('Готовлюсь к ответу');
};
webinarChat.on('message', chatOnMessageModified);

// Для Вконтакте (vkChat) установить максимальное количество обработчиков событий, равное 2
vkChat.setMaxListeners(2);

// Добавить обработчик 'Готовлюсь к ответу' из пункта 1.1 к чату Вконтакте
vkChat.on('message', chatOnMessageModified);

// Для чата вконтакте (vkChat) добавить обработчик close, выводящий в консоль текст "Чат вконтакте закрылся :("
vkChat.on('close', () => {
  console.log('Чат вконтакте закрылся :(');
});

// Вызывать у чата вконтакте метод close()
vkChat.close();

// Добавить код, который через 30 секунд отписывает chatOnMessage от вебинара webinarChat
setTimeout( ()=> {
  console.log('Закрываю вебинар...');
  webinarChat.removeListener('message', chatOnMessage);
}, 30000 );


// Закрыть вконтакте
setTimeout( ()=> {
  console.log('Закрываю вконтакте...');
vkChat.removeListener('message', chatOnMessage);
}, 10000 );


// Закрыть фейсбук
setTimeout( ()=> {
  console.log('Закрываю фейсбук, все внимание — вебинару!');
facebookChat.removeListener('message', chatOnMessage);
}, 15000 );