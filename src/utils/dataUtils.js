export const splitByName = (data, attribute) => {
  const names = {}

  data.forEach(item => {
  if (!names[item[attribute]]) {
    names[item[attribute]] = [];
  }

  names[item[attribute]].push(item);
});

return Object.values(names);
}

