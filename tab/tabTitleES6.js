export default function changeTabTitle(customTitle){

	let original = document.title

	window.addEventListener('focus', ()=> (document.title = original))

	window.addEventListener('blur', ()=> (document.title = customTitle))

}