class Api {
  constructor(options) {
    //constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "c6fe6301-d306-4acc-be32-290ad67fcfdc",
      },
    }).then((res) => res.json());
  }

  // other methods
}
export default Api;
