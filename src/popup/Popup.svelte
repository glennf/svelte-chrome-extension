<script>
    let count = 0;
    function increment() {
      count += 1;
    }
  </script>
  
  <main>
    <h1>Svelte Chrome Extension</h1>
    <button on:click={increment}>
      Clicks: {count}
    </button>
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 1.5em;
      font-weight: 100;
    }
  </style>