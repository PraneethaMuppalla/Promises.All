let usersLastActivityTime = new Date().toLocaleString();
console.log("time before" + usersLastActivityTime);
let posts = [{ title: "Post 1" }, { title: "Post 2" }];
function updateLastUserActivityTime() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      usersLastActivityTime = new Date().toLocaleString();
      res();
    }, 1000);
  });
}

function createNewPost() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push({ title: "New post" });
      res();
    }, 3000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.pop();
      resolve();
    }, 1000);
  });
}

function printPost() {
  posts.forEach((post) => {
    console.log(post.title);
  });
}

Promise.all([updateLastUserActivityTime(), createNewPost()]).then(() => {
  printPost();
  console.log(usersLastActivityTime);
});

deletePost().then(printPost);
