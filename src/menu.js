const menuPage = (function() {
    const show = (parentDiv) => {
        
        // Appetizers section
        const appetizers = document.createElement("div");

        const appetizersHeader = document.createElement("h3");
        appetizersHeader.textContent = "Appetizers";

        const appetizer1 = document.createElement("p");
        appetizer1.textContent = "Loaded Nachos Tower - $9.99";

        const appetizer2 = document.createElement("p");
        appetizer2.textContent = "Street-Style Corn Fritters - $7.99";

        const appetizer3 = document.createElement("p");
        appetizer3.textContent = "Crispy Chicken Wings (4 flavors) - $10.99";

        appetizers.appendChild(appetizersHeader);
        appetizers.appendChild(appetizer1);
        appetizers.appendChild(appetizer2);
        appetizers.appendChild(appetizer3);
        parentDiv.appendChild(appetizers);

        // Mains section
        const mains = document.createElement("div");

        const mainsHeader = document.createElement("h3");
        mainsHeader.textContent = "Mains";

        const main1 = document.createElement("p");
        main1.textContent = "BBQ Pulled Pork Sandwich - $12.99";

        const main2 = document.createElement("p");
        main2.textContent = "Classic Cheeseburger with Loaded Fries - $13.49";

        const main3 = document.createElement("p");
        main3.textContent = "Veggie Quesadilla Supreme - $11.99";

        const main4 = document.createElement("p");
        main4.textContent = "Southern-Style Fried Chicken Platter - $14.99";

        mains.appendChild(mainsHeader);
        mains.appendChild(main1);
        mains.appendChild(main2);
        mains.appendChild(main3);
        mains.appendChild(main4);
        parentDiv.appendChild(mains);

        // Bowls and Salads section
        const bowlsSalads = document.createElement("div");

        const bowlsSaladsHeader = document.createElement("h3");
        bowlsSaladsHeader.textContent = "Bowls and Salads";

        const bowl1 = document.createElement("p");
        bowl1.textContent = "Tex-Mex Taco Bowl - $12.49";

        const bowl2 = document.createElement("p");
        bowl2.textContent = "Grilled Chicken Caesar Salad - $10.99";

        const bowl3 = document.createElement("p");
        bowl3.textContent = "Build-Your-Own Buddha Bowl - $11.49";

        bowlsSalads.appendChild(bowlsSaladsHeader);
        bowlsSalads.appendChild(bowl1);
        bowlsSalads.appendChild(bowl2);
        bowlsSalads.appendChild(bowl3);
        parentDiv.appendChild(bowlsSalads);

        // Desserts section
        const desserts = document.createElement("div");

        const dessertsHeader = document.createElement("h3");
        dessertsHeader.textContent = "Desserts";

        const dessert1 = document.createElement("p");
        dessert1.textContent = "Chocolate Lava Cake - $6.99";

        const dessert2 = document.createElement("p");
        dessert2.textContent = "Homemade Apple Pie - $5.99";

        const dessert3 = document.createElement("p");
        dessert3.textContent = "Ice Cream Sundae Trio - $7.99";

        desserts.appendChild(dessertsHeader);
        desserts.appendChild(dessert1);
        desserts.appendChild(dessert2);
        desserts.appendChild(dessert3);
        parentDiv.appendChild(desserts);

        // Drinks section
        const drinks = document.createElement("div");

        const drinksHeader = document.createElement("h3");
        drinksHeader.textContent = "Drinks";

        const drink1 = document.createElement("p");
        drink1.textContent = "Fresh Lemonade (3 flavors) - $3.99";

        const drink2 = document.createElement("p");
        drink2.textContent = "Signature Milkshakes (4 flavors) - $5.99";

        const drink3 = document.createElement("p");
        drink3.textContent = "Craft Beers & Cocktails - Starting at $7.99";

        drinks.appendChild(drinksHeader);
        drinks.appendChild(drink1);
        drinks.appendChild(drink2);
        drinks.appendChild(drink3);
        parentDiv.appendChild(drinks);
    }

    return {show};
})();

export {menuPage};