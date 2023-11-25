function show() {
  // para obter elemento pelo seu Id
  const contactList = document.getElementById("contact-list");
  console.log(contactList);
  // para obter elemento pela sua tag
  const listElements = document.getElementsByTagName("li");
  console.log(listElements);
  //para obter elemento mais precisamente
  const label = document.querySelectorAll("#contact-list > li > label");
  console.log(label);
  // para obter elemento pela sua classe
  const contactInput = document.getElementsByClassName("contact.input");
  console.log(contactInput);
  //para obte elemento pelo seu name
  const inputName = document.getElementsByName("contact1");
  console.log(inputName);

  //para obter elemento mais precisamante mas somento o primeiro
  const firstElement = document.querySelector("#contact-list > li > label");
  console.log(firstElement);
}
