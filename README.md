# 🌸 טאבט - מסעות קסומים | Tabet - Magical Journeys

## 🌟 אתר טיפולים רגשיים-גופניים 

אתר מקצועי ומודרני עבור "טאבט - מסעות קסומים", המציע טיפולים רגשיים-גופניים מתקדמים.

## ✨ תכונות עיקריות

- 🎨 **עיצוב מודרני ורספונסיבי** - מותאם לכל המכשירים
- 🌙 **מצב כהה מלא** - מעבר חלק בין מצב יום ולילה
- 📱 **תפריט מובייל אלגנטי** - ניווט קל ונוח
- 🌸 **לוגו לוטוס אנימטיבי** - אנימציה עדינה ומרגיעה
- 💬 **אינטגרציה עם WhatsApp** - קישור ישיר לקביעת פגישות עם מעקב מלא
- 🎯 **12 טיפולים מרכזיים** - עם מחירון מלא ודרופדאון בטופס
- ⚡ **ביצועים מהירים** - טעינה מהירה ואופטימיזציה מתקדמת
- 📊 **מעקב Google Analytics מלא** - מוכן להפעלה מיידית
- 🔍 **אופטימיזציה מלאה ל-SEO** - כולל Structured Data ו-Open Graph

## 📊 הגדרת Google Analytics

