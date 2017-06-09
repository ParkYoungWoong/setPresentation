// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  width: 1100,
  slideNumber: true,
  dependencies: [
    { src: '/plugin/markdown/marked.js' },
    { src: '/plugin/markdown/markdown.js' },
    { src: '/plugin/notes/notes.js', async: true },
    { src: '/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: '/plugin/zoom-js/zoom.js', async: true }
  ]
});