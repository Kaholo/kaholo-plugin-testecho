async function pickLetter() {

  const letters = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india"];
  const mappedAutocompleteItems = letters.map((letter) => ({
    id: `${letter.charAt(0).toUpperCase()}`,
    value: letter,
  }));

    return mappedAutocompleteItems;
}

module.exports = {
    pickLetter,
};
