<script>
    import { user } from '$lib/stores/userStore.js'
  
    let userEmail;
    let userId;
  
    $: {
      if (user) {
        userEmail = user.email;
        userId = user.uid; // Assuming you have 'uid' available in the firebaseUser object
      } else {
        userEmail = 'Not Logged In';
        userId = '';
      }
    }
  </script>
  
  <div>
    <p>Email: {userEmail}</p>
    <p>User ID: {userId}</p>
  </div>