/**
 * API Request handler
 * @param url - api endpoint
 * @param method - http method
 * @param bodyParams - body parameters of request
 */

export const apiRequest = async (
    url,
    method,
    bodyParams
  ) => {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: bodyParams ? JSON.stringify(bodyParams) : undefined
    });
  
    return await response.json();
  };