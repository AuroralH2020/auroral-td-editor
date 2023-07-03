ARG ARCH
ARG BUILD_DATE
ARG BUILD_VERSION
ARG BASE_IMAGE=node:16-slim

# BUILD PHASE
# run only on native platform
FROM $BASE_IMAGE AS build-env

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node ./ ./

# INSTALL DEPENDENCIES
# RUN npm ci --only=production && npm cache clean --force
RUN npm ci && npm cache clean --force

# Build the application
RUN npm run final-build --  --output-path=dist --output-hashing=all


######  Use NgInx image  ###### 
FROM nginx:stable
# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# # Copy nginx config file
# COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy dist folder fro build stage to nginx public folder
COPY --from=build-env /app/dist /usr/share/nginx/html

# Start NgInx service
CMD ["nginx", "-g", "daemon off;"]