let xmlStr = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>30</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>60</age>
    <prof>driver</prof>
  </student>
</list>`;

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlStr, "application/xml");

const students = [];
const studentNodes = xmlDoc.getElementsByTagName("student");

for (let i = 0; i < studentNodes.length; i++) {
  let student = {};
  const name = studentNodes[i].getElementsByTagName("name")[0];
  const firstName = name.getElementsByTagName("first")[0].textContent;
  const lastName = name.getElementsByTagName("second")[0].textContent;
  const fullName = `${firstName} ${lastName}`;
  student.name = fullName;
  student.age = parseInt(studentNodes[i].getElementsByTagName("age")[0].textContent);
  student.prof = studentNodes[i].getElementsByTagName("prof")[0].textContent;
  student.lang = name.getAttribute("lang");
  students.push(student);
}

var result = { list: students };
console.log(result);

const xmlStr = '<list><item><name>Petr</name><age>20</age><prof>mechanic</prof></item><item><name>Vova</name><age>60</age><prof>pilot</prof></item></list>';
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlStr, "application/xml");

const list = [];
const itemNodes = xmlDoc.getElementsByTagName("item");

for (let i = 0; i < itemNodes.length; i++) {
  const item = {};
  item.name = itemNodes[i].getElementsByTagName("name")[0].textContent;
  item.age = itemNodes[i].getElementsByTagName("age")[0].textContent;
  item.prof = itemNodes[i].getElementsByTagName("prof")[0].textContent;
  list.push(item);
}

const result = { list };
console.log(result);

