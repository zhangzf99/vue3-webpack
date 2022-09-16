(async () => {
  try {
    await sleep(2);
    const { default: fetchData } = await import("./js/fetch");
    const data = await fetchData("/api/users");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
