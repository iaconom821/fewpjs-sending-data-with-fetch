// Add your code here
// Practice
// const configurationObject = {
//     method: "POST",
//     header: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify( {
//         dogName: "Bodie",
//         dogBreed: "Mostly Chow"
//     })
// }

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(response => response.json())
// .then(object => console.log(object))

let body = document.querySelector('body');
let form = document.querySelector('form');
let ul = document.querySelector('ul');

form.addEventListener('submit', function makeThisFormGo (evt) {
  evt.preventDefault();
  if (evt.target.user.value && evt.target.email.value) {
    submitData(evt.target.user.value, evt.target.email.value)
  }
  
  

})

const submitData = (name, email) => {
    const formData = {
        name: name,
        email: email
      };
      
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    return fetch("http://localhost:3000/users", configObj)
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(object) {
    //   console.log(object);
    // });
    .then(response => response.json())
    .then(obj => {
        workWithData(obj)
        
    })
    .catch(response => {
        const body = document.querySelector('body')
        body.innerHTML = 'Unauthorized Access'
    })

    function workWithData (obj) {
      const li = document.createElement('li');
            li.innerText = `${obj.name} ${obj.email}`
            li.className = 'listItem'

      const deleteButton = document.createElement('button')
            deleteButton.className = 'deleteButton'
            deleteButton.innerText = 'delete'

      const changeButton = document.createElement('button')
            changeButton.className = 'newForm'
            changeButton.innerText = 'Change Values'

      li.append(deleteButton, changeButton);
      li.style.display = 'inline-block'
      
      ul.append(li)

      deleteButton.addEventListener('click', function (){
        fetch(`http://localhost:3000/users/${obj.id}`, {
          method: 'DELETE',
          })
          .then(res => res.json())
          .then(obj => li.remove())
      })

      changeButton.addEventListener('click', function () {
        const newName = form.user.value
        const newEmail = form.email.value
        fetch(`http://localhost:3000/users/${obj.id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: newName,
            email: newEmail
          })         
        })
        .then(res => res.json())
        .then(obj => console.log(obj))
        debugger;
        li.innerText = `${newName} ${newEmail}`
        li.append(deleteButton, changeButton)
        li.style.display = 'inline-block'

      })
      debugger;
    }
}