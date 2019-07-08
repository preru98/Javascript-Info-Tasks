async function readData(){
    const response= await fetch('ZonAnn.Ts+dSST.csv');
    const data=await response.text();
    console.log(data);

    let rows= data.split('\n');
    console.log(rows);

    let newRow=rows.slice(1);
    console.log(newRow);

    newRow.forEach(function(cell){
        let ele=cell.split(',');
        let year=ele[0];
        let temp=ele[1];
        console.log(year+' : '+temp);
    });
}
readData();