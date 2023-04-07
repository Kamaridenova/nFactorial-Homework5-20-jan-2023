// id="age-table"
const findAgeId = document.getElementById('#age-table');
console.log(findAgeId);

// Все элементы label внутри этой таблицы (их три).
const findAgeAllElem = document.getElementById('age-table');
console.log(findAgeAllElem);

// Первый td в этой таблице (со словом «Age»).
const tdAge = document.getElementsByTagName('td');
console.log(tdAge[0]);

// Форму form с именем name="search".
const formSearchAge = document.getElementsByTagName('form');
console.log(formSearchAge[0]);

// Первый input в этой форме.
let fInput = document.getElementsByTagName('input')[0];
console.log(fInput);

// Последний input в этой форме.
let AllInputs = document.querySelectorAll('input');
console.log(AllInputs[AllInputs.length-1]);

// вывести элементы
// {/* <script> */}
// const Allbodies = document.body;// все элементы body
// console.log(Allbodies);

 let Elem = document.getElementsByTagName('body');
console.log(Elem.innerHTML = `"<!--" + ${Elem} + "-->"`);

const Allbodies = document.body;

const firstChildNode = Allbodies.firstChild;
console.log(firstChildNode);
  alert(firstChildNode); // что выведет?
// </script>
