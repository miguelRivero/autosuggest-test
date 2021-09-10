<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let text;

    const handleClick = (e) => {
        e.preventDefault();
        dispatch('message');
    }
</script>

<button class="msg-submit" on:click={handleClick} aria-label="send message">
    {text}
</button>

<style lang="scss">
  .msg-submit {
    margin: 1rem auto 0;
    font-size: 1rem;
    padding: .5rem 1rem;
    display: block;
    background-color: hsl(9333, 100%, 40%);
    border: 1px solid transparent;
    color: #ffffff;
    font-weight: 300;
    //-webkit-border-radius: 3px;
    border-radius: 3px;
    //-webkit-transition: all 0.3s ease-in-out;
    //-moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #ffffff;
      color: hsl(9333, 100%, 40%);
      border-color: hsl(9333, 100%, 40%);
      cursor: pointer;
    }
  }
</style>
