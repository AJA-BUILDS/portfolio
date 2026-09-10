# 🎯 EASY STEPS: GitHub Repository + LinkedIn Link

## Part 1: Create GitHub Repository (5 Minutes)

### Step 1: Go to GitHub
- Open browser → Go to: **https://github.com**
- Click **"Sign in"** (or create account if needed)

### Step 2: Create New Repository
1. Click the **"+"** button (top right corner)
2. Click **"New repository"**

### Step 3: Fill in Details
- **Repository name:** Type: `AJA-BUILDS.github.io`
  - ⚠️ Replace `AJA-BUILDS` with YOUR GitHub username
  - The `.github.io` part gives you FREE hosting!
  
- **Description (optional):** "My Portfolio Website"

- **Public** ✅ (select this - required for free hosting)

- **DON'T check anything else** ❌
  - Don't check "Add README"
  - Don't check "Add .gitignore"
  - Don't check "Choose a license"

### Step 4: Create Repository
- Click green button: **"Create repository"**

✅ **Done! Repository created!**

---

## Part 2: Upload Your Code to GitHub

### Step 5: Push Your Portfolio Code

**Open PowerShell/Terminal in your project folder and run:**

```bash
cd "D:\Personal portfolio"
git remote remove origin
git remote add origin https://github.com/AJA-BUILDS/AJA-BUILDS.github.io.git
git push -u origin main
```

⚠️ **Replace `AJA-BUILDS` with YOUR GitHub username!**

**If it asks for password:**
- Username: Your GitHub username
- Password: You need a **Personal Access Token** (see Step 6 below)

---

### Step 6: Get Personal Access Token (If Needed)

If Git asks for a password, you need a token:

1. Go to: **https://github.com/settings/tokens**
2. Click: **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** Type "Portfolio"
4. **Expiration:** Choose any (or "No expiration")
5. **Check box:** ✅ **repo** (full control)
6. Scroll down → Click **"Generate token"**
7. **COPY the token immediately!** (looks like: `ghp_xxxxxxxxxxxx`)
8. Use this token as your password when Git asks

---

## Part 3: Make Your Site Live (GitHub Pages)

### Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab (top of the page)
3. Click **"Pages"** (in left sidebar)
4. Under **"Source"**:
   - Select: **Branch: main**
   - Select: **Folder: / (root)**
5. Click **"Save"**
6. **Wait 2-5 minutes** ⏰

**Your site will be live at:**
🌐 **https://AJA-BUILDS.github.io**

---

## Part 4: Add to LinkedIn (3 Minutes)

### Method 1: Add as Website Link (Easiest)

1. Go to: **https://www.linkedin.com/in/amjad-ali-2118a2272**
2. Click **"Edit"** button (pencil icon) below your name
3. Scroll down to find **"Links"** or **"Websites"** section
4. Click **"Add website"** or **"+ Add"**
5. Fill in:
   - **Label:** Select **"Portfolio"** from dropdown (or "Other")
   - **URL:** Paste your GitHub Pages URL: `https://AJA-BUILDS.github.io`
6. Click **"Save"**

✅ **Done! Link appears on your profile!**

---

### Method 2: Add in Featured Section (Looks Better)

1. Go to your LinkedIn profile
2. Click **"Add section"** button
3. Click **"Featured"**
4. Click the **"+"** icon
5. Select **"Link"**
6. Fill in:
   - **Title:** "My Portfolio Website"
   - **Link:** `https://AJA-BUILDS.github.io`
   - **Description:** "Check out my projects and skills"
7. Click **"Save"**

✅ **Done! Portfolio card shows on your profile!**

---

## ✅ Quick Summary

**GitHub:**
1. Create repo → Name: `YOUR-USERNAME.github.io`
2. Push code → Run git commands
3. Enable Pages → Settings → Pages → Save
4. Site live at: `https://YOUR-USERNAME.github.io`

**LinkedIn:**
1. Edit profile
2. Add website/Featured section
3. Paste your GitHub Pages URL
4. Save

**Total Time: ~10 minutes** ⏱️

---

## 🆘 Need Help?

**Repository name doesn't work?**
- Make sure format is: `YOUR-USERNAME.github.io`
- Use lowercase letters, numbers, and hyphens only

**Can't push code?**
- Make sure repository exists on GitHub first
- Check you're using correct username in URL
- Use Personal Access Token as password

**Site not showing?**
- Wait 5-10 minutes (GitHub needs time)
- Check Settings → Pages is enabled
- Make sure branch is `main` and folder is `/ (root)`

**LinkedIn link not working?**
- Make sure your GitHub Pages site is live first
- Test the URL in a browser
- Wait a few minutes after enabling Pages

---

**🎉 That's it! Your portfolio is now live and linked on LinkedIn!**


