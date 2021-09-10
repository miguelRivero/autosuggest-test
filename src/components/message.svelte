<script>
    import {onMount} from "svelte";
    import Tribute from "tributejs";

    export let values, parsedMessage;

    let timer,
        mentionsMessageEl,
        newMention,
        tributeTriggers;

    onMount(() => {
        if (!values.length) return
        tributeTriggers = new Tribute({
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

        document
            .getElementById("mentionsMessage")
            .addEventListener("tribute-no-match", function(e) {
                newMention = getMentions(e.target.innerText)
            });
    });

    const getMentions = (str) => {
        let mentions = str.split(/[#," "]/);
        return mentions[mentions.length - 1];
    }

    const handleKeyup = e => {
        clearTimeout(timer);
        //for debounce
        timer = setTimeout(() => {
            parsedMessage = getMessage()
        }, 300);
        if (e.charCode === 13) onAddToList();
    }

    const onAddToList = () => {
        if (!newMention) return
        let newVal = { key: newMention, value: newMention };
        values.push(newVal)
        values = values.sort((a,b) => a.key > b.key ? 1 : -1)
        reformatText(newMention)
    };

    const reformatText = (mention) => {
        let newHtml = mentionsMessageEl.innerHTML.toString().replace(`#${mention}`, `<span contenteditable="false"><a>#${mention}</a></span>`)
        mentionsMessageEl.innerHTML = newHtml;
    }
    const onKeyPress = e => {
        if (e.charCode === 13) onAddToList();
    };

    const getMessage = () => {
        return mentionsMessageEl.innerText
    }
</script>

<div class="msg-container__text">
    <div contenteditable="true"
         id="mentionsMessage"
         bind:this="{mentionsMessageEl}"
         on:keypress={onKeyPress}
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
