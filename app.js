
//! concat() method..................................................................
//? const arr1 = ["metin", "murad", "ali"];
//? const arr2 = ["araz", "adil", "amil"];
//? const arr3 = ["malik", "mahir", "nesib"];

//? const arr4 = [1, 2, [3, 4]];
//? const arr5 = [[5, 6], 7, 8];
//? const arr6 = arr4.concat(arr5);

//? const children = arr1.concat(arr2, arr3);

//? console.log(children);





//! join() method......................................................................
//? const fruits = ["banan", "alma", "armud"];

//? let text = fruits.join(" and ")                 //todo default deyeri verguldu

//? console.log(text);




//! slice() method.....................................................................
//? const fruits = ["banan", "alma", "armud", "heyva", "limon", "gilas"];

//? const citrus = fruits.slice(0, 3);
//? const citrus = fruits.slice(-3, -1);
//? const citrus = fruits.slice();
//? console.log(citrus);





//! splice() method.....................................................................
//todo  Mənfi dəyər massivin sonundan mövqeyi müəyyən edir
//? const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

//? fruits.splice(2, 0, "lemon", "armud");       //todo 2-ci movqeden baslayaraq "lemon" ve "armud"-u elave et

//? fruits.splice(2, 1, "lemon", "armud");       //todo 2-ci movqeden baslayaraq once "Apple" sil daha sonra "lemon" ve "armud"-u elave et

//? fruits.splice(2, 2);                        //todo    2-ci movqeden basla iki element sil

//? console.log(fruits);





//! copyWithin() method...................................................................
//? const fruits = ["Banana", "Orange", "Apple", "Mango", "kiwi"];

//? fruits.copyWithin(2, 0);            //todo Massivin ilk iki elementini son iki massiv elementinə kopyalayın:

//? fruits.copyWithin(2, 0, 2);           //todo İlk iki massiv elementini üçüncü və dördüncü mövqeyə köçürün:

//? console.log(fruits);





//! constructor  method..................................................................
//todo    constructor Array prototipini yaradan funksiyanı qaytarır.
//? const fruits = ["Banana", "Orange", "Apple", "Mango"];
//? let text = fruits.constructor;
//?
//? console.log(text);





//! entries() method.....................................................................
//? const fruits = ["Banana", "Orange", "Apple", "Mango"];
//? const f = fruits.entries();

//? console.log(f)





//! every()  method.......................................................................
//todo    Metod every()hər massiv elementi üçün funksiya yerinə yetirir.
//todo    Funksiya bütün elementlər üçün true dəyərini qaytararsa, metod every()qaytarır .true
//todo    Əgər funksiya bir element üçün false qaytarırsa, metod every()qaytarır .false
//todo    Metod every()boş elementlər üçün funksiyanı yerinə yetirmir.
//todo    Metod every()orijinal massivi dəyişmir

//? const ages = [32, 33, 11, 40];
//? ages.every(checkAge)

//? function checkAge(age) {?
//? return age > 18;
//? };

//? console.log(ages.every(checkAge))
//? checkAge();





//! fill() method...........................................................................
//todo   Metod fill()massivdə müəyyən edilmiş elementləri dəyərlə doldurur.
//todo   Metod fill()orijinal massivin üzərinə yazır.
//todo   Başlanğıc və son mövqe müəyyən edilə bilər. Əks halda, bütün elementlər doldurulacaq.
//todo   const fruits = ["Banana", "Orange", "Apple", "Mango"];

//? fruits.fill("Kiwi");                          //todo butun elementleri "kiwi" ile evez edecek
//? fruits.fill("Kiwi", 2, 4);                    //todo son iki elementleri "kiwi" ile evez edecek

//? console.log(fruits);






//! filter() method.........................................................................
//todo        Metod filter()funksiya tərəfindən təmin edilən testdən keçən elementlərlə dolu yeni massiv yaradır.
//todo        Metod filter()boş elementlər üçün funksiyanı yerinə yetirmir.
//todo        Metod filter()orijinal massivi dəyişmir.

//?  const ages = [32, 33, 16, 40];
//?  const result = ages.filter(checkAdult);          //todo 18 və ya daha yuxarı olan yaş[] bütün dəyərlər massivini qaytarın:

//?  function checkAdult(age) {
//? return age >= 18;
//?  };

//?  console.log(result);





//! find() method........................................................................
//todo       Metod find()testdən keçən ilk elementin dəyərini qaytarır.
//todo       Metod find()hər massiv elementi üçün funksiya yerinə yetirir.
//todo       Heç bir element tapılmadıqda metod find()geri qayıdır .undefined
//todo       Metod find()boş elementlər üçün funksiyanı yerinə yetirmir.
//todo       Metod find()orijinal massivi dəyişmir.

//? const ages = [3, 10, 29, 20];

//? function checkAge(age) {
//?     return age > 18;
//? }

//? result = ages.find(checkAge);  //todo  Qiyməti 18-dən yuxarı olan birinci elementin dəyərini tapın:

//? console.log(result);







//! findIndex() method...............................................................
//todo        Metod findIndex()hər massiv elementi üçün funksiya yerinə yetirir.
//todo        Metod findIndex()testdən keçən ilk elementin indeksini (mövqeyini) qaytarır.
//todo        findIndex()Heç bir uyğunluq tapılmadıqda metod -1 qaytarır .
//todo        Metod findIndex()boş massiv elementləri üçün funksiyanı yerinə yetirmir.
//todo        Metod findIndex()orijinal massivi dəyişmir.

//? const ages = [3, 10, 18, 20];

//? ages.findIndex(checkAge);   //todo  18-dən çox dəyəri olan ilk elementin indexsini tapır

//? function checkAge(age) {?
//? return age > 18;
//? }

//? console.log(ages.findIndex(checkAge));






//! forEach() method....................................................................
//todo           Metod forEach()massivdəki hər bir element üçün funksiya çağırır.
//todo           Metod forEach()boş elementlər üçün icra edilmir.

//? const fruits = ["apple", "orange", "cherry"];

//? fruits.forEach(myFunction);         //todo Meyvələrdəki hər bir element üçün funksiya çağırır:



//?  let sum = 0;
//?  const numbers = [65, 44, 12, 4];
//?  numbers.forEach(myFunction);
//?  
//?  function myFunction(item) {
//?     sum += item;
//?  }
//?  console.log(sum);



//? const numbers = [65, 44, 12, 4];
//? numbers.forEach(myFunction)
//? 
//? function myFunction(item, index, arr) {?
//?    arr[index] = item * 10;
//? };

//? console.log(numbers);





//! from()  method......................................................................
//todo         Metod Array.from()uzunluq xassəsinə malik istənilən obyektdən massivi qaytarır.
//todo         Metod Array.from()istənilən təkrarlana bilən obyektdən massivi qaytarır.

// Array.from("ABCDEFG");   //todo Sətirdən massiv yaradır.



let data = [
    { name: 'daniel', age: 45 },
    { name: 'john', age: 34 },
    { name: 'robert', age: null },
    { name: 'jen', age: undefined },
    { name: null, age: undefined }
];

function myFunc(name, age) {
    if ((name == null || age == null) || (name == undefined || age == undefined)) {
        return data[1];
    }
}

myFunc();
