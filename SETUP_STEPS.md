# 🚀 Quick Setup Steps - Upload Portfolio to GitHub

## ✅ Step 1: Create Repository on GitHub

1. **Go to GitHub:** https://github.com
2. **Sign in** to your account (or create one if needed)
3. **Click the "+" icon** (top right) → **"New repository"**
4. **Fill in the details:**
   - **Repository name:** `AJA-BUILDS.github.io` 
     - ⚠️ Important: Use your GitHub username + `.github.io` for FREE hosting!
   - **Description:** "My Personal Portfolio Website"
   - **Visibility:** Select **Public** ✅ (required for free hosting)
   - **DO NOT** check "Initialize with README" ❌ (you already have files)
   - **DO NOT** add .gitignore or license (you already have files)
5. **Click "Create repository"**

## ✅ Step 2: Push Your Code

After creating the repository, GitHub will show you commands. But your code is already ready!

**Run these commands in your terminal:**

```bash
cd "D:\Personal portfolio"
git remote remove origin
git remote add origin https://github.com/AJA-BUILDS/AJA-BUILDS.github.io.git
git push -u origin main
```

**OR if you already created the repo with a different name, use:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.github.io.git
git push -u origin main
```

⚠️ **If asked for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (see below)

## ✅ Step 3: Enable GitHub Pages (Make it Live!)

1. Go to your repository: `https://github.com/AJA-BUILDS/AJA-BUILDS.github.io`
2. Click **"Settings"** tab (top of repository page)
3. Click **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **"Save"**
6. **Wait 2-5 minutes** ⏰

**Your portfolio will be live at:** `https://AJA-BUILDS.github.io` 🎉

---

## 🔐 Need a Personal Access Token?

GitHub requires a token instead of password:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Name:** "Portfolio Upload"
4. **Expiration:** Choose (or no expiration)
5. **Scopes:** Check ✅ **`repo`** (full control)
6. Click **"Generate token"**
7. **Copy the token immediately!** (you won't see it again)
8. Use this token as your password when Git asks

---

## ✅ Done! 

Your portfolio is now:
- ✅ On GitHub (code repository)
- ✅ Live on GitHub Pages (free hosting)
- 🌐 Accessible at: `https://AJA-BUILDS.github.io`

---

## 🆘 Having Issues?

**Repository not found error:**
- Make sure you created the repository on GitHub first
- Check the repository name matches exactly
- Make sure it's set to **Public**

**Authentication error:**
- Use Personal Access Token (see above)
- Make sure token has `repo` permissions

**Can't push:**
- Make sure you're in the correct folder: `D:\Personal portfolio`
- Check you're logged into the correct GitHub account



