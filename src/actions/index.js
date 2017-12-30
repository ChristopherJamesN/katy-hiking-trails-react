export function getTrails() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TRAILS' })
    var proxyUrl = 'https://hidden-reaches-61697.herokuapp.com/',
      targetUrl = 'https://katy-hiking-trails.herokuapp.com/trails.json'
    return fetch(proxyUrl + targetUrl, {
    method: "get", headers: { "Content-Type": "application/json" }})
        .then(response => {
          return response.json()
        }).then(payload => dispatch({ type: 'SHOW_TRAILS', payload }));
  };
}
