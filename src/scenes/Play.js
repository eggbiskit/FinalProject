class Play extends Phaser.Scene {

    constructor() {
        super("play");
    }

    create() {
        console.log("play");

        // Input Setup
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyInput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        keySelect = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keyOutput = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

        // Game World Setup
        this.inventory = new Inventory(this, 4, 5).setOrigin(0.5);
        this.cursor = new Cursor(this.inventory);
        this.cursor.setDepth(1);
        this.cursor.setOrigin(0.5);
        
        // Input/Output setup
        this.inputSpace = new InputTile(this, game.config.width - 15, game.config.height - 15).setOrigin(0.5);
        this.outputSpace = new OutputTile(this, 15, game.config.height - 15).setOrigin(0.5);

        // Movement Setup
        keyLeft.on("down", () => {
            this.cursor.move(false, false);
        });
        keyRight.on("down", () => {
            this.cursor.move(false, true);
        });
        keyUp.on("down", () => {
            this.cursor.move(true, false);
        });
        keyDown.on("down", () => {
            this.cursor.move(true, true);
        });
        keyInput.on("down", () => {
            this.inputSpace.pull(this.cursor);
        });
        keySelect.on("down", () => {
            if(this.cursor.heldStack) {
                this.cursor.dropStack();
            } else {
                this.cursor.pickUpStack();
            }
        });
        keyOutput.on("down", () => {
            this.inventory.pushStack(this.cursor.coordinates.y, this.cursor.coordinates.x, this.outputSpace);
        });
        
        // Test item
        this.testItem = new ItemStack(this, {x: this.inputSpace.x, y: this.inputSpace.y}, 1, 1, "item");
        this.testItem.setOrigin(0.5);
        this.testItem.setDepth(0.5);
        this.inputSpace.curItem = this.testItem;

        // Test request
        this.testRequest = new ItemStack(this, {x: this.outputSpace.x, y: this.outputSpace.y}, -1, 1, "item");
        this.testRequest.setOrigin(0.5);
        this.testItem.setDepth(0.5);
        this.outputSpace.requestedItem = this.testRequest;

        // Temp tutorial Text
        let textConfig = {
            fontFamily: "Helvetica",
            fontSize: "12px",
            color: "#FFF",
            align: "center"
        };
        let moveControls = this.add.text(game.config.width / 2, 15, "Use ↑, ↓, ←, & → to move", textConfig).setOrigin(0.5);
        let inputControls = this.add.text(game.config.width - 20, game.config.height - 30, "Press\n'C' to\npull\nfrom\nthe\ninput", textConfig).setOrigin(0.5, 1);
        let selectControls = this.add.text(game.config.width / 2, game.config.height - 15, "Press 'X' to grab an item\nPress 'X' again to drop it", textConfig).setOrigin(0.5);
        let outputControls = this.add.text(20, game.config.height - 30, "Press\n'Z' to\npush\nto\nthe\noutput", textConfig).setOrigin(0.5, 1);
    }
}