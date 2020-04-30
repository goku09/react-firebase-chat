import { firebaseDB } from "./";
// *** User Service *** //

const UserService = {
  // Create User
  doCreateUser: (id, username, email) =>
    firebaseDB.ref(`users/${id}`).set({
      username,
      email,
    }),

  // Get All Users
  doOnceGetUsers: () => firebaseDB.ref("users").once("value"),

  // Users List Listner
  doOnUsersChanged: (callback) => firebaseDB.ref("users").on("value", callback),
};

export { UserService };
