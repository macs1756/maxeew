



function isWebp(){
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function (){
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

	}
	testWebp(function (support){
		let className = support = true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	})
}
	
isWebp();



const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");







btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("close");
});



btnBurger.addEventListener("click", ()=>{
		document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});







let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
	if(scrollY>10){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
})










////forms


















////////////modal



let btnModal = document.querySelectorAll(".modalActive");
const modalWr = document.querySelector(".modal__wr");
const modalContent = document.querySelector(".modal__body");


btnModal.forEach(item=>{
	item.addEventListener("click", ()=>{
		modalWr.classList.add("modal__wr-active");
		modalContent.classList.add("modal__body-open");
	});
});


modalWr.addEventListener("click", function(event){
	modalWr.classList.remove("modal__wr-active");
	modalContent.classList.remove("modal__body-open");
})





function time2(){

	//РґР°С‚Р° РґРѕ СЏРєРѕС— Р±СѓРґРµ РІС–РґР»С–Рє
		let myDate = new Date(2022,10,1,0,0,0,0).getTime();
	
	//РїРѕС‚РѕС‡РЅР° РґР°С‚Р°
		let currentDate = new Date().getTime();
	
	
	//РІС–РґРЅС–РјР°С”РјРѕ
		let distance = +myDate - +currentDate;
	
	
	//	РІРёС‚СЏРіСѓС”РјРѕ РІ Р·РјС–РЅРЅС– РґР°РЅС–
	

		let days = Math.floor(distance /(1000 * 60 * 60 * 24));
		let hours = Math.floor(distance% (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
		let min = Math.floor(distance% (1000 * 60 * 60)/(1000 * 60 ));
	

	
	if(days<10){
		days = "0"+days;
	}
	if(hours<10){
		hours = "0"+hours;
	}
	
	if(min<10){
		min = "0"+min;
	}
	
	
	document.querySelector(".time__days").innerText = days;
	document.querySelector(".time__hours").innerText = hours;
	document.querySelector(".time__minuts").innerText = min;
	
	
	
	
	
	
	
	
	
	
	
	
	}
	
	setInterval(time2, 1);