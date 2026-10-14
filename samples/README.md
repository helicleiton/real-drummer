# Drum samples

The WAV one-shots in this folder are from the [Stargate Sample Pack](https://github.com/stargatedaw/stargate-sample-pack), pinned to commit `dbfd6ec52d4ed53b60bdbea5fc6adf295127c027`.

The upstream repository releases the sample pack under [CC0 1.0 Universal](https://github.com/stargatedaw/stargate-sample-pack/blob/main/LICENSE). The samples are included locally so the app can load them without hotlinking at playback time.

- `acoustic/`: Fugue State Audio `distkit` kick, snare, hats, claps, toms and cowbell.
- `electronic/`: Fugue State Audio `x0xproc1` drum one-shots.
- `vintage/`: Fugue State Audio `sdbkit` drum one-shots.
- `studio-pro/`: VCSL acoustic bass drum and modern snare takes, with soft/normal/hard layers and alternate hard hits for round-robin playback. In the app, the remaining pieces use the acoustic kit.

The app uses synthesized Web Audio voices as a fallback if a sample cannot be loaded.

The VCSL takes are included in the Stargate repository's CC0 sample pack at the same pinned commit. The app selects their dynamic layer from note velocity and alternates the hard kick/snare takes to reduce repeated-hit artifacts.