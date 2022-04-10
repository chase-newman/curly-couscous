console.log("Connected");



fetch("https://test-project-d14cc-default-rtdb.firebaseio.com/new-post.json")
    .then(response => response.json())
    .then(data => {
        
        const key = Object.keys(data)[0];
        const stockPrices = Object.values(data)
        console.log(stockPrices)
        
        // stockPrices.forEach((el) => {
        //   console.log(el); 
        // });
        
        for(let price of stockPrices) {
            console.log(price);
        }
        
    }).catch(e => console.log(e))