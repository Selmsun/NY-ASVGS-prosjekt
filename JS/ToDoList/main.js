//localstorage, if else, ToDo liste
const inputVal = document.getElementsByClassName('inputVal')[0];

const addTaskBtn = document.getElementsByClassName('btn')[0];


addTaskBtn.addEventListener('click', function () { //når du klikke på addTaskBtn legger den til det du skreiv inn i inputVal

   if (inputVal.value.trim() != 0) {
      let localItems = JSON.parse(localStorage.getItem('localItem')) //localStorage = husker det du skreiv inn
      if (localItems === null) {
         taskList = []

      } else {
         taskList = localItems;
      }
      let found = false //ikkje samme ting to ganger på lista
      for (let i = 0; i < taskList.length; i++){
         if (taskList[i]==inputVal.value ) {
            found = true
         }

      }
      if (!found) {
         taskList.push(inputVal.value)
         localStorage.setItem('localItem', JSON.stringify(taskList));   
      }
   }

   showItem()
})

function showItem() { //viser det du skriver inn
   let localItems = JSON.parse(localStorage.getItem('localItem'))
   if (localItems === null) {
      taskList = []

   } else {
      taskList = localItems;
   }


   let html = '';
   let itemShow = document.querySelector('.todoLists');
   taskList.forEach((data, index) => {


      html += `
   <div class="todoList">
   <p class="pText">${data}</p>
   <button class="deleteTask" onClick="deleteItem(${index})">x</button>
   </div>
   `
   })
   itemShow.innerHTML = html;
}
showItem()

function deleteItem(index) { //sletter ein og ein(den du velger)
   let localItems = JSON.parse(localStorage.getItem('localItem'))
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
}

function clearTask() { //sletter alt på lista

   localStorage.clear()
   showItem()
}