export function getTrails() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TRAILS' })
    return fetch('https://katy-hiking-trails.herokuapp.com/trails', {
    method: "get", headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }})
        .then(response => {
          return response.json()
        }).then(payload => dispatch({ type: 'SHOW_TRAILS', payload }));
  };
}
