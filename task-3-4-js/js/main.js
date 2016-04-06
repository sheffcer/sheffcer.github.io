var myForm = {
  createBody: document.body,
  createForm: document.createElement('form'),
  createTitle: document.createElement('h2'),
  createBtn: document.createElement(button),
  
  test: function () {
    this.createForm.classList.add('navbar-form');
    
    this.createBody.appendChild(this.createForm);
    this.createForm.appendChild(this.createTitle);
  }
}

myForm.test();