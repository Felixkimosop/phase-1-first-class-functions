function receivesAFunction(callback){

    return callback();
}

    receivesAFunction( function(){
        return 2+2;
    });

  
   
    let x = function returnsANamedFunction() {

       return returnsANamedFunction;

        
    };
   
    
    function returnsANamedFunction (){
        return function namedFunction(){};
      }