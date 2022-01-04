
async function newFormHandler(event) {
  event.preventDefault();

  const review = document.querySelector('input[name="review-title"]').value;
  //const review_url = document.querySelector('input[name="review-url"]').value;

const pathName = window.location.pathname;
const bookId = pathName.slice(12);
 
if (review) {
  const response = await fetch('/api/review/', {
    method: 'POST',
    body: JSON.stringify({
      book_id: bookId,
      userId: document.querySelector('#reviewSubmit').value,
      comment: review
      // created: ,
      // updated:
    }),
    headers: {
      'Content-Type': 'application/json'
    }
   });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}
}

document.querySelector('#reviewSubmit').addEventListener('click', newFormHandler);
// document.querySelector('.new-review-form').addEventListener('submit', newFormHandler);

