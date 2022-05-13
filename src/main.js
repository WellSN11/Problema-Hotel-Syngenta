function getCheapestHotel (input) { //DO NOT change the function's name.
    return "Cheapest hotel name"
}

exports.getCheapestHotel = getCheapestHotel

//Declarações das variáveis
let multFds = 0
let multWeek = 0
let nRG1 = 0
let nRG2 = 0
let nRG3 = 0
let nFDS1 = 0
let nFDS2 = 0
let nFDS3 = 0
let totalLK = 0
let totalBD = 0
let totalRD = 0
let days = []
let dayOfWeek = []
let typeOfClient = prompt('Cliente Regular ou Rewards?')


const hotels = [

    {
        name: 'Lakewood',
        classification: 3,
        regularWeek: 110,
        rewardsWeek: 80,
        regularWeekend: 90,
        rewardsWeekend: 80
    },

    {
        name: 'Bridgewood',
        classification: 4,
        regularWeek: 160,
        rewardsWeek: 110,
        regularWeekend: 60,
        rewardsWeekend: 50
            
    },

    {
        name: 'Ridgewood',
        classification: 5,
        regularWeek: 220,
        rewardsWeek: 100,
        regularWeekend: 150,
        rewardsWeekend: 40
        
    }

]

console.log('0  -  JANEIRO \n 1  -  FEVEREIRO \n 2  -  MARÇO \n 3  -  ABRIL \n 4  -  MAIO \n 5  -  JUNHO \n 6  -  JULHO \n 7  -  AGOSTO \n 8  -  SETEMBRO \n 9  -  OUTUBRO \n 10 -  NOVEMBRO \n 11 -  DEZEMBRO' )

console.log("Tipo de cliente: "+ typeOfClient)

//Declarações das funções principais
var informDates = (d, m, y) => {

    let day= new Date(y, m, d)
    days.push(day)

    let x = day.getDay()
    dayOfWeek.push(x)
}

var checkDates = () => {

    for(var i in dayOfWeek){

        if(dayOfWeek[i] == 6 || dayOfWeek[i] == 0){
            multFds++
        }else{
            multWeek++
        }
     }
}
 
var calculateRegular = () => {

     if(typeOfClient === 'Regular' && multWeek !== 0){

         nRG1 = hotels[0].regularWeek * multWeek
         nRG2 = hotels[1].regularWeek * multWeek
         nRG3 = hotels[2].regularWeek * multWeek

     }if(typeOfClient === 'Regular' && multFds !== 0){

         nFDS1 = hotels[0].regularWeekend * multFds
         nFDS2 = hotels[1].regularWeekend * multFds
         nFDS3 = hotels[2].regularWeekend * multFds

     }

     totalLK = nRG1 + nFDS1
     totalBD = nRG2 + nFDS2
     totalRD = nRG3 + nFDS3

     console.log('Total Lakewood: ' + totalLK)
     console.log('Total Bridgewood: ' + totalBD)
     console.log('Total Ridgewood: ' + totalRD)

     var z = Math.min(totalLK, totalBD, totalRD)

     var array = [totalLK, totalBD, totalRD]	

     for(i=0; array.length; i++){
         
         if(array[i] == z){
             if(array[i] == array[i] && array[i] == array[i + 1] || array[i] == array[i] && array[i] == array[i + 2] ){
                 if(hotels[i].classification > hotels[i + 1].classification){
                      console.log('Lakewood')
                      break
                 }
                 else if (hotels[i].classification > hotels[i + 2].classification){
                      console.log('Lakewood')
                      break
                 }
                 
                 else if (hotels[i].classification < hotels[i + 2].classification){
                      console.log('Ridgewood')
                      break
                 }
             else if (array[i + 1] == array[i + 1] && array[i + 1] == array[i + 2] )
                 if(hotels[i + 1].classification > hotels[i + 2].classification){
                      console.log('Bridgewood')
                      break
                 }
                 else if (hotels[i + 1].classification < hotels[i + 2].classification){
                     console.log('Ridgewood')
                     break
                 }
             }	

         else {
                 console.log('Hotel mais barato ' + hotels[i].name)
                 break
                 }
         }
 }
}

var calculateRewards = () => {

     if(typeOfClient === 'Rewards' && multWeek !== 0){

         nRG1 = hotels[0].semanalRewards * multWeek
         nRG2 = hotels[1].semanalRewards * multWeek
         nRG3 = hotels[2].semanalRewards * multWeek

     }if(typeOfClient === 'Rewards' && multFds !== 0){

         nFDS1 = hotelclassification[0].fdsRewards * multFds
         nFDS2 = hotelclassification[1].fdsRewards * multFds
         nFDS3 = hotelclassification[2].fdsRewards * multFds

     }

     totalLK = nRG1 + nFDS1
     totalBD = nRG2 + nFDS2
     totalRD = nRG3 + nFDS3

     console.log("Total Lakewood: " + totalLK)
     console.log("Total Bridgewood: " + totalBD)
     console.log("Total Ridgewood: " + totalRD)

     var z = Math.min(totalLK, totalBD, totalRD)

     var array = [totalLK, totalBD, totalRD]

     for(i=0; array.length; i++){
         
         if(array[i] == z){
             if(array[i] == array[i] && array[i] == array[i + 1] || array[i] == array[i] && array[i] == array[i + 2] ){
                 if(hotels[i].classification > hotels[i + 1].classification){
                      console.log('Lakewood')
                      break
                 }
                 else if (hotels[i].classification > hotels[i + 2].classification){
                      console.log('Lakewood')
                      break
                 }
                 
                 else if (hotels[i].classification < hotels[i + 2].classification){
                      console.log('Ridgewood')
                      break
                 }
             else if (array[i + 1] == array[i + 1] && array[i + 1] == array[i + 2] )
                 if(hotels[i + 1].classification > hotels[i + 2].classification){
                      console.log('Bridgewood')
                      break
                 }
                 else if (hotels[i + 1].classification < hotels[i + 2].classification){
                     console.log('Ridgewood')
                     break
                 }
             }	

         else {
                console.log('Hotel mais barato ' + hotels[i].name)
                break
                }
         }

     }
 }

var checkCustomer = () => {

     if(typeOfClient === 'Regular'){
         calculateRegular()
     }else{
         calculateRewards()
     }
 }

informDates(26, 2, 2009)
informDates(27, 2, 2009)
informDates(28, 2, 2009)

checkDates()
checkCustomer()