const callback = (response) => {
  createTable('roadmap', response);
}

const onLoad = () => {
  loadJson('roadmap.json', callback);
}
