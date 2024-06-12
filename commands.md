# Commands

Попрактикуватись можна тут -
[GIT PRACTICA](https://learngitbranching.js.org/?locale=uk)

## Git Commands

1. `git init` - Ініціалізує репозиторій GIT в поточній директорії.
1. `git add .` - зберігаємо зміни в файлах
1. `git branch` - показуємо список гілок в проекті
1. `git branch -a` - показуємо список гілок на компютері та на сайті github
1. `git branch -d "name"` - видаляє гілку локально з проекту
1. `git branch -r` - показуємо список гілок на сайті github
1. `git branch "branchName"` - створює гілку з назвою "branchName"
1. `git diff` - показує відрізки рядків між двома версіями файлу (між двома
   комітами)
1. `git checkout -b "branchName"` - творюємо гілку з назвою "branchName" і
   переходимо на неї
1. `git checkout "branchName"` - переходить на гілку з назвою "branchName"
1. `git clone ...` - Клонує існуючий репозиторій GIT на локальну машину.
1. `git commit -m "commit message"` - підписуємо збереженні зміни в файлах
1. `git log` - показує історію комітів
1. `git fetch` - отримуємо зміни з сайту github
1. `git pull` - отримуємо останні зміни з сайту github
1. `git push` - відправляємо зміни на сайт github
1. `git push --set-upstream origin "branchName"` - пушить нову гілку на гітхаб
1. `git push origin -d BranchName` - видаляє гілку з сайту github
1. `git push origin --delete BranchName` - видаляє гілку з сайту github
1. `git remote -v` - перевірити до якого репозиторія привязаний проєкт
1. `git remote set-url origin ........` - змінити адресу репозиторія
1. `git stash` - зберігаємо не збережені зміни в файлах і кладемо їх в буфер
   обміну
1. `git stash apply` - вставляємо збережені зміни з буфера обміну
1. `git status` - показуємо статус проекту
1. `git log` - показує історію комітів
1. `git merge "banchName"` - зливаємо гілку з назвою "branchName" в поточну
   гілку
1. `git merge --abort` - відміняємо зливання гілок

Для того щоб вийти з режиму перегляду комітів використовуйте клавішу q
(стосується команди №8 і №25)