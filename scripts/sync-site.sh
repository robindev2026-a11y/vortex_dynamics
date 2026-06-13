#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE_DIR="$ROOT_DIR/site"
PUBLISH_DIR="$ROOT_DIR/publish"

PAGES=(
  index.html
  services.html
  solutions.html
  case-studies.html
  about.html
  careers.html
  contact.html
  request-quote.html
)

for page in "${PAGES[@]}"; do
  cp "$SITE_DIR/$page" "$ROOT_DIR/$page"
  cp "$SITE_DIR/$page" "$PUBLISH_DIR/$page"
done

rm -rf "$ROOT_DIR/assets"
cp -R "$SITE_DIR/assets" "$ROOT_DIR/assets"

rm -rf "$PUBLISH_DIR/assets"
cp -R "$SITE_DIR/assets" "$PUBLISH_DIR/assets"

echo "Synced site/ to repository root and publish/"
