const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default email => {
  email.trim();

  const result = re.test(email);
  console.log(result)
  if (result === false) {
    return "Please provide a valid email address";
  }

  return;
};
