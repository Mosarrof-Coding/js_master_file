// without dstructuing
const users = ["jamal", "kamal", "moss"];
// console.log(users[0]);

// with dstructuring: Array dstructuring
const [userJamal, userKamal, userMoss] = users;
// console.log(userMoss);

{
  const newPerson = {
    name: "moss",
    age2: 23,
    isMarried: true,
    canDreive: true,
    country: "bangladesh",
  };
  // console.log(newPerson.name);

  // dstrutuing/ dot notation call
  // let name = newPerson.name;
  //   let age2 = newPerson.age2;
  //   let canDreive = newPerson.canDreive;
  // console.log(name);

  // Object.Dstructing
  const { name, country, isMarried } = newPerson;
  console.log(country, isMarried);

  // by function
  function Person({ name, age2 }) {
    console.log(`My name is ${name} age is ${age2}`);
  }
  Person(newPerson);

  let allUsers = { ...newPerson };
  console.log(allUsers);
}
{
  // spread operator
  const groupOne = [1, 3, 4];
  const groupTwo = [4, 5, 6];

  let combineGroup = groupOne.concat(groupTwo);

  const newArr = [...groupOne, ...groupTwo];
  //   console.log(newArr);

  function sum(x, y, z) {
    console.log(x + y + z);
  }
  sum(...groupOne);
  sum(...groupTwo);
}

{
  // async function
  async function fetchApi() {
    try {
      const res = await fetch("https://jsonplaceholder.typmicode.com/posts");
      const data = await res.json();
      console.log(data);
      data.map((post) => console.log(post.title));
    } catch {
      console.log("thise is error");
      console.error("thise is error");
    }
  }
  fetchApi();
}
