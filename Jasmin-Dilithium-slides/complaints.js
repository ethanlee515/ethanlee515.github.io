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
	"Cryptic error messages",
	"asmgen: not able to assemble address",
	"asmgen: invalid instruction, check do not pass : MOV_32",
	"asmgen: (compile_arg) not compatible asm_arg",
	"error in “one-varmap” checker: modified expression",
	"Error: operand size mismatch for `movzb'",
	"Stack smashing detected",
	"Compilation takes over a minute",
	"Can I just write x86 instead?",
	"Built-in memory checker false positives",
	"Generated assembly incompatible with Valgrind",
	"Syntax error in extracted EasyCrypt"
];


function nextSlide() {
	//Sorry. Had to get this off my chest.
	switch(currentSlide) {
		case 2: {
			location.href = "easycrypt.html";
			break;
		}
	}
}
