
function newFormHandler(event) {
  event.preventDefault();

  const review = document.querySelector('input[name="review-title"]').value;
  //const review_url = document.querySelector('input[name="review-url"]').value;

  var pathName= window.location.pathname;
  var bookId = pathName.slice(12);
 

  const response = fetch('/api/review', {
    method: 'POST',
    body: JSON.stringify({
      book_id: bookId,
      userId: document.querySelector('#reviewSubmit').value,
      comment: review,
      // created: ,
      // updated:
    }),
    // headers: {
    //   'Content-Type': 'application/json'
    // }
   });

  // if (response.ok) {
  //   document.location.replace('/dashboard');
  // } else {
  //   alert(response.statusText);
  // }
  // console.log("Hello add-Review.js");
}


document.querySelector('#reviewSubmit').addEventListener('click', newFormHandler);
// document.querySelector('.new-review-form').addEventListener('submit', newFormHandler);

