const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

const get_a_or_an = (following_word) => {
  if (following_word.length === 0) {
    return 'a';
  }

  if (vowels.indexOf(following_word.charAt(0)) !== -1) {
    return 'an';
  }
  return 'a';
};

export default get_a_or_an;
