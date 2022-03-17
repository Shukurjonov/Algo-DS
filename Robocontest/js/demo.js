let str =  `aconsole.log(olma) console.log() bilan
        console.log(nimadir)`;

str = str.toString()
let find = str.('console.log(');
let findEnd = str.find(')', find);
str = str.substring(find, findEnd);

console.log(str);