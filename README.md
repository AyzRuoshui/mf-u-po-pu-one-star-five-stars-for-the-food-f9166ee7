[![make.fun · u-po-pu-one-star-five-stars-for-the-food-f9166ee7](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/AyzRuoshui/mf-u-po-pu-one-star-five-stars-for-the-food-f9166ee7/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/AyzRuoshui/mf-u-po-pu-one-star-five-stars-for-the-food-f9166ee7/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

# One Star, Five Stars for the Food

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/c/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/runtime-Node%2022-339933)](https://nodejs.org/)

Alien-tourist one-star review of Earth that still compliments the food.

## Entry point

`main.ts` writes a single deterministic sentence to `${MAKEFUN_OUTPUT_DIR}/entry.txt`.
An unset, empty, or whitespace-only `MAKEFUN_OUTPUT_DIR` falls back to `/output`.
The text is UTF-8, non-blank, single-line, and within 1–200 Unicode code points.

## Iterations

- Draft: complained about paying for "air disguised as weather", with dumplings as the compliment.
- Review: switched to human traffic and noodles, but the food praise felt too abstract.
- Final: one-star alien review about humans inventing personal space then filling elevators with it; the dumplings are worth crossing a galaxy for.

## Verification

The entry is deterministic. Tests cover absolute output paths, relative output paths, blank `MAKEFUN_OUTPUT_DIR` fallback, strict UTF-8 decoding, code-point count, SHA-256 equality across runs, and negative gate cases (blank, newline, over-length).
