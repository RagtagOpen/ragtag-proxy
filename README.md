# ragtag-proxy

A simple https proxy for local development. Requires a local installation of `openssl`.

## Installation

    npm install -g ragtagopen/ragtag-proxy

## Configuration

Add the following line to your `/etc/hosts` file:

    127.0.0.1 local.ragtag.cloud

## Usage

    ragtag-proxy --source 3001 --target 3000

Now you'll be able to reach your local http://localhost:3000 service at https://local.ragtag.cloud:3001.

You'll need to trust the certificate if you want to avoid the warnings. (Your certificate is generated after installing the npm module, so you won't automatically trust other machines using ragtag-proxy.)
