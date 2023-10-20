function addTodo() {
    var input = document.getElementById('inputField');
    var liElement = document.createElement('li');
    var liText = document.createTextNode(input.value);
    liElement.appendChild(liText);

    var list = document.getElementById('list');
    list.appendChild(liElement);

    input.value = "";

    // Edit button
    var editBtn = document.createElement("button");
    var editbtnText = document.createTextNode("Edit");
    editBtn.appendChild(editbtnText);
    liElement.appendChild(editBtn);
    editBtn.setAttribute("onclick", "editItem(this)");

    // Delete Button
    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("onclick", "deleteItem(this)");
    liElement.appendChild(delBtn);
  }

  function deleteAll() {
    var list = document.getElementById('list');
    list.innerHTML = "";
  }

  function editItem(x) {
    var input = prompt("Enter updated value:");
    if (input !== null) {
      x.parentNode.firstChild.nodeValue = input;
    }
  }

  function deleteItem(y) {
    y.parentNode.remove();
  }