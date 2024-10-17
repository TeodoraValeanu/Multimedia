class BarChart{
    /**
     * The canvas on which the chart will be displayed
     */
    #canvas; // # = atribut privat
    /**
     * Creates a new chart instance
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas){
        this.#canvas = canvas;
    }

    draw(){
        const context = this.#canvas.getContext('2d');
        context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
    }
}