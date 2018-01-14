export function getFavoriteTrails() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FAVORITE_TRAILS' })
    var proxyUrl = 'https://hidden-reaches-61697.herokuapp.com/',
      targetUrl = 'https://katy-hiking-trails.herokuapp.com/trails/favorites.json'
    return fetch(proxyUrl + targetUrl, {
    method: "get", headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }})
        .then(response => {
          return response.json()
        }).then(payload => dispatch({ type: 'SHOW_FAVORITE_TRAILS', payload }));
  };
}

export function persistTrail(name, description, link, comments) {
  const noteInfo = JSON.stringify({
    note:{
      name: name,
      description: description,
      link: link,
      comments: comments
    }
  });
  return (dispatch) => {
    dispatch({ type: 'SAVING_TRAIL' })
    var proxyUrl = 'https://hidden-reaches-61697.herokuapp.com/',
      targetUrl = 'https://katy-hiking-trails.herokuapp.com/trails/favorites'
    return fetch(proxyUrl + targetUrl, {
      method: "post", body: noteInfo, headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }})
      .then(response => response.json()).then(payload => dispatch({ type: 'ADD_TRAIL', payload }));
  }
}

export function updateTRAIL(trailId, name, description, link, comments) {
  return (dispatch) => {
    dispatch({ type: 'SAVING_TRAIL' })
    var proxyUrl = 'https://hidden-reaches-61697.herokuapp.com/',
      targetUrl = `https://katy-hiking-trails.herokuapp.com/trails/favorites/${trailId}`
    return fetch(proxyUrl + targetUrl, {
      method: "put", body: JSON.stringify({note:{
        name: name,
        description: description,
        link: link,
        comments: comments
      }
    }), headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    })
      .then(response => response.json()).then(payload => dispatch({ type: 'SAVING_NOTE' }))
      .then(payload => {
      dispatch({ type: 'LOADING_FAVORITE_TRAILS' })
      return fetch(proxyUrl + 'https://katy-hiking-trails.herokuapp.com/trails/favorites', {
      method: "get", headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }})
          .then(response => {
            return response.json()
          }).then(payload => dispatch({ type: 'SHOW_FAVORITE_TRAILS', payload }))
      });
  }
}

export function deleteTrail(trailId) {
  return (dispatch) => {
    dispatch({ type: 'DELETING_TRAIL' })
    var proxyUrl = 'https://hidden-reaches-61697.herokuapp.com/',
      targetUrl = `https://katy-hiking-trails.herokuapp.com/trails/favorites/${trailId}`
    return fetch(proxyUrl + targetUrl, {
      method: "delete",
       headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    })
    .then(payload => {
    dispatch({ type: 'LOADING_FAVORITE_TRAILS' })
    return fetch(proxyUrl + 'https://katy-hiking-trails.herokuapp.com/trails/favorites', {
    method: "get", headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }})
        .then(response => {
          return response.json()
        }).then(payload => dispatch({ type: 'SHOW_FAVORITE_TRAILS', payload }))
    });
  }
}

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
    var proxyUrl = 'https://hidden-reaches-61697.herokuapp.com/',
      targetUrl = 'https://katy-hiking-trails.herokuapp.com/trails/user_token'
    return fetch(proxyUrl + targetUrl, {
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
            var targetUrl1 = 'https://katy-hiking-trails.herokuapp.com/users/:id.json'
          return fetch(proxyUrl + targetUrl1, {
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
    var proxyUrl = 'https://hidden-reaches-61697.herokuapp.com/',
      targetUrl = 'https://katy-hiking-trails.herokuapp.com/register'
    return fetch(proxyUrl + targetUrl, {
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
            var targetUrl1 = 'https://katy-hiking-trails.herokuapp.com/users/:id.json'
          return fetch(proxyUrl + targetUrl1, {
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
