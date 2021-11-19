let complaints = [
	"No way to print",
	"Always runs out of registers",
	"Basically x86 with syntactic sugar",
	"No documentations",
	"Obscure CMOV syntax",
	"Convoluted pointer syntax",
	"Convoluted subarray syntax",
	"Array types not compatible with pointer types",
	"Exported functions can't take array arguments",
	"Convoluted typecast syntax",
	"Miscompilation",
	"Can I just write x86 instead?",
	"Cryptic error messages",
	"asmgen: not able to assemble address",
	"asmgen: invalid instruction, check do not pass : MOV_32",
	"asmgen: (compile_arg) not compatible asm_arg",
	'error in "one-varmap" checker: modified expression',
	"Error: operand size mismatch for `movzb'",
	"Stack smashing detected",
	"And I thought segfaults were bad",
	"Compilation takes over a minute",
	"Built-in memory checker false positives",
	"Generated assembly incompatible with Valgrind",
	"Syntax error in extracted EasyCrypt"
];

let complaint_index = 0;

function make_complaint(complaint) {
	let div = $(`<div>${complaint}</div>`);
	div.css('position', 'absolute');
	div.css('width', '100%');
	div.css('top', '100%');
	div.css('display', 'flex');
	div.css('justify-content', 'center');
	$('body').append(div);
	div.animate({'top': '-15%'}, 3000, 'linear');
}

function display_next_complaint() {
	if(complaint_index < complaints.length) {
		let complaint = complaints[complaint_index];
		complaint_index++;
		make_complaint(complaint);
	}
}

function nextSlide() {
	//Sorry. Had to get this off my chest.
	switch(currentSlide) {
		case 0: {
			$('body').css('overflow', 'hidden');
			setInterval(display_next_complaint, 150);
			break;
		}
		case 2: {
			location.href = "easycrypt.html";
			break;
		}
	}
}
