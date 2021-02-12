class Blood extends BiteFish {

  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/blood.png'; // Set the image
  }

  onClick(event) {
    this.kill();
  }

}