# Используем базовый образ Node.js
FROM node:22

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы проекта
COPY . .

# Компилируем TypeScript в JavaScript
RUN npm run build

# Устанавливаем переменные окружения
ENV PORT=3000

# Открываем порт, указанный в переменной окружения
EXPOSE $PORT

# Запускаем приложение
CMD ["npm", "start"]
