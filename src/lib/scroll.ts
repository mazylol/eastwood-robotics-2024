export function smoothScroll(id: string) {
	document.querySelector(id)?.scrollIntoView({
		behavior: 'smooth'
	});
}
