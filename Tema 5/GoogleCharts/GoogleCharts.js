google.charts.load('current', {'packages':['corechart']});


google.charts.setOnLoadCallback(drawChart);


function drawChart() {


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['PP', 7941236],
        ['PSOE', 5443846],
        ['PODEMOS', 3227123],
        ['C´S', 3141570 ],
        ['COALICION', 1],
        ['OTROS', 3779358]
    ]);


    var options = {'title':'How Much Pizza I Ate Last Night',
        'width':800,
        'pieHole':0.0,
        'height':400};


    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);

    counter = 0;

    var handler = setInterval(function () {
        counter += 0.1;
        var options = {'title':'How Much Pizza I Ate Last Night',
            'width':800,
            'pieHole':counter,
            'height':400};
        if (counter > 0.3){
            clearInterval(handler);
        }
        chart.draw(data, options);
    },10000/60);

}

