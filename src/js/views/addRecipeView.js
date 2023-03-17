import { loadConfig } from "browserslist";
import View from "./view";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _message = 'Recipe was successfully uploaded :)';
  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpenForm = document.querySelector(".nav__btn--add-recipe");
  _btnCloseForm = document.querySelector(".btn--close-modal");

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpenForm.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnCloseForm.addEventListener("click", this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
      this._parentElement.addEventListener('submit', function(e) {
          e.preventDefault();
          const dataArray = [...new FormData(this)];
          const data = Object.fromEntries(dataArray);
          handler(data);
      });
  }

  _generateMarkUp() {}
}

export default new AddRecipeView();
