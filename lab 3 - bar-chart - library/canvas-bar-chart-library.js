class BarChart{
    /**
     * The canvas on which the chart will be displayed
     */
    //comentariu JSDoc= /** */
    #canvas; // # = atribut privat in clasa

    /**
     * Creates a new chart instance 
     * @param {HTMLCanvasElement} canvas 
     */
    //acest comentariu se poate transforma in documentatie
    //parametrul constructorului este de tipul HTMLCanvasElement

    constructor(canvas){
        this.#canvas=canvas;

    }

    /**
     * Draw the bar chart
     * @param {Array<Number>} values 
     */
    draw(values){

        const context=this.#canvas.getContext('2d');
        //context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);

        context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);


        const barWidth = this.#canvas.width / values.length;
        //o bara are latimea egala cu totalul supra numarul lor

        const maxValue= Math.max(...values);
        const f= this.#canvas.height / maxValue;

        context.fillStyle = 'orange';
        context.strokeStyle = 'dark-orange';

        for(let i =0; i<values.length;i++){
            const barX = i * barWidth; //bara curenta incepe de la i ori lungimea barii

            const barHeight=values[i]*f*0.9;
            const barY=this.#canvas.height - barHeight;
            context.fillRect(
                barX+barWidth/4,
                barY,
                barWidth/2,
                barHeight);

            context.strokeRect(
                barX + barWidth / 4,
                barY,
                barWidth / 2,                 
                barHeight
            );
        }
    }
}