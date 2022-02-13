const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
const nav = document.querySelector('#nav');

//Function for Toggling Classes in this project
function toggleClass(element, className, existingClass) {
	if(element.classList.contains(className)) {
		element.classList.remove(className);
		element.classList.add(existingClass);
	}else{
		element.classList.add(className);
		element.classList.remove(existingClass);
	}
}

hamburger.onclick = function () {
	toggleClass(navItems, 'nav-items-active', 'nav-items');
}

window.addEventListener("scroll", function(e){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    	nav.classList.add("nav-active");
  	} else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    	nav.classList.remove("nav-active");
  }
});