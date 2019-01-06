const championsTopTeam = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push({ name: arr[i].name, title: arr[i].title, splash: arr[i].splash, attackrange: arr[i].stats.attackrange});
  }
  const newArrayOrder = newArray.sort((higher, less) => {
    if (higher.attackrange < less.attackrange) {
      return 1;
    } else { 
      return -1;
    }
  });
  return newArrayOrder.slice(0, 10);
};
// segunda historia de usuario pide filtrar los campeones por roles: asesino,mago,tanque
const championsFilterRoles = (data, tipo) => {
  const filterDataRol = data.filter((element) => {
    return (element.tags[0] === tipo || element.tags[1] === tipo);
  });
  return filterDataRol;
};
// tercera historia de usuario desea buscar por campeon y que le muestre sus infomacion importante//
const filterInfoChampions = (data, tipo) => {
  const filterData = data.filter((element) => {
    return (element.name === tipo);
  });
  return filterData;
};

/*const statFunction = (num, arrKeys) => {
  return (parseFloat(arrKeys.stats.hp) + (parseFloat(arrKeys.stats.hpperlevel) * num)).toFixed(2);
};*/

window.lol = {
  championsTopTeam,
  championsFilterRoles,
  filterInfoChampions,
};