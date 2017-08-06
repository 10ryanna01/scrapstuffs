console.log('script from cutsom1');
    
    var $item = $('div.item'), //Cache your DOM selector
        visible = 2, //Set the number of items that will be visible
        index = 0, //Starting index
        endIndex = ( $item.length / visible ) - 3; //End index
    
    $('div#arrowR').on( "click", function(){
        if(index < endIndex ){
          index++;
          $item.animate({'left':'-=300px'});
        }
    });
    
    $('div#arrowL').on( "click", function(){
        if(index > 0){
          index--;            
          $item.animate({'left':'+=300px'});
        }
    });

 