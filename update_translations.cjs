const fs = require('fs'); 
const langs = ['uz', 'ru', 'en']; 
langs.forEach(l => { 
  const path = 'd:/LOCOMOTIVE-department/loc-dep/public/locales/' + l + '/translation.json'; 
  let content = fs.readFileSync(path, 'utf8'); 
  content = content.replace(/\"Temiryo\'lInfratuzilma\" AJ/g, "O'zbekiston Temir Yo'llari AJ"); 
  content = content.replace(/Lokomotiv bo\'limi/g, "Lokomotivlardan foydalanish boshqarmasi"); 
  fs.writeFileSync(path, content); 
});
