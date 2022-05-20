class Load extends Phaser.Scene {

    constructor() {
        super("load");
    }

    preload() {
        // Image Loading
        this.load.image("inventory", "assets/sprites/4x3inventory.png");
        this.load.image("tile", "assets/sprites/slot.png");
        this.load.image("cursor", "assets/sprites/Cursor.png");
        this.load.image("menu_bg", "assets/sprites/menu_bg.png");
        this.load.image("play_bg", "assets/sprites/play_bg.png");
        this.load.image("tutorial", "assets/sprites/tutorial.png");
        this.load.image("shelves", "assets/sprites/bg_shelves.png");
        this.load.image("board", "assets/sprites/bg_board.png");
        this.load.image("invoice", "assets/sprites/bg_invoice.png");
        this.load.image("notes", "assets/sprites/notes.png");
        this.load.image("memo", "assets/sprites/memo.png");

        // Item image loading
        this.load.image("blackPotion", "assets/sprites/blackpotion.png");
        this.load.image("greenPotion", "assets/sprites/greenpotion.png");
        this.load.image("bluePotion", "assets/sprites/bluepotion.png");
        this.load.image("purplePotion", "assets/sprites/purplepotion.png");

        // texture atlas
        this.load.atlas('menu_atlas', 'assets/sprites/menu_sheet.png', 'assets/sprites/menu.json');
        this.load.atlas('play_atlas', 'assets/sprites/play_sheet.png', 'assets/sprites/play.json');

        // Font loading
        this.load.bitmapFont('pixel_font', 'assets/font/pixel.png', 'assets/font/pixel.xml');

        // SFX Loading
        // *temp sfx, replace later*
        this.load.audio("temp_sfx", "assets/SFX/select.wav");
        this.load.audio("input_pull", "assets/SFX/select.wav");
        this.load.audio("drop_stack", "assets/SFX/select.wav");
        this.load.audio("pick_up_stack", "assets/SFX/select.wav");
        this.load.audio("output_push", "assets/SFX/select.wav");
        this.load.audio("create", "assets/SFX/select.wav");
        this.load.audio("request", "assets/SFX/select.wav");
        this.load.audio("wrong", "assets/SFX/select.wav");
        this.load.audio("death", "assets/SFX/select.wav");

        // JSON loading
        this.load.json("gameSettings", "src/settings/GameSettings.json");
        this.load.json("items", "src/settings/Items.json");
    }

    create() {
        console.log("load");

        gameSettings = this.cache.json.get("gameSettings");
        itemSpecs = this.cache.json.get("items");

        this.scene.start("menu");
    }
}