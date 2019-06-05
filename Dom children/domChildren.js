/*
How to access:

1.The <div> DOM node?
2.The <ul> DOM node?
3.The second <li> (with Pete)?
*/

//1.The <div> DOM node?
alert(document.body.childNodes[1]);        //using node property, [0]will be newline text
alert(document.body.firstElementChild);    //using element property

//2.The <ul> DOM node?
alert(document.body.childNodes[3]);       //using node property
alert(document.body.firstElementChild.nextElementSibling); //using element property

//3.The second <li> (with Pete)?
alert(document.body.childNodes[3].lastElementChild); //using element property
