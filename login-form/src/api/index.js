let baseUrl = 'https://1nimmg3p7f.execute-api.us-east-1.amazonaws.com/prod/aboveline_jr_test_service'

export function logIn(params) {
  console.log('logIn function called with params: ', params);
  // return fetch(`${baseUrl}/sign_in`, {
  return fetch(`${baseUrl}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
}
