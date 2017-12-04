function changeTabTitle(customTitle){

	var original = document.title

	window.addEventListener('focus', function() {
		
		document.title = original
	})

	window.addEventListener('blur', function() {

		document.title = customTitle
	})

}

