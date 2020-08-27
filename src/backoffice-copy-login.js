// https://stackoverflow.com/questions/7145514/whats-the-purpose-of-starting-semi-colon-at-beginning-of-javascript
(() => {
  async function copyEmployer(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log(`Text: '${text}' copied to clipboard`);
    } catch (err) {
      console.error('Failed to copy to clipboard: ', err);
    }
  }

  const mcpEmail = document.querySelector('.b-emppage-manager.b-emppage-manager-boss.b-emppage-manager-0 > td > a').text;

  copyEmployer(mcpEmail).then(() => console.log(`Successfully copied ${mcpEmail} to clipboard`));
})();
