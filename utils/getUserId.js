export const getUserId = async () => {
  try {
    const response = await fetch("http://localhost:9000/api/user");
    const data = await response.json();
    if (data.success) {
      const userId = data.userId;
      return userId;
    } else {
      console.log("no user id for you");
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};
