function piglatin(words)
{
  return _.map(words, function(word){return word + "-ay";});
}
console.log(piglatin(['apple', 'pear']));