# Vercel'e Deployment Talimatları

## Hazırlık

Projeniz hazır! Şimdi Vercel'e deploy etmek için aşağıdaki adımları izleyin.

## Adım 1: GitHub'a Push

Önce kodları GitHub repository'nize push edin:

```bash
git add .
git commit -m "Initial commit: ENA Innovation coming soon page"
git push origin main
```

## Adım 2: Vercel'e Deploy

### Yöntem 1: Vercel Dashboard (Önerilen)

1. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
2. "Add New..." > "Project" butonuna tıklayın
3. GitHub repository'nizi seçin: `ENAinnovation/web`
4. Vercel otomatik olarak Next.js projesini algılayacak
5. "Deploy" butonuna tıklayın
6. Deploy tamamlandığında, domain ayarlarına gidin
7. Custom domain olarak kendi domain'inizi ekleyin

### Yöntem 2: Vercel CLI

```bash
# Vercel CLI'yi global olarak yükleyin (ilk kez)
npm install -g vercel

# Vercel'e login olun
vercel login

# Deploy edin
vercel --prod
```

## Adım 3: Domain Ayarları

1. Vercel Dashboard'da projenize gidin
2. "Settings" > "Domains" sekmesine tıklayın
3. Domain'inizi ekleyin (örn: `enainnovation.com`)
4. Vercel size DNS ayarlarını gösterecek
5. Domain sağlayıcınızda (domain'i aldığınız yer) DNS ayarlarını yapın:
   - A Record: Vercel'in IP adresini ekleyin
   - CNAME Record: `cname.vercel-dns.com` ekleyin

## Otomatik Deployment

Artık her `git push` yaptığınızda Vercel otomatik olarak yeni versiyonu deploy edecek!

## Özelleştirme

Sayfayı özelleştirmek için:

1. `app/page.tsx` - Ana sayfa içeriği
2. `app/layout.tsx` - Meta bilgileri (title, description)
3. `tailwind.config.ts` - Renkler ve animasyonlar
4. `app/globals.css` - Global stiller

Değişiklik yaptıktan sonra:

```bash
git add .
git commit -m "Update coming soon page"
git push origin main
```

Vercel otomatik olarak yeni versiyonu deploy edecek!

## Destek

Herhangi bir sorun yaşarsanız:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

