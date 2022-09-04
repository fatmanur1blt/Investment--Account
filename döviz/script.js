var yatirim=document.querySelectorAll("#yatirim");
var kullanici=document.querySelectorAll("#kullanici");
var sifre=document.querySelectorAll("#sifre");


function kontrol(){
var kullanici = document.getElementById('kullanici').value;
var sifre = document.getElementById('sifre').value;
var yatirim = document.getElementById('yatirim').value;


if(kullanici=="fatma" && sifre==1234)
{
    alert('başarılı bir şekilde giriş yaptınız:'); 
}
else 
{
    alert('Kullanıcı adı veya şifre yanlış tekrar deneyiniz:'); 
} 
}

/*
const api = 'https://api.genelpara.com/embed/para-birimleri.json'
 function getData(api)
{
    fetch(api)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.rates);

        const TRY = data.rates.TRY;
        const EUR = TRY / data.rates.EUR;
        const USD = TRY / data.rates.USD;
        const GBP = TRY / data.rates.GBP;

        setData(EUR,USD,GBP);
    })
    .catch((err) => console.warn(err));
}

function setData(EUR,USD,GBP){
    var euro = document.getElementById("#euro");
    var dolar = document.getElementById("#dolar");
    var sterlin = document.getElementById("#sterlin");

    euro.textContent = EUR;
    dolar.textContent = USD;
    sterlin.textContent = GBP;
}
getData(api);
*/



