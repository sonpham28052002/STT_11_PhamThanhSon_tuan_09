var a = [];
fetch("https://653f16559e8bd3be29dfed17.mockapi.io/todos")
  .then((x) => x.json())
  .then((data) => {
    a = data;
  });

function reducer(state = undefined, action) {
  switch (action.type) {
    case "put":
      action.account.todo.push(action.job);
      fetch(
        `https://653f16559e8bd3be29dfed17.mockapi.io/todos/${action.account.id}`,
        {
          method: "Put",
          cache: "no-cache",
          body: JSON.stringify(action.account),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        }
      )
        .then((x) => x.json())
        .then((data) => {
          return { ...data };
        });
      return state;

    case "signin":
      var acc = {};
      if (a.filter((item) => item.email == action.value).at(0) != undefined) {
        acc = a.filter((item) => item.email == action.value).at(0);
      }
      return { ...acc };

    default:
      return state;
  }
}

export default reducer;
