var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Sandy Hook Elementary School", "Robb Elementary School", "Marjory Stoneman Douglas High School",
        "Columbine High School", "Santa Fe High School", "Red Lake High School", "West Nickel Mines Amish School",
        "Oxford High School", "Marysville Pilchuck High School"],
        datasets: [{
            label: 'Number of people killed',
            data: [26, 21, 17, 13, 10, 7, 5, 4, 4],
            backgroundColor: [
                '#6A111F'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top 10 deadliest school shootings',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The shooting at Sandy Hook Elementary School in 2012 is the most deadly with 26 people killed and 28 casualties overall. There are other shootings that have had more overall casualties.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});