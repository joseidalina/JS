var agora = new Date()
var diaSem = agora.getDay()
diaSem = 5
/*
0 :domingo
1 :segunda-feira
2 :terca-feira
3 :quarta-feira
4 :quinta-feira
5 :sexta-feira
6 :sabado
*/

switch(diaSem) {
    case 0:
        console.log(`domingo`)
        break
    case 1:
        console.log(`segunda-feira`)
        break
    case 2:
        console.log(`terca-feira`)
        break
    case 3:
        console.log(`quarta-feira`)
        break
    case 4:
        console.log(`quinta-feira`)
        break
    case 5:
        console.log(`sexta-feira`)
        break
    case 6:
        console.log(`sabado`)
        break
        
    default:
        console.log(`[ERRO] Data invalida`)
       
}