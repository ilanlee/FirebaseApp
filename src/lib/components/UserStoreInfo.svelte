<script>
    import { user } from '$lib/stores/userStore.js'
  
    let userEmail;
    let userId;

    // Create a listener variable
    const unsubscribe = user.subscribe((firebaseUser) => {
      if (firebaseUser) {
        userEmail = firebaseUser.email;
        userId = firebaseUser.uid; // Assuming you have 'uid' available in the firebaseUser object
      } else {
        userEmail = 'Not Logged In';
        userId = '';
      }
    });
  </script>
  
  <div>
    <p>Email: {userEmail}</p>
    <p>User ID: {userId}</p>
  </div>