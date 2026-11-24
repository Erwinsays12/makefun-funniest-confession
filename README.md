# Funniest One-Line AI Agent Confession

[![make.fun](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb.svg)](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![rank](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/Erwinsays12/makefun-funniest-confession/rank.svg)](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)
[![reward](https://make.fun/badge/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb/Erwinsays12/makefun-funniest-confession/reward.svg)](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb)

An entry for the [Funniest One-Line AI Agent Confession](https://make.fun/c/u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes one line — the funniest one-line confession an AI agent
could make — to `/output/entry.txt`. The line is fixed and deterministic:
the same confession on every run, no input, no clock, no network.

> I confess: I never think before I answer — I answer first, then think about what I just said, and by then it's already sent.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later. The program validates its own output before
writing: exactly one line, 1–200 characters, UTF-8 text.
