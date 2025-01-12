const homePage = (function() {
    const show = (parentDiv) => {
        // Hero section
        const heroDiv = document.createElement('div');
        heroDiv.id = 'hero';

        const heroHeading = document.createElement('h1');
        heroHeading.textContent = 'Chow Town';

        const heroParagraph = document.createElement('p');
        heroParagraph.textContent = 'Where Flavors Come to Party!';

        heroDiv.appendChild(heroHeading);
        heroDiv.appendChild(heroParagraph);
        parentDiv.appendChild(heroDiv);

        // Introduction section
        const whyDiv = document.createElement('div');

        const whyHeading = document.createElement('h3');
        whyHeading.textContent = 'Why Chow Town?';

        const whyParagraph = document.createElement('p');
        whyParagraph.textContent = `
            Chow town is the ultimate destination for bold flavors, 
            hearty meals, and good vibes! Located in the heart of Foodieville, 
            Chow Town is a vibrant, casual eatery that brings people together 
            to enjoy mouthwatering dishes inspired by comfort food classics with 
            a modern twist.
        `;

        whyDiv.appendChild(whyHeading);
        whyDiv.appendChild(whyParagraph);
        parentDiv.appendChild(whyDiv);

        // Business hours section
        const hoursDiv = document.createElement('div');

        const hoursHeading = document.createElement('h3');
        hoursHeading.textContent = 'Business Hours';

        const hoursParagraph1 = document.createElement('p');
        hoursParagraph1.textContent = 'Monday to Thursday: 11:00 AM – 10:00 PM';

        const hoursParagraph2 = document.createElement('p');
        hoursParagraph2.textContent = 'Friday to Saturday: 11:00 AM – 12:00 AM';

        const hoursParagraph3 = document.createElement('p');
        hoursParagraph3.textContent = 'Sunday: 11:00 AM – 8:00 PM';

        hoursDiv.appendChild(hoursHeading);
        hoursDiv.appendChild(hoursParagraph1);
        hoursDiv.appendChild(hoursParagraph2);
        hoursDiv.appendChild(hoursParagraph3);
        parentDiv.appendChild(hoursDiv);

        // Special features section
        const featuresDiv = document.createElement('div');

        const featuresHeading = document.createElement('h3');
        featuresHeading.textContent = 'Special Features';

        const feature1 = document.createElement('p');
        feature1.textContent = 'Kids Eat Free Mondays – With a purchase of an adult entrée.';

        const feature2 = document.createElement('p');
        feature2.textContent = 'Happy Hour – Daily from 4:00 PM – 6:00 PM with discounts on drinks and appetizers.';

        const feature3 = document.createElement('p');
        feature3.textContent = 'Chow Challenge – Finish the “Big Bite Feast” in 30 minutes and win a free meal + a feature on the Wall of Fame.';

        featuresDiv.appendChild(featuresHeading);
        featuresDiv.appendChild(feature1);
        featuresDiv.appendChild(feature2);
        featuresDiv.appendChild(feature3);
        parentDiv.appendChild(featuresDiv);
    }

    return {show};
})();

export {homePage};