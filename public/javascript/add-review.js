async function newFormHandler(event) {
  event.preventDefault();

  const review = document.querySelector('input[name="review"]').value;
  const review_url = document.querySelector('input[name="review-url"]').value;

  console.log("Testing Log  " + review);

  const response = await fetch(`/api/review`, {
    method: 'POST',
    body: JSON.stringify({
      review
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
  console.log("Hello add-Review.js");
}



document.querySelector('.reviewSubmit').addEventListener('submit', newFormHandler);
document.querySelector('.new-review-form').addEventListener('submit', newFormHandler);

