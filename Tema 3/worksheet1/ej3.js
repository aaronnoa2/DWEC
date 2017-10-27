function nLanzamientos() {
    return(Math.floor((Math.random() * 6) + 1));
}


function stats(lanzamientos) {
    let ret = [0,0,0,0,0,0];
    for (let i = 0; i < lanzamientos; i++)
        ret[nLanzamientos() -1]++;
    console.log(ret)
}

stats(6000);