
export async function deleteArticle(articleId) {
  try {
    await fetch(
      `https://parseapi.back4app.com/classes/Article/${articleId}`, 
      {
        method: "DELETE",
        headers: {
          "X-Parse-Application-Id": "prgwSUltp9nUB75hqh7iW21kwd4xqVfhzIsTIzZz",
          "X-Parse-REST-API-Key": "7ZrNafHsjRyJKG85atUxrfYQmvekiwT0W9yEr8DF",
        },
      }
    );
  } catch (error) {
    alert(`Error! ${error.message}`);
  }
}


export async function deleteIdea(ideaId) {
  try {
    await fetch(
      `https://parseapi.back4app.com/classes/Idea/${ideaId}`, 
      {
        method: "DELETE",
        headers: {
          "X-Parse-Application-Id": "prgwSUltp9nUB75hqh7iW21kwd4xqVfhzIsTIzZz",
          "X-Parse-REST-API-Key": "7ZrNafHsjRyJKG85atUxrfYQmvekiwT0W9yEr8DF",
        },
      }
    );
  } catch (error) {
    alert(`Error! ${error.message}`);
  }
}

// Needs updates in order to work! 
export async function getUser(userId) {
  try {
    await fetch(
      `https://parseapi.back4app.com/User/${userId}`, 
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "prgwSUltp9nUB75hqh7iW21kwd4xqVfhzIsTIzZz",
          "X-Parse-REST-API-Key": "7ZrNafHsjRyJKG85atUxrfYQmvekiwT0W9yEr8DF",
        },
      }
    );
  } catch (error) {
    alert(`Error! ${error.message}`);
  }
}



/* async function updateIdea(ideaId) {
  try {
    const response = await fetch(
      `https://parseapi.back4app.com/classes/Idea/${ideaId}`, 
      {
        method: "PUT",
        headers: {
          "X-Parse-Application-Id": "prgwSUltp9nUB75hqh7iW21kwd4xqVfhzIsTIzZz",
          "X-Parse-REST-API-Key": "7ZrNafHsjRyJKG85atUxrfYQmvekiwT0W9yEr8DF",
        },
        body: (postData)
      }
    );
  
  if (!response.ok) {
   const message = "Error with Status Code: " + response.status;
   throw new Error(message);
  }

  const data = await response.json();
  console.log(data);
  } catch (error) {
  console.log("Error: " + error);
  }
} */