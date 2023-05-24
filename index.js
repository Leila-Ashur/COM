// Change document background color to silver

 
document.getElementById('page').style.backgroundColor='silver';

// Change the font color for h1 title tag to green
document.getElementById('title').style.color ='green'

// Change the font case for h3 title tags to uppercase
document.getElementById('fru').textTransform='uppercase'
document.getElementById('vege').textTransform='uppercase'

// Add one more fruit to the fruits list
let fruits = document.createElement('fruiList')
fruits.innerHTML='ovacado'
document.getElementById('fruList').appendChild(fruits)

// Add one more vegetable to the vegetableslist
let friuts = document.createElement('vegList')
vegetables.innerHTML='ovacado'
document.getElementById('vegList').appendChild(vegetables)









