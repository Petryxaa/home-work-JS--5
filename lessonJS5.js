// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
// 
//    }
//function Teg (neme,descriptionАction,arrayАttributes){
//this.neme;
//this.descriptionАction ; 
//this.arrayАttributes;
//};
//let a = new Teg();
//a.neme = '<a>';
//a.descriptionАction = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.'
//a.descriptionАction = ['accesskey-Активация ссылки с помощью комбинации клавиш','coords-Устанавливает координаты активной области.','download-Предлагает скачать указанный по ссылке файл.'];
//
//let div = new Teg();
//div.neme = ' <div>';
//div.descriptionАction = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.'
//div.arrayАttributes = ['align-Задает выравнивание содержимого тега <div>','title-Добавляет всплывающую подсказку к содержимому. ']; 
//
//let h1 = new Teg();
//h1.neme = ' <div>';
//h1.descriptionАction =  'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.'
//h1.arrayАttributes = ['align-Задает выравнивание содержимого тега <div>','title-Добавляет всплывающую подсказку к содержимому. '];
//
//let span = new Teg();
//span.neme = '<span>';
//span.descriptionАction = 'Элемент <samp> используется для отображения текста, который является результатом вывода компьютерной программы или скрипта. Браузеры обычно отображают текст в контейнере <samp> с помощью моноширинного шрифта.';
//span.arrayАttributes = ['Для этого тега доступны универсальные атрибуты и события.'];
//
//let input = new Teg();
//input.neme = '<input>';
//input.descriptionАction ='Tег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ';
//input.arrayАttributes = ['accept-Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов','accesskey - Переход к элементу с помощью комбинации клавиш.','align - Определяет выравнивание изображения'];
//
//let form = new Teg();
//input.neme = '<form>';
//input.descriptionАction = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. '; 
//input.arrayАttributes = ['accept-charset-Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.','action - Адрес программы или документа, который обрабатывает данные формы.'];
//
//let option = new Teg();
//option.neme = '<option>';
//option.descriptionАction = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.  '; 
//option.arrayАttributes = [' disabled - Заблокировать для доступа элемент списка.','label-Указание метки пункта списка.'];
//
//let select = new Teg();
//select.neme = '<select> ';
//select.descriptionАction = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
//select.arrayАttributes = ['accesskey-Позволяет перейти к списку с помощью некоторого сочетания клавиш. ','autofocus-Устанавливает, что список получает фокус после загрузки страницы.'];
//
//console.log(a,div,h1,span,input,form,option,select);
// ==============================================
// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
//
// class Teg {
//    constructor(neme,descriptionАction,arrayАttributes){
//        this.neme;
//        this.descriptionАction;
//        this.arrayАttributes; 
//    }
//    
// }
//let a = new Teg();
//a.neme = '<a>';
//a.descriptionАction = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.'
//a.descriptionАction = ['accesskey-Активация ссылки с помощью комбинации клавиш','coords-Устанавливает координаты активной области.','download-Предлагает скачать указанный по ссылке файл.'];
//
//let div = new Teg();
//div.neme = ' <div>';
//div.descriptionАction = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.'
//div.arrayАttributes = ['align-Задает выравнивание содержимого тега <div>','title-Добавляет всплывающую подсказку к содержимому. ']; 
//
//let h1 = new Teg();
//h1.neme = ' <div>';
//h1.descriptionАction =  'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.'
//h1.arrayАttributes = ['align-Задает выравнивание содержимого тега <div>','title-Добавляет всплывающую подсказку к содержимому. '];
//
//let span = new Teg();
//span.neme = '<span>';
//span.descriptionАction = 'Элемент <samp> используется для отображения текста, который является результатом вывода компьютерной программы или скрипта. Браузеры обычно отображают текст в контейнере <samp> с помощью моноширинного шрифта.';
//span.arrayАttributes = ['Для этого тега доступны универсальные атрибуты и события.'];
//
//let input = new Teg();
//input.neme = '<input>';
//input.descriptionАction ='Tег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ';
//input.arrayАttributes = ['accept-Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов','accesskey - Переход к элементу с помощью комбинации клавиш.','align - Определяет выравнивание изображения'];
//
//let form = new Teg();
//input.neme = '<form>';
//input.descriptionАction = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. '; 
//input.arrayАttributes = ['accept-charset-Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.','action - Адрес программы или документа, который обрабатывает данные формы.'];
//
//let option = new Teg();
//option.neme = '<option>';
//option.descriptionАction = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.  '; 
//option.arrayАttributes = [' disabled - Заблокировать для доступа элемент списка.','label-Указание метки пункта списка.'];
//
//let select = new Teg();
//select.neme = '<select> ';
//select.descriptionАction = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
//select.arrayАttributes = ['accesskey-Позволяет перейти к списку с помощью некоторого сочетания клавиш. ','autofocus-Устанавливает, что список получает фокус после загрузки страницы.'];
//
//console.log(a,div,h1,span,input,form,option,select);
//

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
//let car = {
//
//model : 'Toyota',
//manufacturer :"Japan",
//year : 2020,
// maximumSpeed : 320,
// volume : 5.5,
// driverName : "Ivan ",
// 
//info: function(){
//    console.log(`model : ${this.model},
//    manufacturer : ${this.manufacturer},
//    year : ${this.year},
//        maximumSpeed : ${this.maximumSpeed},
//        volume : ${this.volume},
//        drivers: ${this.driverName} `);
//    },
//
//    drive: function(){
//        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//       },  
//    increaseMaxSpeed : function(newSpeed){
//     this.maximumSpeed += newSpeed ;
//     console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//    },
//    
//    changeYear(newValue){
//        this.year = newValue ; 
//        console.log(`model : ${this.model},
//        manufacturer : ${this.manufacturer},
//        year : ${this.year},
//            maximumSpeed : ${this.maximumSpeed},
//            volume : ${this.volume},
//            drivers: ${this.driverName} `);   
//    },
//    
//    addDriver(driver){
//       this.driverName = driver;
//       console.log(`model : ${this.model},
//       manufacturer : ${this.manufacturer},
//       year : ${this.year},
//           maximumSpeed : ${this.maximumSpeed},
//           volume : ${this.volume},
//           drivers: ${this.driverName} `); 
//    }
//
//}
//car.info();
//car.drive();
//car.increaseMaxSpeed(-50);
//car.changeYear("1997");
//car.addDriver('Vaska');
//
// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, 
//з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// 
// function Car (){
// 
// this.model;
// this.vurobnuk;
// this.year;
// this.maximumSpeed ;
// this.volumePawer ;
// this.drive = function(){
    // console.log(`їдемо зі швидкістю ${this.maximumSpeed} `);
