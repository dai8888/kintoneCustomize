(function() {
  'use strict';
  const events = [
    'app.record.create.change.Number',
    'app.record.edit.change.Number',
  ];
  kintone.events.on(events, function(event) {
    const targetAppId = kintone.app.getLookupTargetAppId('Lookup');
    const targetRecordId = event.record.Number.value;
    if (!targetRecordId) {
      event.record.Table.value = [];
      return event;
    }
    const body = {
      app: targetAppId,
      id: targetRecordId,
    };
    kintone.api(kintone.api.url('/k/v1/record', true), 'GET', body, function(resp) {
      event.record.Table.value = resp.record.Table.value;

      // サブテーブルを編集不可にする場合
      event.record.Table.value.forEach(function(obj) {
        for (let p in obj.value) {
          obj.value[p].disabled = true;
        }
      });
      kintone.app.record.set(event);
    }, function(err) {
      window.alert('エラーが発生しました');
    });
  });
})();
