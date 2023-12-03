console.log("Person 1: shows ticket");
console.log("Person 2: shows ticket");

const preMovie = async () => {
  const promiseTogetTicket = new Promise((res, rej) => {
    setTimeout(() => {
      res("ticket hello");
    }, 3000);
  });
  const getPopcorn = new Promise((res, rej) => {
    setTimeout(() => {
      res(`popcorn`);
    }, 1000);
  });

  const getButter = new Promise((res, rej) => {
    setTimeout(() => {
      res(`butter`);
    }, 1000);
  });
  let ticket = await promiseTogetTicket;
  console.log(`Wife: I have the ${ticket}`);
  console.log("Husband: Should we go in?");
  console.log("Wife: No I am Hugry");
  let popcorn = await getPopcorn;
  console.log(`Husband:I have ${popcorn}`);
  console.log("Husband: can we go now");
  console.log("Wife: No I need butter");
  let butter = await getButter;
  console.log(`Husband:I got ${butter} on popcorn`);
  console.log("Husband: Do you need anything?");
  console.log("Wife: We are getting late");
  return ticket;
};
preMovie().then((m) => {
  console.log(m);
});
console.log("Person 4: shows ticket");
console.log("Person 5: shows ticket");
