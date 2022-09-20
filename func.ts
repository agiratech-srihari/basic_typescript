function caltax (income:number, taxyear=2022){
    if(taxyear<2022){
        console.log(income * 2)
    }else{
        console.log (income * 3)
    }
}
caltax(20000,2023)