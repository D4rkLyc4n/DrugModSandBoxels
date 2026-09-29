// Check if the game's element list exists before adding ours
if (enabledMods.includes("web_fluid.js") || true) {

    // 1. Create the Web Fluid element (The projectile liquid)
    elements.web_fluid = {
        color: "#e6e6e6",
        behavior: behaviors.LIQUID,
        category: "liquids",
        state: "liquid",
        density: 1200,
        viscosity: 500,
        // The magic happens here: a custom "tick" function that checks its surroundings
        tick: function(pixel) {
            // Find pixels directly below or next to the fluid
            let neighbors = [
                {x: pixel.x, y: pixel.y + 1}, // Below
                {x: pixel.x - 1, y: pixel.y}, // Left
                {x: pixel.x + 1, y: pixel.y}  // Right
            ];

            for (let i = 0; i < neighbors.length; i++) {
                let nX = neighbors[i].x;
                let nY = neighbors[i].y;

                // If it hits a solid, wall, or structure, it hardens into a web
                if (!isEmpty(nX, nY, true) && !isPixel(nX, nY, "web_fluid")) {
                    changePixel(pixel, "web"); // Turns into the vanilla "web" element
                    break;
                }
            }
        }
    };

    // 2. Optional: Add a chemical reaction to create Web Fluid manually
    // Combining Slime and Silk/Polymer to form the fluid
    reactions.slime = reactions.slime || {};
    reactions.slime.silk = { elem1: "web_fluid", elem2: null };
}
