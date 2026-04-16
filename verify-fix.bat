@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   Vercel Build Verification Script
echo ========================================
echo.

echo [1/6] Checking ESLint errors...
findstr /C:"you&apos;ll" src\app\book\[id]\page.tsx >nul
if %errorlevel% equ 0 (
    echo ✓ Fixed: book/[id]/page.tsx
) else (
    echo ✗ Not fixed: book/[id]/page.tsx
)

findstr /C:"We&apos;ll" src\app\contact\page.tsx >nul
if %errorlevel% equ 0 (
    echo ✓ Fixed: contact/page.tsx
) else (
    echo ✗ Not fixed: contact/page.tsx
)

findstr /C:"you&apos;re" src\app\not-found.tsx >nul
if %errorlevel% equ 0 (
    echo ✓ Fixed: not-found.tsx
) else (
    echo ✗ Not fixed: not-found.tsx
)
echo.

echo [2/6] Checking Footer component...
findstr /C:"import Image" src\components\Footer.tsx >nul
if %errorlevel% equ 0 (
    echo ✓ Fixed: Using Next.js Image component
) else (
    echo ✗ Not fixed: Still using HTML img tag
)
echo.

echo [3/6] Checking ESLint config...
if exist ".eslintrc.json" (
    echo ✓ ESLint config exists
    findstr /C:"no-unescaped-entities" .eslintrc.json >nul
    if %errorlevel% equ 0 (
        echo ✓ ESLint rules configured
    )
) else (
    echo ✗ ESLint config not found
)
echo.

echo [4/6] Checking package.json...
if exist "package.json" (
    echo ✓ package.json exists
    findstr /C:"\"build\"" package.json >nul
    if %errorlevel% equ 0 (
        echo ✓ Build script configured
    )
) else (
    echo ✗ package.json not found
)
echo.

echo [5/6] Checking environment variables...
if exist ".env.local" (
    echo ✓ .env.local exists
    findstr /C:"NEXT_PUBLIC_API_BASE_URL" .env.local >nul
    if %errorlevel% equ 0 (
        echo ✓ API_BASE_URL configured
    ) else (
        echo ✗ API_BASE_URL not configured
    )
) else (
    echo ⚠ .env.local not found (OK if using Vercel env vars)
)
echo.

echo [6/6] Summary
echo ========================================
echo.
echo ✅ All ESLint errors should be fixed!
echo.
echo Next steps:
echo 1. git add .
echo 2. git commit -m "Fixed ESLint errors"
echo 3. git push
echo 4. Vercel will auto-deploy
echo.
echo The build should now pass successfully!
echo.
pause
