const user = { id: 1 };
user.name = "Raul";
user.guardar = function () {
  console.log("guardando", user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log("user ", user);

const user1 = Object.freeze({ id: 1 });
user1.name = "Rafa";
user1.id = 2;
console.log("user1 ", user1);

const user2 = Object.seal({ id: 1 });
user2.name = "Rafa";
user2.id = 2;
console.log("user2 ", user2);
