const app = new AppController();

app.init();

const showButton = document.getElementById("showDialog");
const newShowDialog = document.getElementById("newShowDialog");

const confirmBtn = newShowDialog.querySelector("#confirmBtn");

const cancelButton = newShowDialog.querySelector('#cancelButton')

showButton.addEventListener("click", () => {
  newShowDialog.showModal();
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    newShowDialog.close(); 
  });

function sendData(event){
    event.preventDefault();
    const form = document.forms['create'];

    // const title = form['title'].value;

    const formData = new FormData(form);

    // let isOverBool;

    // if (formData.get('isOver') === 'on') {
    //     isOverBool = true;
    // } else {
    //     isOverBool = false;
    // }

    const newShow = {
        title: formData.get('title'),
        author: formData.get('author'),
        imageUrl: formData.get('imageUrl'),
        isOver: formData.get('isOver') === 'on' ? true : false,
        upVotes: 0,
        downVotes: 0
    }

    console.log(newShow);

    DBService.createShow(newShow)
    .then(show => window.location = './index.html')
    .catch(error => alert(error.message));
}