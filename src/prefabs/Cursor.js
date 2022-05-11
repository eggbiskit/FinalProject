class Cursor extends Phaser.GameObjects.Sprite {
    constructor(inventory) {
        let initialPos = inventory.getSpaceCoords(0, 0);
        // Sprite Setup
        super(inventory.scene, initialPos.x, initialPos.y, "cursor");
        inventory.scene.add.existing(this);

        // Instance Variable Setup
        this.inventory = inventory;
        this.coordinates = {
            x: 0,
            y: 0
        }
    }

    /**
     * Function that moves the cursor one tile in any direction
     * 
     * @param {bool} isVertical – Whether or not the movement is vertical
     * @param {bool} isPositive – Whether or not the movement is in a positive direction (down or right)
     */
    move(isVertical, isPositive) {
        let posChange = (isPositive) ? this.inventory.slotSize : -this.inventory.slotSize;
        let increment = (isPositive) ? 1 : -1;
        let axisTerms = (isVertical) ? { axis: "y", tableJust: "rows" } : { axis: "x", tableJust: "cols" };
        if ((this.coordinates[axisTerms.axis] == 0 && !isPositive)
            || (this.coordinates[axisTerms.axis] == this.inventory.arrBounds[axisTerms.tableJust] - 1 && isPositive)) {
            // Placeholder for tweens later maybe
        } else {
            this[axisTerms.axis] += posChange;
            this.coordinates[axisTerms.axis] += increment;
        }
    }
}