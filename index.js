const element = document.createElement('div');
undefined
document.body.appendChild(element);

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();

const header = document.getElementById('header');
header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

element.style.backgroundColor = '#27647B';
"#27647B"
element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2;
2
element.className = "dog";
element.className = "pet-listing dog";
"pet-listing dog"
element.classList.remove("unneeded-class");
element.classList.add("pet-listing", "dog");

ul.remove();
