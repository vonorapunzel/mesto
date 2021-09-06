export default class Section {
  constructor({items, renderer}, selectorContainer) {
    this._initialCards = items;
    this._renderer = renderer;
    this._container = selectorContainer;
  }

  renderingElements(items) {
    //отрисовка каждого отдельного элемента функцией renderer
    items.forEach(element => {
      this._renderer(element);
    });
  }

  addItem(element) {
    //принимает DOM-элемент и добавляет в контейнер.
    this._container.prepend(element);
  }
}