axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=83a3fbfcf074ff5795a817f5dc43e5cf&q=london`)
    .then(function (response) {
        // handle success


        // console.log(response);
        // console.log(response.data.city.name);
        // console.log(response.data.list[0].dt);
        // console.log(response.data.list[0].main.temp + " F");

        // let a = new Date();
        // console.log(a)
        // a = a.getMilliseconds()
        // console.log(a)

        for (let i = 0; i < 5; i++) {
            console.log(response.data.list[i].dt);
            console.log(response.data.list[i].main.temp + " F");

        }

    })


    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })