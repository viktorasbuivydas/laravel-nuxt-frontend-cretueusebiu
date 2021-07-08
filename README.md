# Laravel-Nuxt application seperated from main open-source project created by cretueusebiu <a href="https://github.com/cretueusebiu/laravel-nuxt">Checkout main repository</a>

# Laravel-Nuxt

<a href="https://github.com/cretueusebiu/laravel-nuxt/actions"><img src="https://github.com/cretueusebiu/laravel-nuxt/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/cretueusebiu/laravel-nuxt"><img src="https://poser.pugx.org/cretueusebiu/laravel-nuxt/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/cretueusebiu/laravel-nuxt"><img src="https://poser.pugx.org/cretueusebiu/laravel-nuxt/v/stable.svg" alt="Latest Stable Version"></a>

> A Laravel-Nuxt starter project template.

<p align="center">
<img src="https://i.imgur.com/NHFTsGt.png">
</p>

## Client for Nuxt spa

## Features

- Nuxt 2
- Laravel 8
- SPA or SSR
- Socialite integration
- VueI18n + ESlint + Bootstrap 4 + Font Awesome 5
- Login, register, email verification and password reset

## Installation

- `npm install`

## Usage

### Development

```bash
# start Laravel
php artisan serve

# start Nuxt
npm run dev
```

Access your application at `http://localhost:3000`.

### Production

```bash
npm run build
```

### Enable SSR

- Edit `client/nuxt.config.js` and set `ssr: true`
- Edit `.env` to set `APP_URL=http://api.example.com` and `CLIENT_URL=http://example.com`
- Run `npm run build` and `npm run start`

#### Nginx Proxy

For Nginx you can add a proxy using the follwing location block:

#### Process Manager

In production you need a process manager to keep the Node server alive forever:

```bash
# install pm2 process manager
npm install -g pm2

# startup script
pm2 startup

# start process
pm2 start npm --name "laravel-nuxt" -- run start

# save process list
pm2 save

# list all processes
pm2 l
```

After each deploy you'll need to restart the process:

```bash
pm2 restart laravel-nuxt
```

Make sure to read the [Nuxt docs](https://nuxtjs.org/).

## Notes

- This project uses [router-module](https://github.com/nuxt-community/router-module), so you have to add the routes manually in `client/router.js`.
- If you want to separate this in two projects (client and server api), move `package.json` into `client/` and remove config path option from the scripts section. Also make sure to add the env variables in `client/.env`.

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.
