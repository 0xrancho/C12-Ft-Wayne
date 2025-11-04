# Backend Setup Guide

## Overview
Forms submit to Vercel serverless functions that:
1. Save lead data to Notion database
2. Send email with PDF attachments (if resource download)

## Prerequisites
- Notion account
- Resend account (recommended) OR SendGrid account
- Vercel project

## Step 1: Notion Setup

### Create Notion Integration
1. Go to https://www.notion.so/my-integrations
2. Click "+ New integration"
3. Name it "C12 Website Forms"
4. Select your workspace
5. Copy the "Internal Integration Token" → This is your `NOTION_API_KEY`

### Create Notion Database
1. Create a new page in Notion
2. Add a database with these properties:
   - **Name** (Title)
   - **Email** (Email)
   - **Phone** (Phone)
   - **Organization** (Text)
   - **Industry** (Select) - Add options: "Technology", "Healthcare", "Finance", "Manufacturing", "Other"
   - **Experience** (Select) - Add options: "0-2 years", "3-5 years", "6-10 years", "10+ years"
   - **Resource Downloaded** (Text)
   - **Date** (Date)

3. Share the database with your integration:
   - Click "..." in top right → "Add connections"
   - Select your integration

4. Get Database ID:
   - Copy the database URL: `https://notion.so/workspace/DATABASE_ID?v=...`
   - The DATABASE_ID is the 32-character string → This is your `NOTION_DATABASE_ID`

## Step 2: Email Service Setup (Resend - Recommended)

### Option A: Resend (Easiest)
1. Sign up at https://resend.com
2. Verify your sending domain (e.g., c12indy.com)
3. Create API key → This is your `RESEND_API_KEY`
4. Free tier: 100 emails/day, 3,000/month

### Option B: SendGrid (Alternative)
1. Sign up at https://sendgrid.com
2. Create API key → This is your `SENDGRID_API_KEY`
3. Free tier: 100 emails/day

## Step 3: Environment Variables

### Local Development
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your values in `.env`:
   ```env
   NOTION_API_KEY=secret_xxxxx
   NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   RESEND_API_KEY=re_xxxxx
   EMAIL_FROM=resources@c12indy.com
   ```

### Vercel Production
1. Go to your Vercel project → Settings → Environment Variables
2. Add each variable:
   - `NOTION_API_KEY`
   - `NOTION_DATABASE_ID`
   - `RESEND_API_KEY`
   - `EMAIL_FROM`

## Step 4: Testing

### Test Contact Form
1. Go to `/contact` page
2. Fill out form and submit
3. Check Notion database for new entry
4. Verify no errors in browser console

### Test Resource Downloads (Coming Soon)
1. Go to `/resources` page
2. Click "Download" on a resource
3. Fill out popup form
4. Check email for PDF
5. Check Notion for lead with "Resource Downloaded" field

## File Structure
```
api/
  submit-form.ts       # Handles all form submissions + Notion integration
src/
  pages/
    Contact.tsx        # Contact form
    Resources.tsx      # Resource downloads (to be implemented)
```

## Next Steps
1. ✅ Notion integration complete
2. ⏳ Email sending with Resend
3. ⏳ PDF attachment delivery
4. ⏳ Resource download modal implementation

## Troubleshooting

### "Notion API error"
- Check NOTION_API_KEY is correct
- Verify integration has access to database
- Confirm DATABASE_ID is correct

### "Email not sending"
- Check RESEND_API_KEY is valid
- Verify sending domain is verified
- Check Resend dashboard for error logs

### "Form submission fails"
- Check browser console for errors
- Verify all environment variables are set in Vercel
- Check Vercel function logs
