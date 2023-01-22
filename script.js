var images = new Array();

function preloadImages()
{
    for (i=0; i < preloadImages.arguments.length; i++)
    {

        images[i] = new Image();
        images[i].src = preloadImages.arguments[i];

    }
}

preloadImages("images/card.png", "images/game.gif", "images/portfolio.png", "images/webpage.png", "images/731243A6-15DD-41D2-839F-2AF23E37DA8A_Original.jpg", "images/IMG_4303 copy.JPG");