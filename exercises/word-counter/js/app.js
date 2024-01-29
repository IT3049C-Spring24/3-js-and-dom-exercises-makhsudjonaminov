document.addEventListener('DOMContentLoaded', function () {

  const textareaInput = document.getElementById('text');
  const statsSection = document.getElementById('stat');

  textareaInput.addEventListener('input', updateStats);

  function updateStats() {
    const textContent = textareaInput.value;

    const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;

    const charCount = textContent.length;

    statsSection.textContent = `You've written ${wordCount} words and ${charCount} characters.`;
  }
});