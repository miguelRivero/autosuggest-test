<script>
    import Normalize from "./utils/normalize.svelte"
    import Avatar from "./components/avatar.svelte"
    import SubmitBTN from "./components/submitBtn.svelte"
    import Message from "./components/message.svelte"

    export let data;
    export let image;

    let parsedMessage = "nothing yet";

    const handleMessage = () => {
        if (parsedMessage == undefined) return
        alert('You said ' + parsedMessage + '!')
    }
</script>

<Normalize/>
<main>
    <h1>Diagnosis Autosuggest Box</h1>

    <p class="mention-description">
        Please please write the patient's diagnosis.<br><br>
        <strong>Important:</strong> <br>
        <small>
            You can access the tags by starting the word with <strong>#</strong>. <br>
            Similarly, you can add new tags by typing <strong>#</strong> plus the tag and pressing ENTER (sometimes you need to do it twice).
        </small>
    </p>

    <section id="mention-container">
        <div class="msg-container">
            <Avatar image="{image}"></Avatar>
            <Message values="{data}" bind:parsedMessage={parsedMessage}></Message>
        </div>
        <SubmitBTN text="Submit" on:message={handleMessage}></SubmitBTN>
    </section>

</main>

<style lang="scss">

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    position: relative;
  }

  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 100;
    letter-spacing: 0.3rem;
    line-height: 1.5;
    filter: drop-shadow(0.05em 0.05em hsl(9333, 100%, 40%)) !important;
  }

  .mention-description {
    font-size: 1.2rem;
    color: white;
    font-size: 300;
    margin: 2rem 0 4rem;
    line-height: 2;
  }

  #mention-container {
    max-width: 600px;
    width: auto;
    background-color: white;
    margin: 0 auto;
    padding: 1rem;
  }

  .msg-container {
    max-width: 600px;
    margin: 0 auto;
    align-items: stretch;
    border: 0px solid black;
    display: flex;
    position: relative;
    z-index: 0;
    justify-content: center;
    width: 100%;
  }

  :global(body) {
    background-color: #666666;
  }

  @media (min-width: 640px) {
    .msg-container {
      max-width: none;
    }
  }
</style>
