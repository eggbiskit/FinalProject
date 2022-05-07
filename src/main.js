const config = {
   type: Phaser.CANVAS,
   width: 1000,
   height: 800,
   physics: {
      default: "arcade"
  },
  scene: [Load]
};

let game = new Phaser.Game(config);
