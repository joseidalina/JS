let valores = [8,2,9,4,5,4,6]
valores.sort()
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`a posicao do ${pos} tem o valor ${valores[pos]}`)
} 
*/

for(let pos in valores){
    console.log(`a posicao de ${pos} tem o valor ${valores[pos]}`) 
    
}

