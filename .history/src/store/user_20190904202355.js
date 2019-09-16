import firebase from 'firebase';

export default {
  state: {
    user: {
        isAuthenticated: false,
        uid: null
    }
  },
  mutations: {

  },
  actions: {
    LOGUP({commit}, payload){
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
            console.log(user);
        })
        .catch(function(error) {
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
  },
}
