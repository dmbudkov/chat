export default (string) => {

  try {
    return string
      .split(' ')
      .map(word => word[0])
      .map(char => char.toUpperCase())
      .slice(0, 2)
      .join('');
  }
  catch (err) {
    console.error(err);
    return '😎';
  }
}