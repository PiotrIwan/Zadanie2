//Wprowadzona wartosc przez uzytkownika
let liczba = Number(prompt("Podaj liczbę:"));
//Wszystkie obliczenia
document.write("Wprowadzona liczba: " + liczba + "<br>");
document.write("Liczba o znaku przeciwnym: " + (-liczba) + "<br>");
document.write("Liczba powiększona o 15: " + (liczba + 15) + "<br>");
document.write("Liczba powiększona o 0,5: " + (liczba + 0.5) + "<br>");
document.write("Kwadrat wprowadzonej liczby: " + (liczba * liczba) + "<br>");
document.write("Wartość dzielenia przez 2: " + (liczba / 2) + "<br>");
document.write("Reszta z dzielenia przez 2: " + (liczba % 2) + "<br>");
document.write("Liczba o jeden większa: " + (liczba + 1) + "<br>");
document.write("Liczba o jeden mniejsza: " + (liczba - 1) + "<br>");
document.write("Dzielenie przez 3 zaokrąglone w dół: " + Math.floor(liczba / 3) + "<br>");
document.write("Dzielenie przez 3 zaokrąglone w górę: " + Math.ceil(liczba / 3) + "<br>");
document.write("Dzielenie przez 3 zaokrąglone do najbliższej: " + Math.round(liczba / 3) + "<br>");
document.write("Pierwiastek z liczby: " + Math.sqrt(liczba) + "<br>");
//losowa liczba
let losowa = Math.random() * 50;
document.write("Liczba losowa od 0 do 50: " + losowa + "<br>");
document.write("Iloczyn z liczbą losową: " + (liczba * losowa) + "<br>");
//wartosc absolutna
document.write("Wartość absolutna: " + Math.abs(liczba) + "<br>");