// }
// this.info = function(){
    // console.log(`model : ${this.model},
    // vurobnuk : ${this.vurobnuk},
    // year : ${this.year},
    // maximumSpeed : ${this.maximumSpeed},
    // volume : ${this.volumePawer},
    // driver: ${this.driver} `);
// }
// 
// this.increaseMaxSpeed = function (newSpeed){
    // this.maximumSpeed += newSpeed; 
    // console.log(`А зараз їдемо зі швидкістю ${this.maximumSpeed} на годину`)
// }
// 
// this.changeYear = function (newValue){
    // this.year = newValue;
    // console.log(`New year - ${this.year} year`)
    // 
// }
// 
// this.addDriver = function (driver){
            //  this.drive = driver
            //  console.log(`Новий водій  ${this.drive}`);
// }
// }
// 
// let toyota = new Car();
// toyota.model = "Prado";
// toyota.vurobnuk ='Ukraine' ;
// toyota.year  = "2050";
// toyota.maximumSpeed = 320;
// toyota.volumePawer = 1900;
// toyota.driver = 'Anton';
// toyota.info();
// toyota.drive();
// 
// toyota.increaseMaxSpeed(10);
// toyota.addDriver('Ivan');
// toyota.changeYear(2051);
// 
 
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
//додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// 
// class Car{
// constructor (){
// 
    // this.model;
    // this.vurobnuk;
    // this.year =2000;
    // this.maximumSpeed ;
    // this.volumePawer ;
    // 
// 
    // this.driver = function(){
        // console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину"`);
    // }
    // this.info = ()=>{
