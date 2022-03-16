import { ROUTES_PATH } from '../constants/routes.js'
import ErrorPage from '../views/ErrorPage.js'
import Logout from "./Logout.js"

export default class NewBill {
  
  constructor({ document, onNavigate, store, localStorage }) {
    this.document = document
    this.onNavigate = onNavigate
    this.store = store
    const formNewBill = this.document.querySelector(`form[data-testid="form-new-bill"]`)
    formNewBill.addEventListener("submit", this.handleSubmit)
    const file = this.document.querySelector(`input[data-testid="file"]`)
    file.addEventListener("change", this.handleChangeFile)
    this.fileUrl = null
    this.fileName = null
    this.billId = null
    new Logout({ document, localStorage, onNavigate })
  }

  handleChangeFile = e => {
    e.preventDefault()
    let files = this.document.querySelector(`input[data-testid="file"]`)
    //let files = e.target
    let file = files.files[0]
    let fileName = file.name
    
    if (file.type.match("image/jpeg") || file.type.match("image/jpg") || file.type.match("image/png") || file.type.match("image/gif")) {
      const formData = new FormData()
      const email = JSON.parse(localStorage.getItem("user")).email
      formData.append('file', file)
      formData.append('email', email)

      this.store
        .bills()
        .create({
          data: formData,
          headers: {
            noContentType: true
          }
        })
        .then(({fileUrl, key}) => {
          console.log("fileUrl", fileUrl)
          this.billId = key
          this.fileUrl = fileUrl
          this.fileName = fileName
        })
        .catch(error => {
          console.log("create error")
          // Show error page (because error is not a parameter in NewBillUI)
          const rootDiv = document.getElementById('root')
          rootDiv.innerHTML = ErrorPage(error)
        })
    }
    else {
      alert("Vous devez choisir un fichier JPG, JPEG ou PNG comme justificatif.")
      /* let newFiles = new DataTransfer()
      e.target.files = newFiles.files       // Empty FileList */
      e.target.value = null     // Wrong file name not written on the page
    }
  }
  
  handleSubmit = e => {
    e.preventDefault()
    const email = JSON.parse(localStorage.getItem("user")).email
    const bill = {
      email,
      type: e.target.querySelector(`select[data-testid="expense-type"]`).value,
      name:  e.target.querySelector(`input[data-testid="expense-name"]`).value,
      amount: parseInt(e.target.querySelector(`input[data-testid="amount"]`).value),
      date:  e.target.querySelector(`input[data-testid="datepicker"]`).value,
      vat: e.target.querySelector(`input[data-testid="vat"]`).value,
      pct: parseInt(e.target.querySelector(`input[data-testid="pct"]`).value) || 20,
      commentary: e.target.querySelector(`textarea[data-testid="commentary"]`).value,
      fileUrl: this.fileUrl,
      fileName: this.fileName,
      status: 'pending'
    }

    // Check if required fields are filled
    var requiredFieldsFilled = true;
    if (!e.target.querySelector(`input[data-testid="datepicker"]`).value) {
      requiredFieldsFilled = false;
    }
    if (!e.target.querySelector(`input[data-testid="amount"]`).value) {
      requiredFieldsFilled = false;
    }
    if (!e.target.querySelector(`input[data-testid="pct"]`).value) {
      requiredFieldsFilled = false;
    }

    if (requiredFieldsFilled) {
      this.updateBill(bill)
      //this.onNavigate(ROUTES_PATH['Bills'])   // 2 incorrect tests if commented
    }
  }

  // not need to cover this function by tests
  /* istanbul ignore next */
  updateBill = (bill) => {
    if (this.store) {
      this.store
      .bills()
      .update({data: JSON.stringify(bill), selector: this.billId})
      .then(() => {
        this.onNavigate(ROUTES_PATH['Bills'])
      })
      .catch(error => {
        console.log("update error")
        // Show error page (because error is not a parameter in NewBillUI)
        const rootDiv = document.getElementById('root')
        rootDiv.innerHTML = ErrorPage(error)
      })
    }
  }
}