<script>
  import SignupForm from '$lib/components/SignupForm.svelte'
  import LoginForm from '$lib/components/LoginForm.svelte'
  import { Card } from 'flowbite-svelte';
</script>

<div class="flex h-screen">
  <div class="flex flex-col justify-center items-start w-1/3 pl-10"> <!--- Changed w-1/2 to w-1/3 -->
    <Card>
      <LoginForm />
    </Card>
  </div>

  <div class="flex flex-col justify-center items-center w-2/3 bg-gray-100"> <!--- Changed w-1/2 to w-2/3 -->
    <h2 class="text-3xl font-bold mb-4">Welcome Back!</h2>
    <p class="text-lg">
      Log in to access your account and enjoy all the benefits.
    </p>
  </div>
</div>

<div class="flex h-screen">
  <div class="flex flex-col justify-center items-center w-2/3 bg-gray-100"> <!--- Changed w-1/2 to w-2/3 -->
    <h2 class="text-3xl font-bold mb-4">Join Our Community!</h2>
    <p class="text-lg">
      Sign up to connect with like-minded individuals and stay updated on exciting events.
    </p>
  </div>
  <div class="flex flex-col justify-center items-start w-1/3 pl-10"> <!--- Changed w-1/2 to w-1/3 -->
    <Card>
      <SignupForm />
    </Card>
  </div>
</div>

<style>
  .flex {
    max-height: calc(100vh / 3); 
  }
</style>