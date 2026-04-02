# CRO-Аудиты сайтов

Интерактивные отчёты по конверсионной оптимизации многостраничных сайтов.

## Структура

```
/                     → Каталог всех аудитов
/vcolorite/           → Аудит vcolorite.ru
/next-client/         → Аудит следующего клиента
```

## Как добавить новый аудит

1. Создай папку `/{domain-name}/`
2. Положи `index.html` (сгенерированный скиллом Multi-Page CRO Audit)
3. Добавь карточку в корневой `index.html`
4. Push на GitHub:
```bash
git add .
git commit -m "Audit: {domain-name}"
git push
```

## Настройка GitHub Pages (один раз)

1. Перейди в Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. Save

Сайт будет доступен по адресу: `https://{username}.github.io/{repo-name}/`

## Генерация аудитов

Используй скилл **Multi-Page CRO Audit** в Claude Code:
```
claude "сделай CRO-аудит сайта example.com и задеплой на GitHub"
```
