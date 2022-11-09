var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "rgba(84, 7, 213, 0.8)",
                backgroundColor:"rgba(84, 7, 213, 0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "rgba(59, 237, 207, 0.8)",
                backgroundColor:"rgba(59, 237, 207, 0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "rgba(216, 0, 135, 0.8)",
                backgroundColor:"rgba(216, 0, 135, 0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "rgba(216, 0, 0, 0.8)",
                backgroundColor:"rgba(216, 0, 0, 0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "rgba(170, 36, 237, 0.8)",
                backgroundColor:"rgba(170, 36, 237, 0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "rgba(204, 237, 36, 0.8)",
                backgroundColor:"rgba(204, 237, 36, 0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top 10 countries\' life expectancy and GDP per capita',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The United States has the higest GDP per capita but only the second highest life expectancy. There is a positive correlation between life expectanct and GDP per capita.'
            }
        },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life expectancy'
                  }
              }
            }
          }
        });
 

