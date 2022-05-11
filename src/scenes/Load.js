class Load extends Phaser.Scene {

   constructor() {
       super("load");
   }

   preload() {
       this.load.image("inventory", "assets/sprites/Inventory.png");
       this.load.image("cursor", "assets/sprites/Cursor.png");
   }

   create() {
       console.log("load");
       
       this.scene.start("play");
   }
}