import * as fs from 'fs';


export function scraperCode(): any{
    const originalFilePath = 'C:\Users\nurse\OneDrive\Documents\LHU_APP\Web_Scraper\web-scraper\web-scraper\web-scraper\index.js';
    const newFilePath = 'LHU_APP-app\src\app\pages\outcome\outcome.page.html';
    const code = fs.readFileSync(originalFilePath, 'utf8');
    fs.writeFileSync(newFilePath, code);

}