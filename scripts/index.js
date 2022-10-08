var kv_pairs;
var sects = ["digital-puppetry", "protograph-ldpc", "scf20", "scf19", "scf21", "txt2vid-browser"];

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

function main() {
	parseKeys();
	let s = kv_pairs[0].val;
	if (kv_pairs[0].key != "section" || !sects.includes(s) || s == '') {
		return;
	}
	scrollToSection(s);
}

main();
