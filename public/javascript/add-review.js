
<<<<<<< HEAD
async function newFormHandler(event) {
=======
 async function newFormHandler(event) {
>>>>>>> 2fd5c109f6b34f4772d111d6057a558da2f7a044
  event.preventDefault();

  //console.log(document.querySelector('#reviewSubmit').value);

  const review = document.querySelector('input[name="review-title"]').value;
  var pathName= window.location.pathname;
  var bookId = pathName.slice(12);
 
<<<<<<< HEAD
  const response =  await fetch(`/api/review/add`, {
=======
  const response = await fetch(`/api/review/add`, {
>>>>>>> 2fd5c109f6b34f4772d111d6057a558da2f7a044
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      book_id: bookId,
      user_id: document.querySelector('#reviewSubmit').value,
      comment: review,
      created: Date(),
      updated: Date()
    })    
   });
   

  if (response.ok) {
    document.location.reload();
  } else {
    console.log("testing");
  }
}

<<<<<<< HEAD
document.querySelector('#reviewSubmit').addEventListener('click', newFormHandler);
=======

document.querySelector('.reviewClick').addEventListener('click', newFormHandler);
>>>>>>> 2fd5c109f6b34f4772d111d6057a558da2f7a044


