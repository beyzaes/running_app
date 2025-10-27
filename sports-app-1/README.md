# Sports App

## Proje Amacı
Bu uygulama, sporcuların çeşitli zorluklara katılmasını sağlayan bir platform sunmaktadır. Kullanıcılar, farklı zorlukları keşfedebilir, katılabilir ve ilerlemelerini takip edebilirler.

## Kurulum
1. Bu projeyi klonlayın:
   ```
   git clone <repository-url>
   ```
2. Proje dizinine gidin:
   ```
   cd sports-app
   ```
3. Gerekli bağımlılıkları yükleyin:
   ```
   npm install
   ```

## Kullanım
1. Uygulamayı başlatın:
   ```
   npm start
   ```
2. Tarayıcınızda `http://localhost:3000` adresine gidin.

## Dosya Yapısı
- `src/app.ts`: Uygulamanın giriş noktası.
- `src/features/challenges/index.ts`: Zorlukları yöneten sınıf.
- `src/features/challenges/components/ChallengeCard.tsx`: Zorluk bileşeni.
- `src/features/challenges/types/index.ts`: Zorluk arayüzleri.
- `src/types/index.ts`: Genel türler ve arayüzler.
- `tsconfig.json`: TypeScript yapılandırması.
- `package.json`: NPM yapılandırması.

## Katkıda Bulunma
Katkıda bulunmak isterseniz, lütfen bir pull request oluşturun veya sorunlarınızı bildirin.