# reacttest

react, redux, react-router, axios, redux-thunkを使用してSSR, SPA

## 概要

- 初期ロード時に、仮の店舗データでSSR
- ページネーションの番号をクリックするとぐるなびAPIを叩いて店舗データを取得後、SPA

## 動作確認

```shell
git clone https://github.com/kudokk/reacttest.git
npm i 
npm start 
localhost:3000へアクセス(SSR)
ページネーション番号をクリック(SPA)
```
