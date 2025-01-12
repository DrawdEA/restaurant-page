const contactPage = (function() {
    const show = (parentDiv) => {
        // Address section
        const address = document.createElement("div");

        const addressHeader = document.createElement("h3");
        addressHeader.textContent = "Address"

        const addressContent = document.createElement("p");
        addressContent.textContent = "123 Flavor Street, Foodieville, TX 75000";

        address.appendChild(addressHeader);
        address.appendChild(addressContent);
        parentDiv.appendChild(address);

        // Phone number section
        const phone = document.createElement("div");

        const phoneHeader = document.createElement("h3");
        phoneHeader.textContent = "Phone Number";

        const phoneContent = document.createElement("p");
        phoneContent.textContent = "(555) 987-6543";

        phone.appendChild(phoneHeader);
        phone.appendChild(phoneContent);
        parentDiv.appendChild(phone);

        // Email and Website section
        const emailWeb = document.createElement("div");

        const emailWebHeader = document.createElement("h3");
        emailWebHeader.textContent = "Email and Website";

        const email = document.createElement("p");
        email.textContent = "info@chowtownbites.com";

        const web = document.createElement("p");
        web.textContent = "www.chowtownbites.com";

        emailWeb.appendChild(emailWebHeader);
        emailWeb.appendChild(email);
        emailWeb.appendChild(web);
        parentDiv.appendChild(emailWeb);

        // Social media section
        // Email and Website section
        const socials = document.createElement("div");

        const socialsHeader = document.createElement("h3");
        socialsHeader.textContent = "Email and Website";

        const instagram = document.createElement("p");
        instagram.textContent = "Instagram: @ChowTownBites";

        const facebook = document.createElement("p");
        facebook.textContent = "Facebook: facebook.com/ChowTownBites";

        const twitter = document.createElement("p");
        twitter.textContent = "Twitter: @ChowTownTX";

        socials.appendChild(socialsHeader);
        socials.appendChild(instagram);
        socials.appendChild(facebook);
        socials.appendChild(twitter);
        parentDiv.appendChild(socials);
    }

    return {show};
})();

export {contactPage};