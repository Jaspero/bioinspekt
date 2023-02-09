<script lang="ts">
  import Hero from '../lib/Hero.svelte';
  import TextImage from '../lib/TextImage.svelte';
  import Text from '../lib/Text.svelte';
  import Cta from '../lib/Cta.svelte';
  import Button from '../lib/Button.svelte';
  import Margin from '../lib/Margin.svelte';
</script>

<!--<Hero></Hero>-->

<section>
  <div class="grid">
    <div class="col-6">
      <TextImage src="images/storm.jpg">
        <Text size="large">asdiofjoiasdkfios</Text>
      </TextImage>
      <TextImage src="images/storm.jpg" inverted>
        <Text size="large">asdiofjoiasdkfios</Text>
      </TextImage>
      <TextImage src="images/storm.jpg">
        <Text size="large">asdiofjoiasdkfios</Text>
      </TextImage>
      <TextImage src="images/storm.jpg" inverted>
        <Text size="large">asdiofjoiasdkfios</Text>
      </TextImage>
    </div>
  </div>
</section>

<Cta>
  <Text max="42" size="medium" align="center" weight="bold">
    Imamo vješte, kvalificirane, i kvalitetne ljude
    koji su uvijek spremni pomoći i ponuditi savjete.
  </Text>
  <Margin size="2" />
  <Button href="/kontakt" appearance="filled" color="primary-l">Kontaktirajte nas</Button>
</Cta>

<svelte:head>
  <title>Bioinspekt</title>
  <!--<meta
    name="description"
    content="If this your first time using GlycanAge you might have some questions. Here is the best place to start."
  />-->
</svelte:head>

<style>
  section {
    background-color: var(--bg);
  }
</style>