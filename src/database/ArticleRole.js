import Parse from "parse";

export async function readJobList(articleId) {
  let jobArray = [];
  let query = new Parse.Query("ArticleRole");
  query.include("user");
  query.equalTo("articleId", articleId);

  try {
    let job = await query.find();

    job.forEach((job) => {
      jobArray.push(job);
    });
    return jobArray;
  } catch (error) {}
}
