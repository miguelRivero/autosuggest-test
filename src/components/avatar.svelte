<script>
    export let image;
</script>

<div class="avatar">
    <div class="avatar__bg" style="background-image: url({image})"
         role="img" aria-label="User avatar picture">
    </div>
</div>

<style lang="scss">
  .avatar {
    margin-right: 12px;
    height: 4rem;
    width: 100%;
    min-width: 4rem;
    max-width: 4rem;
    background-color: #000;
    overflow: hidden;
    border-radius: 9999px;
  }
  .avatar__bg{
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-size: cover;
  }
</style>
