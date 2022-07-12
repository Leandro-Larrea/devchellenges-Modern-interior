document.querySelector(".header__responsive-button").addEventListener("click", () =>{
	if(comprobar(headerArray, "header__nav-active") === true){
		headerArray.remove("header__nav-active")
		icons.remove("fa-xmark");
		icons.add("fa-bars");
	}
	else {
		headerArray.add("header__nav-active")
		icons.add("fa-xmark");
		icons.remove("fa-bars");
	}

})
const icons = document.querySelector(".header__responsive-button").classList
const headerArray = document.querySelector(".header__nav").classList;

const comprobar = (a, x) => {
	for(i = a.length-1; i >= 0; i--){
		if(a[i] === x){
			return true;
		}
	}
	return false;
}