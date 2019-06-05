//Method 1
let tableVar=document.querySelector('#tableID');
for(let i=0;i<3;i++)
{ console.log(i);
tableVar.rows[i].cells[i].style.backgroundColor='red';
}


//Method 2
let varTable=document.querySelector('#tableID');
for(let j=0;j<varTable.rows.length;j++)
{
    varTable.rows[j].cells[j].style.backgroundColor='red';
}