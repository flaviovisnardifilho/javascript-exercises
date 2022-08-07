const caesar = function (s, n) {
  return String.fromCharCode(
    ...s.split('').map(i => calculateUnicode(i.charCodeAt(0), n))
  );
};

function calculateUnicode(unicode, n) {
  // let letter = char.charCodeAt(0);
  if (unicode < 65 || unicode > 122 || (unicode > 90 && unicode < 97)) {
    return unicode;
  } else if (
    unicode >= 65 &&
    unicode <= 90 &&
    !(unicode + n >= 65 && unicode <= 90)
  ) {
    // if unicode + n > 90 return
    return unicode + n;
  }

  return unicode + n;
  // return char.charCodeAt(0) + n;
}

/*
65 - A
Z - 90
97 - a
112 - z
*/

// Do not edit below this line
module.exports = caesar;
