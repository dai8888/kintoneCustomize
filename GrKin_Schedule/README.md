# GrKin_Schedule

**Garoon -> kintone** のスケジュール連携カスタマイズです。</br>

## Qiita (作成中)

- タイトル
[リンク]()

## 注意点

- Garoon内包のjQueryを利用しています。
- Garoonの予定メニューはあらかじめkintone側で設定してください
  - 予定メニューが合わないとエラーになります。
- Garoon側でエラーが出てもレコード登録がされてしまいます。
  - 保存ボタンを押す
  - -> kintoneへ登録
  - ->-> Garoon側の保存 (ここで施設予約等の重複チェックが入る)