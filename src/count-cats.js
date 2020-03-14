module.exports = function countCats(backyard) {
  let number = 0;
  for (i = 0; i < backyard.length; i++)
    {
      for (j = 0; j < backyard[i].length; j++)
        {
          if (backyard[i][j] == "^^") number++;
        }
    }
  return number;
};
