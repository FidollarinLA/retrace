# ReTrace 0.2.1 synthetic benchmark

This is a local measurement of `compute(csv, plan)`: Node.js calls the MoonBit-generated JavaScript engine, including CSV parsing, plan validation, calculation, provenance construction and JSON result conversion. CSV generation, process startup, browser rendering, SHA-256 bundle creation and model calls are outside the timed section. The inputs are deterministic and synthetic; [the generator](../scripts/benchmark.mjs) is included in the repository.

Measured 2026-09-21 04:40 China Standard Time on an Apple M4 Mac, 10 logical CPUs, 16 GiB RAM, macOS/Darwin 27.0.0 arm64, Node.js 24.15.0. The checked-in engine was compiled with `moonc v0.10.14+7d59c7ec9` (2026-09-18). Each case ran sequentially in one process, with three warmups followed by 15 timed calls. The table uses the median and nearest-rank 95th percentile of those 15 calls.

| Synthetic workload | CSV records | CSV bytes | Median | P95 |
| --- | ---: | ---: | ---: | ---: |
| Sales: sum by 4 regions | 1,000 | 15,014 | 0.93 ms | 2.70 ms |
| Sales: sum by 4 regions | 10,000 | 150,006 | 6.17 ms | 7.69 ms |
| Sales: sum by 4 regions | 20,000 | 300,007 | 11.14 ms | 13.76 ms |
| Lab: mean by 3 groups, missing values skipped | 1,000 | 11,611 | 0.59 ms | 1.52 ms |
| Lab: mean by 3 groups, missing values skipped | 10,000 | 125,890 | 4.83 ms | 6.94 ms |
| Lab: mean by 3 groups, missing values skipped | 20,000 | 262,864 | 10.13 ms | 11.00 ms |
| Motor: derived temperature rise, max by 8 devices | 1,000 | 13,917 | 0.67 ms | 0.95 ms |
| Motor: derived temperature rise, max by 8 devices | 10,000 | 148,917 | 7.53 ms | 8.01 ms |
| Motor: derived temperature rise, max by 8 devices | 20,000 | 308,917 | 16.49 ms | 20.70 ms |

Run `npm run build` with MoonBit 0.10.14+, then `npm run benchmark` to regenerate measurements on your machine. The generator reports its inputs, environment and a consumed-result checksum as JSON. Times vary with load, thermal state and runtime; this single-machine run is neither a performance guarantee nor a comparison with other tools. Browser interaction, Wasm-GC execution, concurrent users and live industrial data were not benchmarked.
