import Parse from "parse";

export async function cloudSumIdea() {
    let result = await Parse.Cloud.run("sumIdea", {
    })
    return result
  }

  export async function cloudSumArticle() {
    let result = await Parse.Cloud.run("sumArticle", {
    })
    return result
  }