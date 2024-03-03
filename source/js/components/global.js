const dataHidden = document.querySelectorAll('[data-hidden]');

if (dataHidden) {
	dataHidden.forEach(function (box) {
		const btn = box.querySelector('[data-hidden-btn]');
		const btnSpan = box.querySelector('[data-hidden-btn] span');
		const list = box.querySelector('[data-hidden-list]');
		const computedStyle = window.getComputedStyle(list);
		const originalHeight = parseInt(computedStyle.getPropertyValue('max-height'));

		const oldText = btnSpan.textContent;
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			const isOpen = box.getAttribute('data-hidden') === 'true';


			if (!isOpen) {
				list.style.maxHeight = list.scrollHeight + 'px';
				btnSpan.textContent = btn.getAttribute('data-hidden-btn');
			} else {
				list.style.maxHeight = originalHeight + 'px';
				btnSpan.textContent = oldText;
			}

			box.setAttribute('data-hidden', !isOpen);
		});

		list.style.transition = 'max-height 0.4s linear';
	});
}

document.querySelectorAll('.video-box').forEach((box)=> {
	lightGallery(box, {
		controls: 0,
		autoplay:true,
		rel: 0
	})
});

const elements = document.querySelectorAll('[data-buffer]');

elements.forEach(element => {
	element.addEventListener('click', (event) => {
		event.preventDefault();

		const link = element.getAttribute('href');

		copyToClipboard(link);
	});
});

const copyToClipboard = (text) => {
	const textarea = document.createElement('textarea');
	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
};