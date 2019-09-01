export const howTo =
    "1. Start by adding a new entry to the `howtos.json` file. You can see how the others are made so do something similar.\n" +
    "`title` is the title of your 'HowTo'.\n" +
    "`detailedDescriptionName` is the name of the `.jsx` object key that. This will be described more in step 3.\n" +
    "`description` is the short description shown on the main page.\n" +
    "`fontawesome_icon` is the id of the font awesome 4 icon you want to be displayed next to the title. They can be found [here](https://fontawesome.com/v4.7.0/icons/).\n" +
    "2. Add a new `.jsx` file in the `descritions` directory/folder. In that file you type `export const [detailedDescriptionName] = \"Nice markdown text that say how to do something.\"` where `[detailedDescriptionName]` is replaced by the actual name of the object. It doesn't have to be exactly that but for consistency it''s better.\n" +
    "3. In the `everything.jsx` add `import {[detailedDescriptionName ]} from './[detailedDescriptionName]` at the top and add `[detailedDescriptionName]: [detailedDescriptionName],` inside the `everything` const.\n" +
    "4. When everything is done make a pull request and wait for someone to review it.\n" +
    "\n" +
    "If something doesn't work you can always try to contact someone in digIT. ";
