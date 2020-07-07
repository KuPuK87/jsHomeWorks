(_ => {
    window.addEventListener('load', _ => {

        // __________Работа с куки__________


        // document.cookie = 'user=Alex';
        // document.cookie = 'login=user-alex';

        // document.cookie = 'user=Bob';
        // document.cookie = 'login=user-bob'; 
        // document.cookie = 'info=' + encodeURIComponent('Далеко-далеко за словесными горами в стране.'); //так рекомендуется кодировать


        // console.log(decodeURIComponent('%D0%94%D0%B0%D0%BB%D0%B5%D0%BA%D0%BE-%D0%B4%D0%B0%D0%BB%D0%B5%D0%BA%D0%BE%20%D0%B7%D0%B0%20%D1%81%D0%BB%D0%BE%D0%B2%D0%B5%D1%81%D0%BD%D1%8B%D0%BC%D0%B8%20%D0%B3%D0%BE%D1%80%D0%B0%D0%BC%D0%B8%20%D0%B2%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B5.'));

        // document.cookie = 'user2=Peter; path=/news/post/post1';
        // document.cookie = 'user3=mike; domain=*.localhost';

        // let date = new Date(Date.now() + 20000);
        // date = date.toUTCString();


        // document.cookie = 'user4=Bill; expires=' + date; //срок действия куки в формате tue, 19 jan 2038 03:12:07 GMT

        // document.cookie = 'user5=Gates; max-age=20'; // существует куки 20сек

        // document.cookie = 'user6=Alex; secure'; // если был https - то была бы доступна

        // console.log(document.cookie);



        //__________Работа с session storage и local storage__________




        // setItem()  getItem() removeItem()  clear()   length




        // window.sessionStorage.setItem('user','Bob'); - установить новый ключ
        // window.localStorage.setItem('user','Alex');

        // window.sessionStorage.setItem('user2', 'Peter');
        // window.localStorage.setItem('user2','Bill');


        //    console.log(window.localStorage.getItem('user')); - получить ключ
        //    console.log(window.localStorage.getItem('user2'));
        //    console.log(window.sessionStorage.getItem('user2'));


        // window.sessionStorage.removeItem('user2');  - удаление ключей
        // window.localStorage.removeItem('user2');

        // window.localStorage.clear(); - очистка полностью
        // window.sessionStorage.clear();

        // window.sessionStorage.setItem('test1', '1');
        // window.sessionStorage.setItem('test2', '2');
        // window.sessionStorage.setItem('test3', '3');

        // window.localStorage.setItem('test1', '1');
        // window.localStorage.setItem('test2', '2');
        // window.localStorage.setItem('test3', '3');

        // console.log(window.localStorage.length);  // сколько ключей в хранилище
        // console.log(window.sessionStorage.length);

        // let keys = Object.keys(localStorage);  //получить имена ключей
        // console.log(keys);

        // for (let key of keys) {   // перебрать ключи и вывести их
        //     console.log(`${key}:${localStorage.getItem(key)}`);
        // }

        // console.log(localStorage);
        // console.log(sessionStorage);

    });

})();