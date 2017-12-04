let tabTitle = (() => {

	function load(customTitle){

		let original = document.title

		window.addEventListener('focus', ()=> (document.title = original))

		window.addEventListener('blur', ()=> (document.title = customTitle))

	}

	return{

		render:load
	}
	
})()