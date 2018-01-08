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

export function getAddicksTrails() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TRAILS' })
    var proxyUrl = 'https://hidden-reaches-61697.herokuapp.com/',
      targetUrl = 'https://katy-hiking-trails.herokuapp.com/trails/addicks.json'
    return fetch(proxyUrl + targetUrl, {
    method: "get", headers: { "Content-Type": "application/json" }})
        .then(response => {
          return response.json()
        }).then(payload => dispatch({ type: 'SHOW_TRAILS', payload }));
  };
}

export function getBarkerTrails() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TRAILS' })
    var proxyUrl = 'https://hidden-reaches-61697.herokuapp.com/',
      targetUrl = 'https://katy-hiking-trails.herokuapp.com/trails/barker.json'
    return fetch(proxyUrl + targetUrl, {
    method: "get", headers: { "Content-Type": "application/json" }})
        .then(response => {
          return response.json()
        }).then(payload => dispatch({ type: 'SHOW_TRAILS', payload }));
  };
}

export function jwt(data, routerHistory) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch('/user_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: data
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        response.json()
        .then(data => {
          localStorage.setItem('jwt', data.jwt)
          dispatch({ type: 'RETURN_JWT'});
          dispatch({ type: 'LOADING' });
          return fetch('/api/users/:id', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
          }).then(response => response.json())
          .then(data => {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({ type: 'CURRENT_USER', payload: data });
            routerHistory.replace('/');
          });
        });
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
      dispatch({ type: 'INVALID_SIGNIN' })
    });
  }
}

export function signUp(data, routerHistory) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch('/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: data
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
       response.json()
        .then(data => {
          localStorage.setItem('jwt', data.jwt)
          dispatch({ type: 'RETURN_JWT' });
          dispatch({ type: 'LOADING' });
          return fetch('/api/users/:id', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('jwt')
            }
          })
          .then(response => response.json())
          .then(data => {
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({ type: 'CURRENT_USER', payload: data });
            routerHistory.replace('/');
          })
        })
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
      dispatch({ type: 'INVALID_SIGNUP' })
    });
  }
}

export function signOut() {
  return (dispatch) => {
    dispatch({ type: 'LOGGED_OUT' })
    window.location.replace('/login');
  }
}
