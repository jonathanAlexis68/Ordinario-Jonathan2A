let arr = [];
class Sort{
constructor(arr){
  this.arr = arr;
} 

llenar(){
  for(let i = 0; i<10; i++){
  this.arr.push(Math.floor(Math.random()*1000 + 1));
}
} 

ascendente(){
  for(let i = 0; i < this.arr.length; i++) {
  
        let min = i;
        for(let j = i+1; j < this.arr.length; j++){
            if(this.arr[j] < this.arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
          
             let tmp = this.arr[i]; 
             this.arr[i] = this.arr[min];
             this.arr[min] = tmp;      
        }
   }
}  

descendente(){
  for(let i = 0; i < this.arr.length; i++) {
    
        let max = i;
        for(let j = i+1; j < this.arr.length; j++){
            if(this.arr[j] > this.arr[max]) {
                max=j; 
            }
         }
         if (max != i) {
          
             let tmp = this.arr[max]; 
             this.arr[max] = this.arr[i];
             this.arr[i] = tmp;      
        }
   }
}  
  
}

let array = new Sort(arr);

array.llenar();
console.log(array);
array.ascendente();
console.log(array);
array.descendente();
console.log(array);
