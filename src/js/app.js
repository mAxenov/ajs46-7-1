export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[^\d_-]((\d(?!\d{2}))|\D)*[^\d_-]$/.test(this.name);
  }
}
