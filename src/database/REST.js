
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