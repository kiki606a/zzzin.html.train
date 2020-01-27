var currentMenu;
var menuLinks=document.querySelectorAll('.menu-link');	
function clickMenuHandler(){
	var activeMenu = document.querySelector('.menu-active');
	if(activeMenu){
		activeMenu.classList.remove('menu-active');
		}
			
	this.classList.add('menu-active');
		}
	for(var i=0;i<menuLinks.length;i++){
			menuLinks[i].addEventListener('click',clickMenuHandler);
		}