// While Döngüleri

/* let i = 0; // Döngümüzün değişkenini artırmamız veya duuruma göre azalatmamız gerekiyor. Yoksa Sonsuz Döngü'ye gireriz.

while(i < 10){
    console.log(i);
    i++; // i += 1 veya i = i + 1 şeklinde de yazılabilir.
} */

/* let i = 10;

while(i > 0){
    console.log(i);
    //i--; // i -= 1 veya i = i - 1 şeklinde de yazılabilir.
    i -= 2;
} */


// Break ve Continue

let i = 0;

/* while(i < 10){
    console.log(i);
    if(i == 5){
        break;
    }
    i++;
} */

/* let i = 0;

while(i < 10){
    if(i == 3 || i ==5){ // 3 ile 5 olduğunda continue çalışacak ve döngünün en başına dönecek.
        i++;
        continue; // continue'dan önce artırma ve eksiltme işlemi yapmazsak Sonsuz Döngü'ye gireriz.
    }
    console.log(i);
    i++;
} */


// Do While döngüleri(İlk önce Do çalışır sonrasında while içinde koşul kontrol edilir.)

/* let i = 0;

do {
    console.log(i);
    i++;
}while(i < 10); */


// For Döngüleri

const langs = ["Python","Javascript","Java"];

/* let index = 0;

while(index < langs.length){
    console.log(langs[index]);
    index++;
} */

/*for(let index = 0;index < langs.length;index++){
    console.log(langs[index]); // Bu işleme iterasyon deniyor. Array'imizin tüm elemanları üzerinde geziniyoruz.
} */ 

// For Each metodu (Fonksiyonu)

/* langs.forEach(function(lang,index){
    console.log(lang,index);
}); */

// Map metodu (Fonksiyonu)

const users = [
    {name:"Mustafa",age:25},
    {name:"Zeynep",age:40},
    {name:"Ali",age:12}
];
const names = users.map(function(user){ // ["Mustafa","Zeynep","Ali"]
    return user.name;
});
const ages = users.map(function(user){ // ["25","40","12"]
    return user.age;
});
console.log(names);
console.log(ages); 

// For in döngüsü

const user = {
    name:"Mustafa",
    age:"25"
};

for(let key in user){ // Property'leri döndürecek.
    console.log(key,user[key]);
}