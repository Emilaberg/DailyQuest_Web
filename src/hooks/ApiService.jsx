function ApiService() {
  async function apicaller(endpoint, param, body) {
    let url = `https://localhost:7174/api/${endpoint}${
      param ? `/${param}` : ""
    }`;

    // let result;
    // fetch(method, url, body ? body : "")
    //   .then((data) => data.json())
    //   .then((result) => {
    //     return result;
    //   });
    // console.log(url);
    let response = await fetch(url, body);
    let data = await response.json();
    return data;
  }

  //EXEMPEL FUNKTION
  async function exampleFunc() {
    var data = await apicaller("Quiz");

    return data;
  }

  //REAL FUNCTIONS
  async function getAllQuiz() {
    var data = await apicaller("Quiz");

    return data;
  }

  async function getQuizbyId(id) {
    var data = await apicaller(`Quiz/${id}`);

    return data;
  }

  async function getAllAnswer() {
    var data = await apicaller("Answer");
    return data;
  }

  async function getAllMetaTags() {
    var data = await apicaller("MetaTag");
    return data;
  }

  return { getAllQuiz, getAllAnswer, getQuizbyId, getAllMetaTags };
}

export default ApiService;
