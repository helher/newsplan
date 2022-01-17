export async function deleteArticle(articleId) {
  try {
    await fetch(`https://parseapi.back4app.com/classes/Article/${articleId}`, {
      method: "DELETE",
      headers: {
        "X-Parse-Application-Id": "yLIQmZNi3deYCrVYD1bHBQ8RhsBGsZ7xyLXm0Agd",
        "X-Parse-REST-API-Key": "spPufCMBCOntQpOTFsq1yvO0t7hgwbASt9ZRGFLm",
      },
    });
  } catch (error) {
    alert(`Error! ${error.message}`);
  }
}

export async function deleteIdea(ideaId) {
  try {
    await fetch(`https://parseapi.back4app.com/classes/Idea/${ideaId}`, {
      method: "DELETE",
      headers: {
        "X-Parse-Application-Id": "yLIQmZNi3deYCrVYD1bHBQ8RhsBGsZ7xyLXm0Agd",
        "X-Parse-REST-API-Key": "spPufCMBCOntQpOTFsq1yvO0t7hgwbASt9ZRGFLm",
      },
    });
  } catch (error) {
    alert(`Error! ${error.message}`);
  }
}

export async function updateIdea(ideaId, updateData) {
  try {
    const response = await fetch(
      `https://parseapi.back4app.com/classes/Idea/${ideaId}`,
      {
        method: "PUT",
        headers: {
          "X-Parse-Application-Id": "yLIQmZNi3deYCrVYD1bHBQ8RhsBGsZ7xyLXm0Agd",
          "X-Parse-REST-API-Key": "spPufCMBCOntQpOTFsq1yvO0t7hgwbASt9ZRGFLm",
        },
        body: JSON.stringify(updateData),
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
}

// Needs updates in order to work!
export async function getUser(userId) {
  try {
    await fetch(`https://parseapi.back4app.com/User/${userId}`, {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": "yLIQmZNi3deYCrVYD1bHBQ8RhsBGsZ7xyLXm0Agd",
        "X-Parse-REST-API-Key": "spPufCMBCOntQpOTFsq1yvO0t7hgwbASt9ZRGFLm",
      },
    });
  } catch (error) {
    alert(`Error! ${error.message}`);
  }
}
