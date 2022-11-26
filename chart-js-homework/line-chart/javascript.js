var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006",
        "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015",
        "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Year',
            data: [7, 12, 13, 5, 12, 9, 13, 15, 10, 9, 9, 9, 7, 11, 13, 16,
                7, 13, 15, 30, 27, 9, 42, 25],
            backgroundColor: [
                '#991E29'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: '2021 saw the highest number of school shootings in more than two decades',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'In the past seven years, the number of school shootings per year has seen a dramatic increase.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});