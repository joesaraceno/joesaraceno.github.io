const ghpages = require('gh-pages');

console.log('publishing to master');
ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/joesaraceno/joesaraceno.github.io/'
}, (err, res) => {
  console.log(err);
  console.log(res);
});