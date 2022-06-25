
///-----------------------------------------Map--------------------------

var  arr1 = [1,2,3, 4, 5];




Array.prototype.myMap = function(func){

   
    let arr = this 

    for(var i =0; i<arr.length; i++){

    let element = arr[i]
     let x =  func(element)

     console.log('x', x)

    }

   
}

let x = arr1.myMap(function(x){
    return x*2;
});


///------------------------------------------ForEach---------------------------------------------------------------

       

        Array.prototype.myForEach= function(callback) {
            for (let i = 0; i < this.length; i++) {
              callback(this[i]);
            }
          };
          
          function callback(element) {
            console.log(element);
          }



          
          var array = [2, 4, 6, 8, 10];
          array.myForEach( callback);


          ///-----------------------------filter array------------------------------------------------------------------


          const arrfilter = [5, 3, 6, 2, 7, -4, 8, 10];
          const isEven = num => num % 2 === 0;
          Array.prototype.myFilter= function(callback){
             const res = [];
             for(let i = 0; i < this.length; i++){
                const el = this[i];
                if(callback(el, i)){
                   res.push(el);
                };
             };
             return res;
          };
          console.log(arrfilter.myFilter(isEven));


          ////---------------------------Reduce----------------------------------------------------------------------------



          Array.prototype.myReduce = function(callback){
            var a =0;                              
            for(let i=0; i<this.length; i++)       
            {
                callback(a = a+this[i])            
            }
             
            return a;                             
       }


       var arrayReduce=[4,5,4,5,6,7,8,9,3]

       var result = arrayReduce.myReduce((acc, item)=> acc+item);

       console.log(result);



       ////--------------------------------------------------------------the end----------------------------------------------------------