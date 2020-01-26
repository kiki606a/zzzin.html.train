var Body={
		setColor:function (color) {
//			document.querySelector('body').style.color = color;
			$('body').css('color',color);
		},
		setBackgroundColor:function(color) {
//			document.querySelector('body').style.backgroundColor = color;
			$('body').css('backgroundColor',color);
		}
}

	function darkLightHandler(self) {
		var target = document.querySelector('body');
		if (self.value === '다크') {
			Body.setBackgroundColor('black');
			Body.setColor('white');
			self.value = '라이트';
		} else {
			Body.setBackgroundColor('white');
			Body.setColor('black');
			self.value = '다크';
		}
	}