window.UPSTREAM_CFG = {
  NAME: "UPSTREAM",
  TICKER: "UP",
  CA: "MA2H9mbewy4qfrDS9JWvjnRKWpJCMRfyEp6CKEVpump",
  CHAIN: "solana",
  PAD: "pump.fun",
  X: "https://x.com/upstreamfees",
  BUY: "",
  CHART: "",
  // split rules
  CONTRIBUTORS: 9,        // pump.fun fee sharing allows 10 recipients: 9 contributors + 1 burn slot
  CONTRIBUTOR_SHARE: 90,  // % of creator fees to contributors
  BURN_SHARE: 10,         // % of creator fees that buys and burns $UP
  BURN_WALLET: ""         // wallet that receives the 10% slot and does the buy + burn
};
