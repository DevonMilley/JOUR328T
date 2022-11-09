var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["1800", "1825", "1850", "1875", "1900", "1925", "1950", "1975", "2000", "2021"],
        datasets: [{
            label: 'Brazil',
            data: [32, 32, 31.99, 32.06, 32.4, 32.75, 51.78, 63.65, 71.44, 76.33],
            fill: true,
            borderColor: 'rgba(70, 66, 255, 0.8)',
            backgroundColor: 'rgba(70, 66, 255, 0.1)',
            tension: 0.1},
        {
            label: 'China',
            data: [32, 32, 32,31.96, 31.75, 31.55, 40.73, 63.26, 70.03, 77.4],
            fill: true,
            borderColor: 'rgba(7, 187, 213, 0.8)',
            backgroundColor: 'rgba(7, 187, 213, 0.1)',
            tension: 0.1},
        {
            label: 'India',
            data: [25.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 62.34, 69.77],
            fill: true,
            borderColor: 'rgba(51, 164, 252, 0.8)',
            backgroundColor: 'rgba(51, 164, 252, 0.1)',
            tension: 0.1},
        {
            label: 'Indonesia',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
            fill: true,
            borderColor: 'rgba(7, 213, 195, 0.8)',
            backgroundColor: 'rgba(7, 213, 195, 0.1)',
            tension: 0.1},
        {
            label: 'United States',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.9, 79.59],
            fill: true,
            borderColor: 'rgba(84, 7, 213, 0.8)',
            backgroundColor: 'rgba(84, 7, 213, 0.1)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'The largest countries\' life expectancies from 1800 to 2021',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The United States has seen the greatest increase in life expectancy in the past 200 years'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});
 

