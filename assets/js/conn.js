  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyB4sF0xbt5vqd_vYs2KTcnYs8QTLcR4EMY",
      authDomain: "contactform-1bb15.firebaseapp.com",
      projectId: "contactform-1bb15",
      storageBucket: "contactform-1bb15.appspot.com",
      messagingSenderId: "564865679360",
      appId: "1:564865679360:web:2e7b11a1f899b8b99418e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //reference messages collection
  var messagesRef = firebase.database().ref('infos');
  //listen for form submit
  document.getElementById('contactform').addEventListener('submit', submitForm);

  function submitForm(e) {
      e.preventDefault();
      var name = getInputVal('name');
      var email = getInputVal('email');
      var message = getInputVal('message');
      saveMessage(name, email, message);
      document.getElementById('contactform').reset();
  }

  //function to get form values
  function getInputVal(id) {
      return document.getElementById(id).value;
  }


  //save message to firebase
  function saveMessage(name, email, message) {
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          email: email,
          message: message

      });
  }