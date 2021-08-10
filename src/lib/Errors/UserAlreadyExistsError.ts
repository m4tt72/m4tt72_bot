class UserAlreadyExistsError extends Error {
  constructor() {
    super(
      'You are already registered, please use /help to see available commands',
    );
  }
}

export default UserAlreadyExistsError;
