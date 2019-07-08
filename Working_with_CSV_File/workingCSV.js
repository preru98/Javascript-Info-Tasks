async function buildChart(){
let getData=await readData();
let ctx = document.getElementById('chart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: getData.xs,
        datasets: [{
            label: 'Average Temperature',
            data:   getData.ys,
            fill: false,
            backgroundColor:'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            interval:10,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    suggestedMin: 13.3,
                    suggestedMax: 14.7,
                    stepSize:0.7
                }
            }]
        }
    }
});
}


buildChart();
async function readData(){
    let xs=[];
    let ys=[];
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
        xs.push(year);
        let temp=ele[1];
        ys.push(parseFloat(temp)+14);
        console.log(year+' : '+temp);
    });
    return { xs, ys };
}
readData();