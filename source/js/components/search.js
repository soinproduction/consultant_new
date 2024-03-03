document.addEventListener('DOMContentLoaded', function() {
	const searchButtons = document.querySelectorAll('.hidden-search__btn');
	const form = document.querySelector('.hidden-search');

	function toggleSearchActive(e) {
		const withinBoundaries = e.composedPath().includes(form);

		if (!withinBoundaries) {
			form.classList.remove('active');
		}
	}

	searchButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.stopPropagation();
			form.classList.add('active');
		});
	});

	document.addEventListener('click', toggleSearchActive);
});
