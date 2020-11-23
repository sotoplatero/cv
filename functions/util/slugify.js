export default (str) {
    str = str
	    .trim()
	    .toLowerCase()
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç";
    var to   = "aaaaeeeeiiiioooouuuunc";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    return str
	    .replace(/\s+/g, ' '); // remove duplicate space
	    .replace(/[^a-z0-9]/g, '-') // remove invalid chars
//        .replace(/\s+/g, '-') // collapse whitespace and replace by -
//        .replace(/-+/g, '-'); // collapse dashes

}