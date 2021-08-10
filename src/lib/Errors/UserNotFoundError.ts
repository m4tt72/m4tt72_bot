class UserNotFoundError extends Error {
  constructor() {
    super("You don't have an account yet, please use /register to create one");
  }
}

export default UserNotFoundError;
