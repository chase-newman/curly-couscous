apiUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
apiUrlFirebase = "https://test-project-d14cc-default-rtdb.firebaseio.com/new-post.json"


fetch(apiUrlFirebase)
    .then(response => response.json())
    .then(data => {
        //apiUrl
        // const usPopData = data.data;
        // console.log(usPopData);
        
        // let years = usPopData.map((el) => {
        //     return el.Year
        // });
        
        // let population = usPopData.map((el) => {
        //     return el.Population
        // });
        
        // console.log(years);
        // console.log(population);
        
        //apiUrlFirebase
        console.log(Object.values(data))
        let popData = Object.values(data).map(el => {
           return el 
        });

        console.log(popData);
        if(popData.length > 1) {
            const dataX = {
            labels: [1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgba(255, 99, 99,0.2)',
              borderColor: 'rgba(255, 99, 99, 1)',
              data: popData,
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
        }
          
                    
        
    }).catch(e => console.log(e))
    

    
    