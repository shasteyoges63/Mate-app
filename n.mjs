const response = await fetch(
    "https://generativelanguage.googleapis.com/v1/models?key=" + "AIzaSyBN4n3or1shaEe4TW4dFZJ7Qe7xpDlYR-g"
  );
  const data = await response.json();
  console.log(data);
  