const apiUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
const apiUrlFirebase = "https://test-project-d14cc-default-rtdb.firebaseio.com/new-post.json"
const appleURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=1D24JWD6HONH93GD";
const googleURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOGLE&apikey=1D24JWD6HONH93GD"

let IBM = [];
let apple = [];
let google = [];



fetch(apiUrlFirebase)
    .then(response => response.json())
    .then(data => {
            let newData = Object.values(data);
            IBM = newData[0];
        
            const dataX = {
            labels: [1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29],
            datasets: [{
              label: 'IBM',
              backgroundColor: 'rgba(255, 99, 99,0.2)',
              borderColor: 'rgba(255, 99, 99, 1)',
              data: IBM},
              {
                  label: 'Tesla',
                  backgroundColor: 'rgba(50, 99, 266,0.2)',
                  borderColor: 'rgba(50, 99, 266, 1)',
                  data: [100,120,130,140,105,106,107,108,109,110,
                    110,120,130,140,152,163,170,182,119,202,
                    213,225,230,124,125,126,127,218,129]
              }, {
                  label: 'Apple',
                  backgroundColor: 'rgba(50, 255, 99,0.2)',
                  borderColor: 'rgba(50, 255, 99, 1)',
                  data: [200,190,195,199,198,200,150,140,130,120,
                    110,120,130,140,200,220,0,15,14,12,
                    17,18,19,200,125,80,60,40,20]
              }]
          };
        
          const config = {
            type: 'line',
            data: dataX,
            options: {}
          };
          
            const myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
}).catch(e => console.log(e))
    

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        const usPopulationData = data.data;
        const years = usPopulationData.map(el => {
            return el.Year;
        });
        const population = usPopulationData.map(el => {
            return el.Population;
        });
        
        console.log(years);
        console.log(population);
        
            const dataX = {
            labels: years,
            datasets: [{
              label: 'IBM',
              backgroundColor: 'rgba(50, 255, 99,0.5)',
              borderColor: 'rgba(50, 255, 99, 1)',
              data: [15,60,45,32,77,65,88]}]
          };
        
          const config = {
            type: 'bar',
            data: dataX,
            options: {}
          };
          
            const myChart = new Chart(
                document.getElementById('barChart'),
                config
            );
                
    }).catch(e => console.log(e))

    
    