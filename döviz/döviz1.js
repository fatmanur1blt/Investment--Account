var sayi1=document.querySelectorAll('#sayi1');
var sayi2=document.querySelectorAll('#sayi2');
var sayi1=document.querySelectorAll('#bakiye');
var sayi1 = document.getElementById('sayi1').value;
var sayi2 = document.getElementById('sayi2').value;


function islem1()
{
var x=prompt("Lütfen almak istediğiniz dolar miktarını giriniz:");

if(x*17.94>sayi1)
{
    alert('Yeterli Tl bakiyeniz bulunmamaktadır.'); 
}
else
{ 
    var a=sayi1-(x*17.94);  
    alert("Güncel TL Bakiyeniz = "+a+" TL"); 
    var b=(sayi2*1)+(x*1);
    alert("Güncel Dolar Bakiyeniz = "+b+" USD");  
}
}

function islem2()
{
var y=prompt("Lütfen satmak istediğiniz dolar miktarını giriniz:");

if(y>sayi2)
{
    alert('Yeterli dolar bakiyeniz bulunmamaktadır.'); 
}
else
{ 
    var c=(sayi1*1)+(y*17.94);  
    alert("Güncel TL Bakiyeniz = "+c+" TL"); 
    var d=sayi2-(y*1);
    alert("Güncel Dolar Bakiyeniz = "+d+" USD");  
}
}

function islem3()
{
var x=prompt("Lütfen almak istediğiniz euro miktarını giriniz:");

if(x*18.41>sayi1)
{
    alert('Yeterli Tl bakiyeniz bulunmamaktadır.'); 
}
else
{ 
    var a=sayi1-(x*18.41);  
    alert("Güncel TL Bakiyeniz = "+a+" TL"); 
    var b=(sayi2*1)+(x*1);
    alert("Güncel Euro Bakiyeniz = "+b+" Euro");  
}
}

function islem4()
{
var y=prompt("Lütfen satmak istediğiniz euro miktarını giriniz:");

if(y>sayi2)
{
    alert('Yeterli Euro bakiyeniz bulunmamaktadır.'); 
}
else
{ 
    var c=(sayi1*1)+(y*18.41);  
    alert("Güncel TL Bakiyeniz = "+c+" TL"); 
    var d=sayi2-(y*1);
    alert("Güncel Euro Bakiyeniz = "+d+" Euro");  
}
}

function islem5()
{
var x=prompt("Lütfen almak istediğiniz Sterlin miktarını giriniz:");

if(x*21.78>sayi1)
{
    alert('Yeterli Tl bakiyeniz bulunmamaktadır.'); 
}
else
{ 
    var a=sayi1-(x*21.78);  
    alert("Güncel TL Bakiyeniz = "+a+" TL"); 
    var b=(sayi2*1)+(x*1);
    alert("Güncel Sterlin Bakiyeniz = "+b+" Sterlin");  
}
}

function islem6()
{
var y=prompt("Lütfen satmak istediğiniz Sterlin miktarını giriniz:");

if(y>sayi2)
{
    alert('Yeterli Sterlin bakiyeniz bulunmamaktadır.'); 
}
else
{ 
    var c=(sayi1*1)+(y*21.78);  
    alert("Güncel TL Bakiyeniz = "+c+" TL"); 
    var d=sayi2-(y*1);
    alert("Güncel Sterlin Bakiyeniz = "+d+" Sterlin");  
}
}