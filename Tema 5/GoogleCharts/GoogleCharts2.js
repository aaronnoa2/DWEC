google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyCULU3jC-yIfnSFcFSxfcnyzWv4XKtrMQM',
});

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['France', 84500000],
        ['United States',75000000 ],
        ['Spain', 68200000],
        ['China', 57000000],
        ['Italy', 50000000]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('chart'));

    chart.draw(data, options);
}