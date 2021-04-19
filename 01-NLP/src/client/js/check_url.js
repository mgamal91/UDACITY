export function urlChecker(inputURL) {
    var regex = inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if (regex == null) {
        return 0;
    } else {
        return 1;
    }
}
//Explaining:
/*check if the input URL matches the criteria for rejex
 *protocol:(http, https)
 *subdomain:www
 *domain name can be a set of numbers, symbols, alphabets
 *top-level domain is not needed as some links will be passed w/o them
 *top domain like .com, .org,.net..etc
 *g: global
 */