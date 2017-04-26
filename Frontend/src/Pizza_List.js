/**
 * Created by diana on 12.01.16.
 */
/*
var pizza_info = [
    {
        id:1,
        icon:'assets/images/pizza_7.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['куриця'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true

    },
    {
        id:2,
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'куриця копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        id:4,
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        content: {
            meat: ['вітчина', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        id:17,
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        id:43,
        icon:'assets/images/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'М’ясна піца',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        id:90,
        icon:'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big_size:{
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        id:6,
        icon:'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
]; */

var pizza_info = [
  {
	id: 1,
	icon: 'assets/images/pizza_1.jpg',
	title: "Імпреза",
	type: "М'ясна піца",
	content: {
	   meat: ['Балик', 'ковбаса салямі'],
	   cheese: ['сир Моцарелла', 'сир Рокфорд'],
	   pineapple: ['ананаси'],
	   additional: ['томатна паста', 'петрушка']
	},
	
	small_size: {
	   weight: 370,
       size: 30,
       price: 99,
	   type: "Мала"
	},
	  
	buttonSmallId: "buttonSmallImpreza",
	
	big_size:{
	  weight: 660,
      size: 40,
      price: 169,
	  type: "Велика"
	},
	  
	buttonBigId: "buttonBigImpreza",
	
	is_new:true,
    is_popular:false,
	  
	oneS: false,
	oneB: false  
	
   },
	
	{
	id: 2,
	icon: 'assets/images/pizza_2.jpg',
	title: "BBQ",
	type: "М'ясна піца",
	content: {
	   meat: ['Мисливські ковбаски', 'ковбаски папероні', 'шинка'],
	   cheese: ['сир домашній'],
	   mushrooms: ['шампіньйони'],
	   additional: ['петрушка', 'оливки']
	},
	
	small_size: {
	   weight: 460,
       size: 30,
       price: 139,
	   type: "Мала"
	},
	
	buttonSmallId: "buttonSmallBBQ",
	
	big_size:{
	  weight: 840,
      size: 40,
      price: 199,
	  type: "Велика"
	},
		
	buttonBigId: "buttonBigBBQ",
	
	is_new:false,
    is_popular:true,
		
	oneS: false,
	oneB: false 
		
   },
	
   {
	id: 3,
	icon: 'assets/images/pizza_3.jpg',
	title: "Міксовий поло",
	type: "М'ясна піца",
	content: {
	   meat: ['Яловичина', 'курка копчена'],
	   cheese: ["Cир 'Моцарелла' "],
	   pineapple: ['ананаси'],
	   additional: ['кукурудза','петрушка', 'соус томатний']
	},
	
	small_size: {
	   weight: 430,
       size: 30,
       price: 115,
	   type: "Мала"
	},
	
	buttonSmallId: "buttonSmallMixPolo",   
	   
	big_size:{
	  weight: 780,
      size: 40,
      price: 179,
	  type: "Велика"
	},
	   
	buttonBigId: "buttonBigMixPolo",
	
	is_new:false,
    is_popular:false,
	   
	oneS: false,
	oneB: false    
	   
   },
	
   {
	id: 4,
	icon: 'assets/images/pizza_4.jpg',
	title: "Сициліано",
	type: "М'ясна піца",
	content: {
	   meat: ['Яловичина', 'ковбаса салямі'],
	   cheese: ["Cир 'Моцарелла' "],
	   mushrooms: ['шампіньйони'],
	   additional: ['перець болгарський', 'соус томатний']
	},
	
	small_size: {
	   weight: 450,
       size: 30,
       price: 111,
	   type: "Мала"
	},
	   
	buttonSmallId: "buttonSmallSitsiliano",
	
	big_size:{
	  weight: 790,
      size: 40,
      price: 169,
	  type: "Велика"
	},
	   
	buttonBigId: "buttonBigSitsiliano",
	
	is_new:false,
    is_popular:false,
	   
	oneS: false,
	oneB: false    
	   
   },
	
	{
	id: 5,
	icon: 'assets/images/pizza_5.jpg',
	title: "Маргарита",
	type: "Вега",
	content: {
	   cheese: ["Cир 'Моцарелла' ", 'cир домашній'],
	   vegetables: ['помідори'],
	   additional: ['базилік', 'оливкова олія', 'соус томатний']
	},
	
	small_size: {
	   weight: 370,
       size: 30,
       price: 89,
	   type: "Мала"
	},
		
	buttonId: "buttonSmallId",
	
	is_new:false,
    is_popular:false,
		
		
	oneS: true,
	oneB: false 	
		
   },
	
	{
	
	id: 6,
	icon: 'assets/images/pizza_6.jpg',
	title: "Мікс смаків",
	type: "М'ясна піца",
	content: {
	   meat: ['Ковбаски', 'курка копчена'],
	   cheese: ["Cир 'Моцарелла' "],
	   mushrooms: ['шампіньйони'],
	   pineapple: ['ананаси'],
	   additional: ['цибуля кримська','огірки квашені', 'соус гірчичний']
	},
	
	small_size: {
	   weight: 470,
       size: 30,
       price: 115,
	   type: "Мала"
	},
		
	buttonSmallId: "buttonSmallTastesMix",
	
	big_size:{
	  weight: 780,
      size: 40,
      price: 180,
	  type: "Велика"
	},
		
	buttonBigId: "buttonBigTastesMix",
	
	is_new:false,
    is_popular:false,
		
	oneS: false,
	oneB: false 	
		
   },
	
	{
	id: 7,
	icon: 'assets/images/pizza_7.jpg',
	title: "Дольче Маре",
	type: "Морська піца",
	content: {
	   seafood: ['Креветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
	   cheese: ["Cир 'Моцарелла' "],
	   additional: ['оливкова олія', 'вершки']
	},
	
	buttonId: "buttonBigId",
	
	big_size: {
	   weight: 845,
       size: 40,
       price: 399,
	   type: "Велика"
	},
		

	
	is_new:false,
    is_popular:false,
	
	oneS: false,	
	oneB: true	
		
   },
	
	{
	id: 8,
	icon: 'assets/images/pizza_8.jpg',
	title: "Россо Густо",
	type: "Морська піца",
	content: {
	   seafood: ['Ікра червона', 'лосось копчений'],
	   cheese: ["Cир 'Моцарелла' "],
	   additional: ['оливкова олія', 'вершки']
	},
	
	small_size: {
	   weight: 400,
       size: 30,
       price: 189,
	   type: "Мала"
	},
		
	buttonSmallId: "buttonSmallRossoGusto",
	
	big_size:{
	  weight: 700,
      size: 40,
      price: 299,
	  type: "Велика"
	},
		
	buttonBigId: "buttonBigRossoGusto",
	
	is_new:false,
    is_popular:false,
		
	oneS: false,
	oneB: false 	
		
   }, 
	
];

module.exports = pizza_info;