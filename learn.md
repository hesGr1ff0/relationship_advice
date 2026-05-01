# A Beginner's Guide to Our Website Files

If you're new to coding, looking at a project folder can feel like reading a foreign language. Don't worry! This guide explains what all these folders and files actually do in plain English. Think of building a website like building and running a restaurant. 

---

## 📁 The Root Folder (The Foundation & Management)
These files are the management tools. They don't actually show up on the website for the visitors; they are the instructions for the "builders" (the software) on how to put the website together.

* **`package.json` & `package-lock.json`**
  Think of these as the **Recipe Book and Ingredient List**. They tell the system exactly which external tools (like pre-built buttons or fonts) we need to download to build the site.
* **`vite.config.ts`**
  This is the **Construction Blueprint**. "Vite" is our builder software. This file tells Vite exactly how we want the site built and put together behind the scenes.
* **`index.html`**
  This is the **Front Door**. When someone visits your website, this is the very first file they enter. It acts as a blank canvas that says, "Hey, load all the cool website stuff right here!"
* **`eslint.config.js` & `tsconfig.*.json`**
  These are our **Spell Checkers and Quality Assurance (QA) rulebooks**. They constantly check our code for typos and ensure developers don't make mistakes that could break the site.
* **`claude.md` & `README.md`**
  The **Project Manuals**. These are simple text files for humans (like this one!) explaining what the project is, the goals, and what features are done or pending.

---

## 📁 The `src/` Folder (The Actual Website)
"Src" stands for "source." This is the main kitchen where all the actual website creation happens. Everything the visitor sees and interacts with lives inside here.

* **`main.tsx` & `App.tsx`**
  These are the **Master Control Centers**. `main.tsx` wakes the website up, and `App.tsx` is the traffic cop that directs visitors to the right page (e.g., "Oh, you want the About page? Go this way!").
* **`index.css`**
  The **Paint and Decorations**. This file controls the colors, fonts, spacing, and overall visual style of the website.

### 📂 `src/pages/` (The Rooms)
Every file here represents an entirely different page or "room" on the website.
* `Home.tsx` - The landing page.
* `Articles.tsx` - The list/menu of all our available articles.
* `Article.tsx` - The template for reading a single, specific article.
* `About.tsx` & `Contact.tsx` - Information about the authors and how to reach them.

### 📂 `src/components/` (The LEGO Blocks)
Instead of building a "Header" from scratch on every single page, we build it once here as a "component" and reuse it everywhere like a LEGO block.
* `Header.tsx` & `Footer.tsx` - The top navigation bar and the bottom link area.
* `ArticleCard.tsx` - The little preview box (with the title and summary) you see when looking at a list of articles.
* `Layout.tsx` - The "frame" of the website that ensures the Header and Footer show up consistently on every page.

### 📂 `src/content/` (The Library)
This is where the actual words and articles for the website are stored.
* **`articles/` (Folder)**
  This holds files ending in `.mdx`. These are basically like Microsoft Word documents. If you want to write a new blog post, you just create a new file in here, type your text, and the website automatically turns it into a beautiful webpage!
* **`article-data.ts`**
  The **Librarian**. This file's job is to scan the `articles/` folder, organize all the posts by date and category, and hand them to the web pages so they can be displayed to visitors.
