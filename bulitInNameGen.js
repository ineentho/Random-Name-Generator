var consonants = [ "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P",
		"Q", "R", "S", "T", "V", "X", "Z", "W", "Y" ];
var vowels = [ "a", "e", "i", "o", "u", "y" ];
var beginLetters = [ "Aa", "Ab", "Ad", "Ag", "Ah", "Ai", "Al", "Am", "An",
		"Ap", "Ar", "As", "At", "Au", "Av", "Ay", "Ba", "Be", "Bi", "Bl", "Bo",
		"Br", "Bu", "By", "Ca", "Ce", "Ch", "Ci", "Cl", "Co", "Cr", "Cu", "Cy",
		"Da", "De", "Di", "Do", "Dr", "Du", "Dw", "Dy", "Ea", "Eb", "Ed", "Ef",
		"Ei", "El", "Em", "En", "Er", "Es", "Et", "Eu", "Ev", "Ez", "Fa", "Fe",
		"Fi", "Fl", "Fo", "Fr", "Ga", "Ge", "Gi", "Gl", "Go", "Gr", "Gu", "Gw",
		"Ha", "He", "Hi", "Ho", "Hu", "Ia", "Id", "Ig", "Im", "In", "Ir", "Is",
		"Iv", "Ja", "Je", "Ji", "Jo", "Ju", "Ka", "Ke", "Ki", "Ko", "Kr", "Ku",
		"Ky", "La", "Le", "Li", "Ll", "Lo", "Lu", "Ly", "Ma", "Me", "Mi", "Mo",
		"Mu", "My", "Na", "Ne", "Ni", "No", "Ny", "Oc", "Ol", "Om", "Or", "Os",
		"Ot", "Ow", "Pa", "Pe", "Ph", "Pi", "Po", "Pr", "Qu", "Ra", "Re", "Rh",
		"Ri", "Ro", "Ru", "Ry", "Sa", "Sc", "Se", "Sh", "Si", "So", "Sp", "St",
		"Su", "Sy", "Ta", "Te", "Th", "Ti", "To", "Tr", "Ty", "Ul", "Ur", "Va",
		"Ve", "Vi", "Wa", "We", "Wh", "Wi", "Wo", "Wy", "Xa", "Ya", "Ye", "Yo",
		"Yv", "Za", "Zo" ];
var midLetters = [ "ch", "nn", "so", "y", "ri", "at", "me", "li", "vi", "ge",
		"be", "hn", "mb", "ia", "sa", "tt", "ep", "ll", "co", "ni", "se", "ic",
		"ss", "ff", "an", "iz", "ot", "ra", "ev", "rk", "ry", "om", "ur", "th",
		"mo", "wn", "re", "ac", "ar", "sh", "ad", "dr", "ul", "rr", "na", "mm",
		"aw", "ro", "eg", "nd", "nj", "tr", "st", "am", "in", "nt", "wa", "dd",
		"ys", "ny", "ya", "il", "it", "av", "la", "or", "te", "ug", "ai", "is",
		"mu", "mi", "ym", "bi", "id", "en", "rc", "oy", "ga", "sl", "rl", "el",
		"dn", "to", "ma", "er", "nc", "rb", "bo", "ik", "ne", "le", "cq", "et",
		"bb", "on", "di", "ct", "rg", "n", "ex", "br", "wr", "ta", "gi", "lt",
		"rt", "e", "yn", "za", "nr", "ah", "su", "ei", "ck", "ui", "hl", "nu",
		"uc", "ed", "ca", "gu", "rm", "dy", "of", "by", "lp", "rv", "lv", "m",
		"im", "au", "ay", "wi", "if", "eo", "tc", "ti", "de", "pe", "lo", "oo",
		"ej", "aa", "a", "fa", "fr", "yc", "kk", "rn", "ng", "ig", "iv", "lb",
		"ve", "ua", "rs", "ey", "ki", "ke", "ie", "qu", "gg", "ls", "ir", "tu",
		"gh", "al", "oc", "si", "xa", "rd", "as", "ef", "ha", "ak", "o", "d",
		"es", "do", "fo", "x", "bl", "yd", "ew", "ts", "ci", "lc", "yo", "ba",
		"no", "i", "ly", "ns", "vo", "ab", "xt", "ce", "rj", "ph", "sm", "z",
		"ij", "gr", "aq", "go", "tw", "ub", "cy", "yl", "os", "tz", "nm", "lf",
		"mr", "em", "yr", "ld", "b", "he", "we", "va", "ea", "du", "rq", "ag",
		"ze", "ov", "fu", "iq", "ty", "ec", "ol", "us", "xi", "dg", "rw", "ds",
		"nv", "sp", "p", "cc", "od", "ud", "c", "gd", "xw", "ee", "s", "da",
		"ju", "nk", "ko", "ru", "fi", "nz", "ek", "cr", "hs", "ye", "l", "nw",
		"pp", "ja", "op", "uz", "io", "lm" ];
function genNameRandom() {
	firstLetters = beginLetters[Math.random() * beginLetters.length | 0];
	midLetter = midLetters[Math.random() * midLetters.length | 0];
	name = firstLetters + midLetter;
	consonantRow = 0;
	done = false;
	newname = name;
	while (done == false) {
		console.log("N:" + name);
		done = true;
		for (i in name) {
			if (isConsonant(name[i])) {
				consonantRow++;
				if (consonantRow == 3) {
					nr = 0;
					newname = "";
					while (true) {
						nr++;
						console.log(nr);
						if (nr > i) {
							console.log(newname);
							break;
						}
						newname += name[nr - 1];
						console.log("newname += name[" + nr + "-1];");
					}
					randomVowel = vowels[Math.random() * vowels.length | 0];
					newname += randomVowel;
					newname += name.substr(newname.length - 1);
				}
			} else {
				consonantRow = 0;
			}
		}
	}
	return newname;
}
function genNameClassic() {
	chars = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
	vowels = "aeiouy";
	consonants = "bcdefghjklmnpqrstvxyz";
	n = Math.floor(Math.random() * chars.length);
	part1 = chars.substring(n, n + 1);
	n = Math.floor(Math.random() * vowels.length);
	part2 = vowels.substring(n, n + 1);
	part3 = "";
	nr = 1;
	if (isNaN(parseInt(localStorage["minlength"])))
		localStorage["minlength"] = 2;
	if (isNaN(parseInt(localStorage["maxlength"])))
		localStorage["maxlength"] = 8;
	minVal = parseInt(localStorage["minlength"]);
	maxVal = parseInt(localStorage["maxlength"]) + 1;
	length = parseInt(Math.floor((maxVal - minVal) * Math.random())) + minVal;
	while (length - 1 != nr) {
		nr++;
		if (nr % 2 == 0) {
			n = Math.floor(Math.random() * consonants.length);
			part3 += consonants.substring(n, n + 1);
		} else {
			n = Math.floor(Math.random() * vowels.length);
			part3 += vowels.substring(n, n + 1);
		}
	}
	name = part1 + part2 + part3;
	return name;
}
function genNamePopular() {
	names = getPopularNames();
	return names[Math.random() * names.length | 0];
}
function isConsonant(char) {
	if (consonants.indexOf(char.toUpperCase()) != -1)
		return true;
	else
		return false;
}