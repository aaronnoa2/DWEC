function paresImpares() {
    let arrayAlet = [];
    for (let i = 0; i<100 ;i++){
        arrayAlet[i] = Math.floor((Math.random() * 100) + 1);
    }
    console.log(arrayAlet);
    arrayAlet.sort(function (a,b) {

        if (a%2 == 0 && b%2 == 1)
            return -1;

        else if  (b%2 == 0 && a%2 == 1)
            return 1;

        else
            return 0;

    });
    console.log(arrayAlet)
}
paresImpares();