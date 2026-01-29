# 이미지 최적화 가이드

## 📊 현재 상태

### 큰 이미지 파일 (압축 필요)
- `public/images/profile/cat.jpg` - **984KB** → 목표: 100KB 이하
- `public/images/projects/cjthesquare_2.jpg` - 224KB → 목표: 100KB 이하
- `public/images/projects/jtbc_2.jpg` - 176KB → 목표: 80KB 이하
- `public/images/projects/cjthesquare_1.jpg` - 176KB → 목표: 80KB 이하

### 이미 최적화된 이미지 ✅
- 유지보수 로고: 8-20KB (적정)
- `public/images/projects/jtbc_1.png` - 32KB (적정)

---

## 🛠️ 이미지 압축 방법

### 방법 1: 온라인 도구 (가장 쉬움)

#### **TinyPNG** (추천)
1. https://tinypng.com/ 접속
2. 이미지 파일 드래그 & 드롭
3. 압축 완료 후 다운로드
4. 기존 파일 교체

**장점:**
- 무료 (월 500장까지)
- 품질 손실 거의 없음
- WebP 변환 지원
- 일괄 처리 가능

#### **Squoosh** (구글 제공)
1. https://squoosh.app/ 접속
2. 이미지 업로드
3. 압축 옵션 조정
4. 다운로드

**장점:**
- 완전 무료
- 오프라인 작동 (PWA)
- 다양한 포맷 지원 (WebP, AVIF)
- 실시간 미리보기

---

### 방법 2: CLI 도구 (자동화)

#### **Sharp (Node.js)**

```bash
# 설치
pnpm add -D sharp

# 스크립트 생성: scripts/optimize-images.mjs
```

```javascript
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const IMAGES_DIR = './public/images';
const QUALITY = 80;

async function optimizeImages(dir) {
  const files = await readdir(dir, { withFileTypes: true, recursive: true });

  for (const file of files) {
    if (file.isFile() && /\.(jpg|jpeg|png)$/i.test(file.name)) {
      const filePath = join(file.path, file.name);

      await sharp(filePath)
        .resize(1920, 1080, { // 최대 크기 제한
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(filePath.replace(/\.(jpg|jpeg|png)$/i, '.optimized.jpg'));

      console.log(`✓ Optimized: ${filePath}`);
    }
  }
}

optimizeImages(IMAGES_DIR);
```

```bash
# package.json에 스크립트 추가
"scripts": {
  "optimize:images": "node scripts/optimize-images.mjs"
}

# 실행
pnpm optimize:images
```

---

### 방법 3: WebP/AVIF 변환 (최고 압축률)

#### **WebP 변환**
```bash
# ImageMagick 설치 (Windows)
# https://imagemagick.org/script/download.php

# 변환
magick convert cat.jpg -quality 85 cat.webp
```

#### **Next.js에서 자동 WebP 제공**
```typescript
// Next.js의 Image 컴포넌트는 자동으로 WebP 제공
// 추가 작업 불필요, 브라우저가 지원하면 자동 변환됨
<Image src="/images/profile/cat.jpg" />
// → 자동으로 cat.webp 생성 및 제공
```

---

## ✅ 작업 체크리스트

### 필수 작업
- [ ] `cat.jpg` 압축 (984KB → 100KB 이하)
- [ ] `cjthesquare_2.jpg` 압축 (224KB → 100KB 이하)
- [ ] `jtbc_2.jpg` 압축 (176KB → 80KB 이하)
- [ ] `cjthesquare_1.jpg` 압축 (176KB → 80KB 이하)

### 선택 작업 (추가 최적화)
- [ ] WebP 포맷 변환 (50% 추가 압축)
- [ ] AVIF 포맷 변환 (70% 추가 압축, 단 호환성 낮음)
- [ ] 자동화 스크립트 구축

---

## 📈 예상 효과

### Before
```
총 이미지 크기: ~1.56MB
  - cat.jpg: 984KB
  - 프로젝트 이미지: ~576KB
```

### After (압축)
```
총 이미지 크기: ~360KB (77% 감소)
  - cat.jpg: 100KB
  - 프로젝트 이미지: ~260KB
```

### After (WebP 변환)
```
총 이미지 크기: ~180KB (88% 감소)
  - cat.webp: 50KB
  - 프로젝트 이미지: ~130KB
```

---

## 🎯 권장 설정

### 프로필 이미지 (cat.jpg)
- **포맷**: JPEG 또는 WebP
- **크기**: 400x400px (현재 너무 클 가능성)
- **품질**: 80-85%
- **목표 파일 크기**: 50-100KB

### 프로젝트 이미지
- **포맷**: JPEG 또는 WebP
- **크기**: 1200x675px (16:9 비율)
- **품질**: 75-80%
- **목표 파일 크기**: 50-100KB

### 로고 이미지
- **포맷**: PNG (투명도 필요) 또는 SVG (가장 좋음)
- **크기**: 실제 표시 크기의 2배 (Retina 대응)
- **목표 파일 크기**: 10-30KB

---

## 💡 팁

1. **품질 vs 크기 밸런스**
   - JPEG 품질 75-85%가 최적 (눈으로 차이 거의 없음)
   - WebP는 JPEG 대비 30-50% 작음

2. **리사이징 우선**
   - 실제 표시 크기보다 큰 이미지는 리사이징 먼저
   - Retina 디스플레이 대응: 표시 크기의 2배면 충분

3. **Next.js Image 자동 최적화**
   - `<Image>` 컴포넌트 사용 시 자동으로 WebP 변환
   - 다양한 크기의 이미지 자동 생성 (srcset)

4. **Git에 원본 보관**
   - 원본 고해상도 이미지는 별도 보관
   - 압축된 이미지만 배포

---

## 🔗 유용한 링크

- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [Sharp 문서](https://sharp.pixelplumbing.com/)
- [Next.js Image 최적화](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [WebP 변환 가이드](https://developers.google.com/speed/webp)
