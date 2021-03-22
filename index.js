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
        const body = document.querySelector('body')
        body.innerHTML = obj.id
    })
    .catch(response => {
        const body = document.querySelector('body')
        body.innerHTML = 'Unauthorized Access'
    })
}