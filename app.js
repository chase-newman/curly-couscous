//Fetch stock data from firebase DB
fetch("https://test-project-d14cc-default-rtdb.firebaseio.com/new-post.json")
    .then(response => response.json())
    .then(data => {
        
        // let numStockData = [];
        const stockPrices = Object.values(data)
        
        const dataSet = [];
                
        // for(let i=0; i<30; i++) {
        //     dataSet.push(parseFloat(Object.values(stockPriceArr[i])[3]));
        // }
        
        for(let i=0; i<stockPrices.length; i++) {
            dataSet.push(parseFloat(Object.values(data)[i]))
        }
        
        console.log(dataSet)
        
        // for(let price of stockPrices) {
        //     console.log(price)
        //     console.log(Number(price))
        // }
        
        // console.log(stockPrices)
        // let arrOfNum = [];
        
        // stockPrices.forEach(el => {
        //     console.log(parseFloat(el));
        // });
        
        // console.log(arrOfNum)
        

        //Create Chart
        
        // const labels = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,
        //                 18,19,20,21,22,23,24,25,26,27,28,29]
        
        // const dataX = {
        //     labels: labels,
        //     datasets: [{
        //         label: "stock prices",
        //         backgroundColor: 'rgba(255,99,132,0.2)',
        //         borderColor: 'rgba(255,99,132,1.0)',
        //         data: stockPrices
        //     }]
        // }
        
        // const config = {
        //     type: "line",
        //     data: dataX,
        //     options: {}
        // };
        
        // const myChart = new Chart(
        //         document.getElementById("myChart"),
        //         config
        //     );
        
        // const ctx = document.getElementById("myChart").getContext("2d");
        // const myChart = new Chart(ctx, {
        //     type: "line",
        //     data: {
        //         labels: [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,
        //                 18,19,20,21,22,23,24,25,26,27,28,29],
        //         datasets: [{
        //             label: "Stock Price",
        //             data: stockPrices,
        //             backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        //             borderColor: ['rgba(255, 99, 132, 1)'],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {}
        // })
        
    }).catch(e => console.log(e))