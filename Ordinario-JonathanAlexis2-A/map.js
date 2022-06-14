let obj = {};
let random;
console.time("Map");  
for(let i = 0; i< 1000; i++){
random = Math.floor(Math.random() * 1000 + 1);  
  obj["name"+random] = "name" + random;
}
console.log(obj);
console.timeEnd("Map");
  
	//corrida 1: 2.578857421875 ms
  //corrida 2: 2.38525390625 ms
  //corrida 3: 1.933837890625  ms
  //corrida 4: 2.091796875 ms
  //corrida 5: 3.94287109375 ms
  //corrida 6: 4.141845703125 ms
  //corrida 7: 1.5478515625 ms 