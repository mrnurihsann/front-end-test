export const login = async () => {
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      expiresInMins: 30,
    }),
    credentials: "include",
  })
    .then((res) => res.json())
    .then(console.log);
};
