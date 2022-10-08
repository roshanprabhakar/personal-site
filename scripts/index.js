var kv_pairs;

function parseKeys() {
	kv_pairs = window.location.hash.slice(1).split('&');
	for (let i = 0; i < kv_pairs.length; i++) {
		let tmp = kv_pairs[i].split('=');
		kv_pairs[i] = {key:tmp[0], val:tmp[1]};
	}
}

function scrollToSection(s) {
	var elem = document.querySelector(`#${s}-iddiv`);
	elem.scrollIntoView();
}

parseKeys();
scrollToSection(kv_pairs[0].val);

