console.log("Basic JavaScript");

//conditional JavaScirpt

/*let firstName = "John";
let isMarried = true;

if (isMarried){
    console.log (firstName + " is Married");
}else{
    console.log (firstName + " is not Married");
}
*/

/*
Jika umur <13 tahun maka tampilkan kategori anak-anak
Jika Umur 13 sampai 16 tampilkan kategoti remaja
jika umur 17 sampai 25 tampilkan kategori anakmuda
jika umur 26 sampai 50 tampilkan kategori orang dewasa
*/

/*let umur = 25;
if(umur < 13){
    console.log("Kategori anak-anak");
}else if(umur >= 13 && umur < 17){
    console.log("Kategori Remaja");
}else if(umur >= 17 && umur < 26){
    console.log("Kategori anak muda");
}else if (umur >=26 && umur <50){
    console.log("Kategori orang dewasa");
}
*/

/*let firtsName = "John";
let job = "teacher";

switch (job){
    case "teacher" :
        console.log(firtsName + " is a teacher");
        break;
    case "driver":
        console.log(firstName + " is a driver");
        break;
    case "instructor" :
        console.log(firstName + " is a instructor");
        break;
    default:
        console.log(firstName + " does something else");
        break;
}*/


/*let umur = 25;

if(umur < 13){
    console.log("Kategori anak-anak");
}else if(umur >= 13 && umur < 17){
    console.log("Kategori Remaja");
}else if(umur >= 17 && umur < 26){
    console.log("Kategori anak muda");
}else if (umur >=26 && umur <50){
    console.log("Kategori orang dewasa");
}
*/

/*switch(true)
{
    case umur < 13:
        console.log("Kategori anak-anak");
        break;
    case umur >= 13 && umur < 17:
        console.log("Kategori Remaja");
        break;
    case umur >= 17 && umur < 26:
        console.log("Kategori anak muda");
        break;
    case umur >=26 && umur <50:
        console.log("Kategori orang dewasa");
        break;
    default:
        console.log("Tidak ada dalam range");  
}*/

// JavaScript Function

/*function helloWorld() {
    console.log("hello world function declaration");
}*/
let age = 30;
let helloWorld = function(nama){
    
    console.log("Hello nama saya " + nama + ". Umur saya adalah " + age + " tahun." );
};

console.log(age);

helloWorld("Chrisatbella Kainama");