### שלב 1: יצירת חשבון Google Analytics
1. כנס ל-[analytics.google.com](https://analytics.google.com)
2. לחץ "התחל בחינם"
3. הזן את פרטי האתר:
   - **שם האתר**: טאבט - מסעות קסומים
   - **URL**: https://tabet-website.vercel.app
   - **קטגוריה**: בריאות ורפואה
   - **אזור זמן**: (UTC+02:00) ירושלים

### שלב 2: קבלת Measurement ID
1. לאחר יצירת הנכס, קבל את ה-**Measurement ID** 
2. הוא נראה כך: `G-XXXXXXXXXX`

### שלב 3: עדכון הקוד באתר
1. פתח את `index.html`
2. מצא את השורה:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```
3. החלף את `G-XXXXXXXXXX` ב-Measurement ID האמיתי שלך
4. גם בשורה:
   ```javascript
   gtag('config', 'G-XXXXXXXXXX', {
   ```
5. שמור ועלה את הקובץ לאתר

### שלב 4: הגדרת Google Search Console
1. כנס ל-[search.google.com/search-console](https://search.google.com/search-console)
2. הוסף נכס חדש - בחר "URL prefix"
3. הזן: `https://tabet-website.vercel.app`
4. אמת בעלות באמצעות:
   - **Meta tag**: קבל קוד ואמן אותו ב-`index.html` במקום `YYYYYYYYYYYY`
   - או **קובץ HTML**: העלה קובץ לשרת

## 📈 מה המעקב כולל

### אירועים שנמדדים:
- 📱 **לחיצות WhatsApp** - לכל טיפול בנפרד + כפתור צף
- 📝 **שליחת טופס יצירת קשר**
- 👁️ **צפיות בעמודים**
- ⏱️ **זמן שהייה באתר**
- 🖱️ **scroll depth** - כמה גוללו בעמוד
- 📱 **סוג מכשיר** (מובייל/מחשב)

### דוחות שתקבל:
```
📊 דשבורד שבועי:
• 150 מבקרים (+12% מהשבוע הקודם)
• הטיפול הכי מבוקש: מסג' שוודי הוליסטי (23 לחיצות)
• מקור התנועה: 60% Google, 25% ישיר, 15% פייסבוק
• זמן שהייה ממוצע: 2:45 דקות
• 28 לחיצות על וואטסאפ (19% conversion rate)
```

## 🔄 תוכנית העברת בעלות לעתיד

### אופציה A: העברה ישירה (קל יותר)
1. **בGoogle Analytics**:
   - Account Admin → Account Access Management
   - הוסף את דפנה כ-Administrator
   - הסר את עצמך לאחר המעבר

2. **בSearch Console**:
   - Settings → Users and permissions
   - הוסף את דפנה כ-Full user
   - העבר בעלות והסר את עצמך

### אופציה B: יצירת חשבון עסקי חדש
1. צור Gmail עסקי: `tabet.business@gmail.com`
2. העבר את כל הנתונים לחשבון החדש
3. עדכן את ה-Measurement ID באתר
4. **שמירת היסטוריה**: ייתכן איבוד של 3-6 חודשים ראשונים

### מה לא ילך אבוד:
- ✅ קוד האתר נשאר זהה
- ✅ כל הפונקציונליות תמשיך לעבוד
- ✅ מבנה המעקב נשמר
- ⚠️ ייתכן איבוד חלק מההיסטוריה (תלוי באופן המעבר)

## 🛠️ טכנולוגיות

- **HTML5** - מבנה סמנטי נקי עם Schema.org
- **Tailwind CSS** - עיצוב מודרני ורספונסיבי
- **Vanilla JavaScript** - פונקציונליות מתקדמת ללא תלויות
- **Google Analytics 4** - מעקב מתקדם עם events מותאמים
- **CSS Animations** - אנימציות חלקות ומרגיעות
- **Font Awesome** - איקונים מקצועיים
- **GSAP** - אנימציות מתקדמות

## 📁 מבנה הפרויקט

```
tabet-website/
├── index.html          # עמוד ראשי עם מעקב מלא
├── css/
│   └── main.css        # עיצובים מותאמים אישית
├── js/
│   └── main.js         # פונקציונליות JavaScript
├── pictures/           # תמונות האתר
│   ├── PIC-SUNFLOWER.png
│   ├── PIC001.jpeg
│   ├── PIC002.jpeg
│   ├── PIC003.jpeg
│   ├── PIC004.png
│   └── PIC005.png
└── README.md           # תיעוד מפורט
```

## 🚀 פריסה ל-Vercel

### שלב 1: התחברות ל-Vercel
1. כנס ל-[vercel.com](https://vercel.com)
2. התחבר עם GitHub/GitLab או אימייל

### שלב 2: העלאת הפרויקט
#### אופציה A: דרך GitHub (מומלץ)
1. העלה את הקבצים ל-GitHub repository
2. ב-Vercel: "Import Git Repository"
3. בחר את ה-repository

#### אופציה B: העלאה ישירה
1. ב-Vercel: "Deploy" > "Browse"
2. העלה את כל התיקייה

### שלב 3: הגדרות פריסה
- **Framework Preset**: None (Static HTML)
- **Root Directory**: ./
- **Build Command**: (השאר ריק)
- **Output Directory**: ./

### שלב 4: פריסה
1. לחץ "Deploy"
2. חכה לסיום הפריסה (1-2 דקות)
3. קבל קישור ל-`yoursite.vercel.app`

## 🔧 פיתוח מקומי

### התקנה
```bash
# שכפל את הפרויקט
git clone [repository-url]
cd tabet-website

# שרת פיתוח מקומי
npx serve .
# או
python -m http.server 8000
```

### בדיקת הפונקציונליות
- ✅ Dark mode toggle
- ✅ Mobile menu
- ✅ Navigation links
- ✅ WhatsApp integration עם מעקב
- ✅ Form submission עם מעקב
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Google Analytics events

## 📞 יצירת קשר

**טאבט - מסעות קסומים**  
📱 WhatsApp: [972-50-123-4567](https://wa.me/972501234567)  
🌐 אתר: [tabet-website.vercel.app](https://tabet-website.vercel.app)  
📧 מייל: daphna@tabet.co.il

## 📝 רישיון

© 2024 טאבט - מסעות קסומים. כל הזכויות שמורות.

---

## 🔥 עדכונים אחרונים

### Build #4 - מעקב Google Analytics מלא
- ✅ הוספת Google Analytics 4 עם Measurement ID מותאם
- ✅ מעקב מלא אחר כל כפתורי WhatsApp (6 כפתורים)
- ✅ מעקב שליחת טופס יצירת קשר
- ✅ תגיות SEO מלאות כולל Schema.org
- ✅ התכנות לגמישות בהעברת בעלות

### תכונות מעקב מתקדמות:
```javascript
// מעקב WhatsApp לפי טיפול
trackWhatsAppClick('מסג\' שוודי הוליסטי')
trackWhatsAppClick('מסג\' רקמות עמוק') 
trackWhatsAppClick('מסג\' תאילנדי')
trackWhatsAppClick('ארומתרפיה')
trackWhatsAppClick('עיסוי משולב')
trackWhatsAppClick('כפתור צף')
trackWhatsAppClick('כפתור ראשי')
trackWhatsAppClick('יצירת קשר')

// מעקב טפסים
trackFormSubmission('contact_form')
```

*האתר מוכן להפעלה מלאה עם מעקב Google Analytics - רק צריך להחליף את ה-Measurement ID!* ✨

**Last Updated**: Build #4 - Google Analytics מעקב מלא + גמישות העברת בעלות 