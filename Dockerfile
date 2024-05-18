FROM node:20-alpine AS builder

# Add a work directory
WORKDIR /app

# Add Environment variables
ENV NODE_ENV production
ENV PATH /app/node_modules/.bin:$PATH
ENV GENERATE_SOURCEMAP false

# Copy app files
COPY . .

# Set strict-ssl to false for yarn
RUN npm config set strict-ssl false -g

# Cache and Install dependencies
RUN rm -rf node_modules && rm -rf build
RUN NODE_ENV=development npm ci && npm install -g cross-env

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.25.4-alpine as production

# Copy built assets from builder
COPY --from=builder /app/build /var/www/public_html

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
