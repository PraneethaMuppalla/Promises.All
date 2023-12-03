console.log("Person 1: shows ticket");
console.log("Person 2: shows ticket");

const promiseTogetTicket = new Promise((res, rej) => {
  setTimeout(() => {
    res("ticket");
  }, 3000);
});

const getPopcorn = promiseTogetTicket.then((t) => {
  console.log("Wife: I have the tickets");
  console.log("Husband: Should we go in?");
  console.log("Wife: No I am Hugry");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${t} popcorn`);
    }, 1000);
  });
});

const getButter = getPopcorn.then((t) => {
  console.log("Husband:I have popcorn");
  console.log("Husband: can we go now");
  console.log("Wife: No I need butter");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`${t} butter`);
    }, 1000);
  });
});

getButter.then((t) => {
  console.log(t);
});

console.log("Person 4: shows ticket");
console.log("Person 5: shows ticket");
