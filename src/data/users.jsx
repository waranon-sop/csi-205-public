const users = [
  {
    user: "user",
    pass: "pass",
    role: "user",
    token: "user",
  },
  {
    user: "admin",
    pass: "pass",
    role: "admin",
    token: "admin",
  },
  {
    user: "guest",
    pass: "pass",
    role: "guest",
    token: "guest",
  },
  {
    user: "Pipe",
    pass: "1234",
    role: "user",
    token: "user",
  },
];

export function verifyUser(user, pass) {
  const userFound = users.find((u) => {
    return u.user === user && u.pass === pass;
  });
  return userFound ? { role: userFound.role, token: userFound.token } : null;
}
