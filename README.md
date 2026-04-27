# Christmas Tree House — Wholesale Website

B2B wholesale website for Guangzhou Xiaoyu Import & Export Co., Ltd.

## 🚀 Deploy to GitHub Pages (Free)

### Step 1 — Upload to GitHub

1. Create a new repository on [github.com](https://github.com/new)
2. Upload all these files (drag & drop the zip contents into GitHub)

### Step 2 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The site will auto-deploy every time you push to `main`

### Step 3 — Configure the contact form (optional)

The contact form currently falls back to a `mailto:` link.
To enable proper form submission:

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form and copy your Form ID (e.g. `xpwzopqk`)
3. Open `src/components/contact/InquiryForm.jsx`
4. Replace `YOUR_FORM_ID` with your actual ID:
   ```js
   const FORMSPREE_ID = 'xpwzopqk'; // your real ID here
   ```
5. Push to GitHub — the form will now email you directly

### Step 4 — Custom domain (optional)

1. In GitHub Pages settings, enter your domain (e.g. `www.xmastreehouses.com`)
2. Add a CNAME record in your DNS pointing to `yourusername.github.io`

---

## 🛠 Local Development

```bash
npm install --legacy-peer-deps
npm run dev
```

## 📦 Build

```bash
npm run build
```

## 📬 Contact

- Email: summer@yucore.ltd
- Phone: +86 15018485957
- Company: 广州市小彧進出口有限公司
