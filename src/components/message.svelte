<script>
    import {onMount} from "svelte";
    import Tribute from "tributejs";

    export let values, parsedMessage;

    let timer,
        mentionsMessageEl;

    onMount(() => {
        if (!values.length) return
        let tributeTriggers = new Tribute({
            trigger: "#",
            menuContainer: document.getElementById("mention-container"),
            noMatchTemplate: "No results",
            values: values,
            selectTemplate: function (item) {
                if (typeof item === "undefined") return null;
                if (this.range.isContentEditable(this.current.element)) {
                    return (
                        '<span contenteditable="false"><a>#' +
                        item.original.key +
                        '</a></span>'
                    );
                }
                return
                '#' + item.original.value
            }
        });

        tributeTriggers.attach(document.getElementById("mentionsMessage"));

        document
            .getElementById("mentionsMessage")
            .addEventListener("tribute-replaced", function(e) {
                parsedMessage = getMessage()
            });
    });

    const handleKeyup = () => {
        clearTimeout(timer);
        //for debounce
        timer = setTimeout(() => {
            parsedMessage = getMessage()
        }, 300);

    }

    const escapeRegExp = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    const replaceAll = (str, match, replacement) => {
        return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
    }

    const getMessage = () => {
        let step1 = replaceAll(mentionsMessageEl.innerHTML, '<span contenteditable="false"><a>', '');
        let step2 = replaceAll(step1, '</a></span>', '');
        let step3 = replaceAll(step2, '&nbsp;', ' ');
        return step3
    }
</script>

<div class="msg-container__text">
    <div contenteditable="true"
         id="mentionsMessage"
         bind:this="{mentionsMessageEl}"
         on:keyup|preventDefault={handleKeyup}
    ></div>
</div>
<style lang="scss">
  .msg-container__text {
    width: calc(100% - 60px);

  }
  #mentionsMessage {
    background-color: rgba(white, 0.9);
    border: solid 1px #dddddd;
    color: black;
    overflow: hidden;
    font-size: 1em;
    outline: none;
    width: 100%;
    min-height: 107px;
    text-align: left;

    &:focus {
      background-color: transparent;
      border-color: #cccccc;
    }

  }

  :global(#mentionsMessage .mention) {
    color: rgb(27, 149, 224);
  }

  :global(.tribute-container) {
    position: relative !important;
    top: 1rem !important;
    left: 1rem !important;
    height: auto;
    max-height: 300px;
    overflow: auto;
    display: block;
    z-index: 999999;
    width: calc(100% - 60px);
    text-align: left;
    float: right;
    border-top: 1px solid rgb(239, 243, 244);
    background-color: white;
  }

  :global(.tribute-container > ul) {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-block-end: 0;
    margin-block-start: 0;
  }

  :global(.tribute-container > ul li) {
    padding: 1rem;
    font-weight: 700;
    font-size: 1rem;
  }

  :global(.tribute-container > ul li.highlight) {
    background-color: rgb(247, 249, 249);
  }
</style>
