# Mobile PWA Installation Troubleshooting

## Current Status
✅ Install process completes
❌ Icon not showing on home screen

## Diagnostic Steps

### 1. Check Icon Loading (on Mobile)
Open Chrome DevTools on mobile:
1. Connect device to computer
2. Chrome → `chrome://inspect` → Select your device
3. Go to Application tab → Manifest
4. Check if icons load correctly
5. Look for any errors in console

### 2. Verify Icon URLs
Test these URLs directly on mobile:
- https://tamb.github.io/zelda-walkthroughs/icons/icon-192x192.png
- https://tamb.github.io/zelda-walkthroughs/icons/icon-512x512.png

### 3. Check Manifest
Visit: https://tamb.github.io/zelda-walkthroughs/manifest.json
Verify:
- ✅ Icons array is present
- ✅ Icon paths are correct
- ✅ Sizes are specified correctly

### 4. Android-Specific Checks

#### Option A: Clear Everything and Retry
1. Uninstall any existing PWA
2. Clear Chrome app data: Settings → Apps → Chrome → Storage → Clear Cache & Data
3. Restart Chrome
4. Visit site again
5. Try installing

#### Option B: Check Installation Location
After installing, check:
1. App drawer (not just home screen)
2. Chrome → Menu → "Apps" or "Installed apps"
3. Settings → Apps → See all apps

### 5. Try Different Installation Method

#### Method 1: Chrome Menu
1. Open site in Chrome
2. Tap three dots (⋮)
3. "Add to Home screen" or "Install app"
4. Confirm

#### Method 2: Use the Install Banner
1. Wait for automatic prompt (if configured)
2. Or use your custom install button

#### Method 3: Settings Method
1. Open site
2. Chrome → Settings → Add to Home screen

## Common Issues & Solutions

### Issue: Icon appears blank/white
**Cause**: Transparent PNG with no background
**Solution**: Icon has transparency - this is normal for some launchers

### Issue: Icon shows Chrome logo instead
**Cause**: Icon failed to load
**Solutions**:
- Check network connection
- Verify icon URLs are accessible
- Clear Chrome cache
- Try reinstalling

### Issue: App installs but icon takes time to appear
**Cause**: Android caching behavior
**Solution**: 
- Wait 30-60 seconds
- Lock/unlock device
- Restart launcher (long-press home, swipe up)

### Issue: Different icon on different launchers
**Cause**: Android adaptive icons
**Solution**: This is normal - different launchers style icons differently

## Manual Verification Checklist

Run these checks after deploying:

```bash
# 1. Check manifest is accessible
curl -I https://tamb.github.io/zelda-walkthroughs/manifest.json

# 2. Check icon is accessible
curl -I https://tamb.github.io/zelda-walkthroughs/icons/icon-192x192.png

# 3. Verify manifest content
curl https://tamb.github.io/zelda-walkthroughs/manifest.json | jq '.icons'
```

## Current Manifest Configuration

```json
{
  "icons": [
    {
      "src": "/zelda-walkthroughs/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/zelda-walkthroughs/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/zelda-walkthroughs/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/zelda-walkthroughs/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/zelda-walkthroughs/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

## Testing Steps

1. **Deploy the latest build**
   ```bash
   npm run build:gh-pages
   npm run deploy
   ```

2. **On Mobile Device:**
   - Clear Chrome cache and data
   - Visit the site
   - Check DevTools → Application → Manifest
   - Verify icons load
   - Try installing

3. **After Install:**
   - Check home screen immediately
   - Wait 30 seconds, check again
   - Check app drawer
   - Lock/unlock device
   - Restart if needed

4. **If Still Not Showing:**
   - Take screenshot of manifest in DevTools
   - Check Chrome → Installed Apps
   - Look in Settings → Apps
   - Try a different Android launcher

## Android Launcher Behavior

Different launchers handle PWA icons differently:
- **Pixel Launcher**: Usually shows icon immediately
- **Nova Launcher**: May take 10-30 seconds
- **Samsung One UI**: Check app drawer first
- **Other launchers**: Vary widely

## Next Steps

If icon still doesn't appear after:
1. Clearing cache
2. Reinstalling
3. Waiting 60 seconds
4. Checking app drawer

Then the icon IS likely installed, just in a location you haven't checked yet. The install completing successfully means the PWA is working - it's just a question of where Android put the icon.

Try:
- Pull down app drawer
- Search for "Zelda" in app drawer
- Settings → Apps → sort by "Recently installed"
- Check "All Apps" screen
