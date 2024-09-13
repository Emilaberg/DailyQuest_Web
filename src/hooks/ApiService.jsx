function ApiService() {
  async function apicaller(endpoint, content, param) {
    let message = {
      status: null,
      statusText: null,
    };

    let url = `https://localhost:7174/api/${endpoint}${
      param ? `/${param}` : ""
    }`;

    try {
      let response = await fetch(url, content);
      let data;
      if (response.ok) data = await response.json();

      message.status = response.ok;
      message.statusText = response.statusText;

      return { data, message };
    } catch (error) {
      console.log("server is down ");
    }
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
  async function createReport(data) {
    //formData är ett objekt med values.
    // var data = await apicaller("Report");
    let now = new Date().toISOString();

    let content = {
      method: "POST",
      body: JSON.stringify({
        email: data.Email,
        message: data.Message,
        subject: data.Subject,
        timeStamp: now,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    // await apicaller("Ticket", content, "emil");

    try {
      await fetch("https://localhost:7174/api/Ticket/emil", content);
      return true;
    } catch (error) {
      return false;
    }
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

  return {
    getAllQuiz,
    getAllAnswer,
    getQuizbyId,
    getAllMetaTags,
    createReport,
  };
}

export default ApiService;
