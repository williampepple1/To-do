input = document.querySelector('.task');
list = document.querySelector('.list');
enter = document.querySelector('.enter');
del = document.querySelectorAll('.trash');
edit = document.querySelectorAll('.edit');
container = document.querySelector('.container');

enter.addEventListener('click', function(){
  if (input.value.length > 0) {
    addTask();
  }
});

input.addEventListener('keydown', function(event) {
  if (input.value.length > 0 && event.which === 13) {
    event.preventDefault();
    addTask();
  }
});

for (var i = 0; i < del.length; i++) {
  del[i].addEventListener('click', delTask);
}

for (var i = 0; i < edit.length; i++) {
  edit[i].addEventListener('click', editTask);
}

function addTask() {
  //New List element
  li = document.createElement('li');
  list.appendChild(li);
  //New paragraphelement
  p = document.createElement('p');
  li.appendChild(p);
  p.appendChild(document.createTextNode(input.value));
  //New edit button;
  edit = document.createElement('button');
  edit.className = 'edit';
  edit.addEventListener('click', editTask);
  faEdit = document.createElement('i');
  faEdit.className = 'fas fa-edit'
  edit.appendChild(faEdit);
  li.appendChild(edit);
  //New delete button;
  del = document.createElement('button');
  del.className = 'trash;'
  faDel = document.createElement('i');
  faDel.className = 'fas fa-trash'
  faDel.addEventListener('click', delTask);
  del.appendChild(faDel);
  li.appendChild(del);
  input.value = '';
}

function delTask() {
  if (confirm('Are you sure?')) {
    li = event.target.parentElement.parentElement;
    list.removeChild(li);
  }
}

function editTask() {
  li = event.target.parentElement.parentElement;
  input.value = li.firstElementChild.textContent;
  list.removeChild(li);
}
