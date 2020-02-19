#!/usr/bin/env sh

wasm-pack build --target web --out-dir ../browser/pkg --no-typescript --release ./../cli -- --no-default-features --features "browser"
python -m http.server 8000