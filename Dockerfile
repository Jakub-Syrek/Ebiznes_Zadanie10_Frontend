# Step 1: Build the React application
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code
COPY . .

RUN npm run build

# Step 2: Serve the React application from Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]