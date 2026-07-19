# Textstil MEX-Website

Regeln für alle künftigen Textänderungen auf dieser Website (`/neu`). Vorbild: wie DHL/DPD auf ihren Seiten schreiben, sachlich und konkret, nicht wie eine Startup-Landingpage.

## Regeln

1. **Keine Wiederholung derselben Kernbehauptung im selben Wortlaut.** "24 Jahre Erfahrung", "fester Ansprechpartner/Disponent" und "persönlicher Service" sind die drei am häufigsten überstrapazierten Sätze auf dieser Seite. Jede Seite/Sektion darf höchstens eine dieser Ideen aufgreifen und muss sie anders formulieren als die anderen Stellen. Vor jeder Textänderung kurz gegenprüfen: `grep -rn "24 Jahr\|Disponent\|Ansprechpartner" neu/*.html`.
2. **Keine abgehackten Kurzsätze mit Punkt als Stilmittel** ("Auftrag erteilen, fertig. Ohne Papierkram."). Leistung und Nutzen gehören in einen zusammenhängenden Satz.
3. **Buttons schlicht und funktional benennen.** Keine Superlative, keine Zahlen ("Alle fünf..."), kein erzwungenes "Jetzt". Wenn zwei Buttons auf dieselbe Seite verlinken, brauchen sie unterschiedlichen Text.
4. **Behauptungen mit konkreten Fakten verknüpfen**, nicht als Adjektiv behaupten. Nicht "Wir sind zuverlässig", sondern die Zahl/den Mechanismus nennen (Netzwerkgröße, Sendungsvolumen, Preisvergleich).
5. **Firma im Fließtext immer "MEX"**, nicht "MAILEXPRESS" ausschreiben. Ausnahme: Rechtliche/postalische Stellen (Footer-Adresse, Impressum-Angaben, Copyright-Zeile, Geschäftsführer-Bio mit GmbH-Bezug) behalten den vollen Namen "MAILEXPRESS Logistik GmbH".
6. **Register: etablierter B2B-Logistikdienstleister**, nicht Startup. Keine Buzzwords (z. B. leverage-artige Übersetzungen, "innovativ", "einzigartig"), keine übertriebene Emotionalität.

## Vor dem Pushen

Kurze Liste der geänderten Textstellen (Seite, alt → neu) im Chat zeigen, bevor committet wird.
