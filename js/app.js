



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