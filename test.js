// 1. Create the Web Fluid element 
elements.web_fluid = {
    color: "#e6e6e6",
    behavior: behaviors.LIQUID,
    category: "liquids", // MUST be completely lowercase
    state: "liquid",
    density: 1200,
    viscosity: 500,
    tick: function(pixel) {
        let neighbors = [
            {x: pixel.x, y: pixel.y + 1}, 
            {x: pixel.x - 1, y: pixel.y}, 
            {x: pixel.x + 1, y: pixel.y}  
        ];
        for (let i = 0; i < neighbors.length; i++) {
            let nX = neighbors[i].x;
            let nY = neighbors[i].y;
            if (!isEmpty(nX, nY, true) && !isPixel(nX, nY, "web_fluid")) {
                changePixel(pixel, "web"); 
                break;
            }
        }
    }
};

// 2. Add chemical reaction 
reactions.slime = reactions.slime || {};
reactions.slime.silk = { elem1: "web_fluid", elem2: null };
