const CONFIG = {
  target_m3: 120,
  gold_m3: 135,
  cycle_days: 8,
  shifts_per_day: 2,  // 12val slenkantis grafikas: dieninė + naktinė
};

// Formatas: { date, shift, m3, gas, kwh, raw }
// date: 'YYYY-MM-DD' | shift: 1-4 | m3: kubai | gas: m3 dujų | kwh: elektros kWh | raw: žaliavos tonos
//
// Pamainų rotacija (8 dienų ciklas):
//   Diena 1-2: P1 (dieninė) + P2 (naktinė)
//   Diena 3-4: P3 (dieninė) + P4 (naktinė)
//   Diena 5-6: P2 (dieninė) + P1 (naktinė)
//   Diena 7-8: P4 (dieninė) + P3 (naktinė)

const DATA = [
  // --- BANDOMIEJI DUOMENYS — pakeiskite realiais ---
  { date: '2026-06-22', shift: 1, m3: 125, gas: 1365, kwh: 428, raw: 28.5 },
  { date: '2026-06-22', shift: 2, m3: 118, gas: 1412, kwh: 447, raw: 29.5 },
  { date: '2026-06-23', shift: 1, m3: 122, gas: 1378, kwh: 433, raw: 28.8 },
  { date: '2026-06-23', shift: 2, m3: 121, gas: 1395, kwh: 441, raw: 29.2 },
  { date: '2026-06-24', shift: 3, m3: 112, gas: 1440, kwh: 463, raw: 30.1 },
  { date: '2026-06-24', shift: 4, m3: 119, gas: 1398, kwh: 444, raw: 29.1 },
  { date: '2026-06-25', shift: 3, m3: 115, gas: 1428, kwh: 458, raw: 29.8 },
  { date: '2026-06-25', shift: 4, m3: 121, gas: 1391, kwh: 440, raw: 29.0 },
  { date: '2026-06-26', shift: 2, m3: 130, gas: 1300, kwh: 410, raw: 27.3 },
  { date: '2026-06-26', shift: 1, m3: 119, gas: 1399, kwh: 438, raw: 29.2 },
  { date: '2026-06-27', shift: 2, m3: 128, gas: 1315, kwh: 414, raw: 27.7 },
  { date: '2026-06-27', shift: 1, m3: 121, gas: 1387, kwh: 435, raw: 28.9 },
  { date: '2026-06-28', shift: 4, m3: 122, gas: 1382, kwh: 436, raw: 28.8 },
  { date: '2026-06-28', shift: 3, m3: 109, gas: 1452, kwh: 468, raw: 30.2 },
  { date: '2026-06-29', shift: 4, m3: 120, gas: 1394, kwh: 442, raw: 29.0 },
  { date: '2026-06-29', shift: 3, m3: 111, gas: 1448, kwh: 466, raw: 30.0 },
];
