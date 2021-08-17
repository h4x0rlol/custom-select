export const someAsyncFetch = async () => {
  const arr = [];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push(
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Lemon" },
        { id: 5, name: "Lime" }
      );
      resolve(arr);
    }, 1000);
  });
};
