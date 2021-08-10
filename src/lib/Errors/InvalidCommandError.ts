class InvalidCommandError extends Error {
  constructor(command: string, args: Array<string>) {
    let message = 'You must specify the following args: ';
    message += args.join(', ');
    message += `. Ex: ${command} ${args.map((arg) => `[${arg}]`).join(' ')}`;
    super(message);
  }
}

export default InvalidCommandError;
