document.addEventListener('DOMContentLoaded', () => {
  if ('addEventListener' in window) {
    window.addEventListener('load', () => {
      document.body.className = document.body.className.replace(
        /\bis-loading\b/,
        ''
      );
      const host = 'cubicon.xyz';
      if (
        host === window.location.host &&
        window.location.protocol !== 'https:'
      ) {
        window.location = window.location
          .toString()
          .replace(/^http:/, 'https:');
      }
    });
    document.body.className += navigator.userAgent.match(/(MSIE|rv:11\.0)/)
      ? ' is-ie'
      : '';
  }
});
