/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0; // Eğer needle boşsa, 0 döndür
    if (needle.length > haystack.length) return -1; // Eğer needle, haystack'ten uzunsa, -1 döndür

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Haystack'in needle kadar uzun olan bir alt stringini kontrol et
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // İlk eşleşmenin başlangıç indeksini döndür
        }
    }

    return -1; // Hiç eşleşme bulunamazsa, -1 döndür
};

let haystack = "sadbutsad";
let needle = "sad";

console.log(strStr(haystack, needle)); // Çıktı: 0