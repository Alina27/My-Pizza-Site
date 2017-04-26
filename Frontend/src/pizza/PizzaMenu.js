    var Templates = require('../Templates');
    var PizzaCart = require('./PizzaCart');
    var Pizza_List = require('../Pizza_List');
	
	var $pizza_list = $("#pizza_list");
	
	var $all = $("#all");
	var $meat = $("#meat");
	var $pineapple = $("#pineapple");
	var $mushrooms = $("#mushrooms");
	var $seafood = $("#seafood");
	var $vega = $("#vaga");
	
	var price = [];
	
	$all.click(function(){
		showMenu(Pizza_List);
		
		$("#allPizzasLabel").html("Усі Піци <span class=\"badge\" id = \"badgeItems\">8</span>"); 
		
		$all.css("background-color", "darkorange");
		
		$meat.css("background-color", "antiquewhite");
		$pineapple.css("background-color", "antiquewhite");
		$mushrooms.css("background-color", "antiquewhite");
		$seafood.css("background-color", "antiquewhite");
		$vega.css("background-color", "antiquewhite");
		
	});

	$meat.click(function(){
		
		filterPizza("meat");
		
		$meat.css("background-color", "darkorange");

		$all.css("background-color", "antiquewhite");
		$pineapple.css("background-color", "antiquewhite");
		$mushrooms.css("background-color", "antiquewhite");
		$seafood.css("background-color", "antiquewhite");
		$vega.css("background-color", "antiquewhite"); 
		
		$("#allPizzasLabel").html("М'ясні Піци <span class=\"badge\" id = \"badgeItems\">5</span>"); 
	});
	
	$pineapple.click(function(){
		
		$pineapple.css("background-color", "darkorange");
		
		filterPizza("pineapple");
		
		$all.css("background-color", "antiquewhite");
		$meat.css("background-color", "antiquewhite");
		$mushrooms.css("background-color", "antiquewhite");
		$seafood.css("background-color", "antiquewhite");
		$vega.css("background-color", "antiquewhite"); 
		
		$("#allPizzasLabel").html("Піци з ананасами <span class=\"badge\" id = \"badgeItems\">3</span>");
	});
	
	$mushrooms.click(function(){
		filterPizza("mushrooms");	
		
		$mushrooms.css("background-color", "darkorange");
		
		
		$all.css("background-color", "antiquewhite");
		$meat.css("background-color", "antiquewhite");
		$pineapple.css("background-color", "antiquewhite");
		$seafood.css("background-color", "antiquewhite");
		$vega.css("background-color", "antiquewhite");
		
		$("#allPizzasLabel").html("Піци з грибами <span class=\"badge\" id = \"badgeItems\">3</span>");
	});
	
	$seafood.click(function(){
		filterPizza("seafood");	
		
		$seafood.css("background-color", "darkorange");
		
		$all.css("background-color", "antiquewhite");
		$meat.css("background-color", "antiquewhite");
		$pineapple.css("background-color", "antiquewhite");
		$mushrooms.css("background-color", "antiquewhite");
		$vega.css("background-color", "antiquewhite");
		
		$("#allPizzasLabel").html("Піци з морепродуктами <span class=\"badge\" id = \"badgeItems\">2</span>");
	});
	
	$vega.click(function(){
		filterPizza("vegetables");	
		
		$vega.css("background-color", "darkorange");
		
		$all.css("background-color", "antiquewhite");
		$meat.css("background-color", "antiquewhite");
		$pineapple.css("background-color", "antiquewhite");
		$mushrooms.css("background-color", "antiquewhite");
		$seafood.css("background-color", "antiquewhite");
		
		$("#allPizzasLabel").html("Вегетеріанські Піци <span class=\"badge\" id = \"badgeItems\">1</span>");
	});
	
	function getPrice(pizza, size){
		
		for(var i = 0; i < Pizza_List.length; i++){
			
		if(pizza == "Дольче Маре"){
			price.push(Pizza_List[6].big_size.price);
            return Pizza_List[6].big_size.price;
         }	
		
		if(Pizza_List[i].title == pizza && Pizza_List[i].small_size.size == size){
			price.push(Pizza_List[i].small_size.price);
			return Pizza_List[i].small_size.price;
	    }
		else if(Pizza_List[i].title == pizza && Pizza_List[i].big_size.size == size){
			price.push(Pizza_List[i].big_size.price);
			return Pizza_List[i].big_size.price;
	  } 
	}
}
	
function increasePrice(){
	var sum = 0;
	for(var i = 0; i < price.length; i++){
		sum+=price[i];
	}
	return "<span id = 'priceLabel'>Сума замовлення</span> <span id = 'priceTag'>" + sum + "грн.</span>";
}
	
function showMenu(pizzaList){
  
	$pizza_list.html("");
	
   function showOnePizza(pizza){
	   var html_code = Templates.PizzaMenu_OneItem({pizza: pizza});
	   var $node = $(html_code);
			
	   $node.find("#buttonSmallId").click(function(){
			
		    if(PizzaCart.exist(pizza, PizzaCart.PizzaSize.Small) == true){	
			   PizzaCart.increaseQuantity(pizza, PizzaCart.PizzaSize.Small);	
			   getPrice(pizza.title, PizzaCart.PizzaSizeTypeInt.Small);
			   $("#preBottomMinorLine").html(increasePrice());
			  }
				
			 else {
				  PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Small, PizzaCart.PizzaSizeType.Small);
				  $("#preBottomMinorLine").html(getPrice(pizza.title, PizzaCart.PizzaSizeTypeInt.Small));
				  $("#preBottomMinorLine").html(increasePrice());
				}
			});
			
		 $node.find("#buttonBigId").click(function(){
			if(PizzaCart.exist(pizza, PizzaCart.PizzaSize.Big) == true){
			   PizzaCart.increaseQuantity(pizza, PizzaCart.PizzaSize.Big);
			   getPrice(pizza.title, PizzaCart.PizzaSizeTypeInt.Big);
			   $("#preBottomMinorLine").html(increasePrice());
			 }
			 else {
               PizzaCart.addToCart(pizza, PizzaCart.PizzaSize.Big, PizzaCart.PizzaSizeType.Big);
			   $("#preBottomMinorLine").html(getPrice(pizza.title, PizzaCart.PizzaSizeTypeInt.Big));
			   $("#preBottomMinorLine").html(increasePrice());
			}
        });
		  $pizza_list.append($node);
		}
		pizzaList.forEach(showOnePizza);
	}
	
	
function filterPizza(filter) {
    //Масив куди потраплять піци які треба показати
   var pizza_shown = [];
		
	for(var i = 0; i < Pizza_List.length; i++){
        if(Pizza_List[i].content.hasOwnProperty(filter)){
             pizza_shown.push(Pizza_List[i]);
          }
       } 
    showMenu(pizza_shown);
}
	

function initialiseMenu(){
	showMenu(Pizza_List)
} 
			
function check(){
	  $("#phoneNumber").css("background-color","blue");	
	}
	
exports.check = check;

exports.increasePrice = increasePrice;	
exports.getPrice = getPrice;	
exports.filterPizza = filterPizza;		
exports.initialiseMenu = initialiseMenu;