// console.log(`
    //    модель : ${this.model}
    //    виробник : ${this.vurobnuk}
    //    рік :  ${this.year}  
    //    максимальна швидкість : ${this.maximumSpeed}
    //    обєм двигуна : ${this.volumePawer}
    //    водій : ${this.drivers}`);
    // }
// 
// this.increaseMaxSpeed =  (newSpeed) =>{
// this.maximumSpeed += newSpeed;
// return this.maximumSpeed;
// } 
// this.changeYear =  (newValue) => {
// this.year = newValue;
// return this.year;
// 
// }
// this.addDriver =  (driver) =>{
    //    this.drivers = driver;
// }
// }
// }
// let toyota = new Car();
    // toyota.model = "Cemry";
    // toyota.vurobnuk = 'USA';
    // toyota.year = 2000
    // toyota.maximumSpeed = 300;
    // toyota.volumePawer  = "5.0";
    // toyota.drivers;
// 
// toyota.addDriver('Ivan')
// toyota.changeYear(2020);
// toyota.increaseMaxSpeed(222)
// toyota.info();
// toyota.driver();
// 
// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
//class Humen {
//    constructor (name,age){
//        this.name = name ;
//        this.age = age ;
//    }
//}
//
//class Cinderella extends Humen {
//    constructor(name,age,footSize){
//        super(name,age);
//        this.footSize = footSize;
//    }
//}
//
//let nataxa = new Cinderella ('Nataxa',27,32);
//let lyda = new Cinderella("Lyda",22,32);
//let gala = new Cinderella("Gala",13,33);
//let ana = new Cinderella("Ana",18,45);
//let lenka = new Cinderella("Lenka",17,38);
//let zina = new Cinderella("Zinka" , 40,30);
//let svitlana = new Cinderella("Svitlana",33,39);
//let vika = new Cinderella('Vika',33,44);
//let muroska = new Cinderella('Muroska',22,33);
//let  fox = new Cinderella ('Fox',22,33);
//let array = [nataxa,lyda,gala,ana,lenka,zina,svitlana,vika,muroska,fox];
//
//class Prince extends Humen{
//    constructor (name,age, shoeSize){
//        super(name,age)
//        this.shoeSize = shoeSize || 'No footSize';
//        
//        this.faundCinderlla  = (array) =>{
//            let find;
//            for (let item of array){
//                if(item.footSize === this.shoeSize){
//                    find = item;
//                }
//            }
//            if(find){
//                console.log('My cinderella name ' + find.name)
//            }else{
//                console.log('NO cinderela')
//            }
//        }
//    }
//}
//
//let prins = new Prince("ivan",19,45);
//prins.faundCinderlla(array);
//    
//    
  
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
//function Cinderella(name,age,shoeSize){
//    this.name=name;
//    this.age =age;
//    this.shoeSize =shoeSize;
//}
//let nataxa = new Cinderella ('Nataxa',27,32);
//let lyda = new Cinderella("Lyda",22,32);
//let gala = new Cinderella("Gala",13,33);
//let ana = new Cinderella("Ana",18,45);
//let lenka = new Cinderella("Lenka",17,38);
//let zina = new Cinderella("Zinka" , 40,30);
//let svitlana = new Cinderella("Svitlana",33,39);
//let vika = new Cinderella('Vika',33,44);
//let muroska = new Cinderella('Muroska',22,33);
//let  fox = new Cinderella ('Fox',22,33);
//const array = [nataxa,lyda,gala,ana,lenka,zina,svitlana,vika,muroska,fox];
//
//function Prunc (name,age,foundShoe){
//    this.name = name;
//    this.age = age;
//    this.foundShoe = foundShoe;
//    this.found = (array)=>{
//        let find;
/////////////////////////////////////////////////////////////// я не зрозумів ---- я вивожу всіх.... чому так???Поясніть...    
//        for (let item of array){
//            if(item.foundShoe === this.shoeSize){
//                find = item ;
//
//                if(find){
//                console.log('My cinderella name ' + find.name )
//            }
//            else{
//                console.log('No!!')
//            }
//        }
//    }
//}
//}
//let vaska = new Prunc('Vaska',18,33);
//vaska.found(array);
//
//
//












