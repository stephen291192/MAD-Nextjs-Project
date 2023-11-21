export const URL = `http://192.168.2.30:2505/api/v1`;

//Create the mail Request
export async function CreateMailReq(body) {
  // const token = localStorage.getItem(USERTOKEN)
  try {
    const response = await fetch(`${URL}/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      return await response.json();
    }
    if (response.status === 400 || response.status === 404) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (err) {}
}

//Create the Contact form Request
export async function CreateContactFormAPI(body) {
  // const token = localStorage.getItem(USERTOKEN)
  try {
    const response = await fetch(`${URL}/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   Authorization: token,
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 401) {
      return await response.json();
    }
    if (response.status === 400 || response.status === 404) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (err) {}
}
