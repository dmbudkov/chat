export default (sender) => {
  if (sender.firstName && sender.lastName)
    return `${sender.firstName} ${sender.lastName}`;
  if (sender.firstName)
    return sender.firstName;
  return sender.username;
};