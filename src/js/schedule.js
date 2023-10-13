/**
 * schedule.js
 * 
 *  ------- Website Kelas ------
 * 
 * Name: website-mipa-satu
 * Author: Khuirul-Huda (@khuirul_huda)
 * Source Code: https://github.com/Khuirul-Huda/website-mipa-satu
 * 
 * ------------------------------
**/


const schedule = {
  "Senin": [
    "😃😃😃",
    "AGAMA",
    "AGAMA",
    "PJOK",
    "PJOK",
    "Bahasa Indonesia",
    "Pemeliharaan Mesin (NB)",
    "Pemeliharaan Mesin (NB)",
    "Pemeliharaan Mesin (NB)",
    ],
"Selasa": [
  "AGAMA",
  "Pemeliharaan Mesin (NB)",
  "Pemeliharaan Mesin (NB)",
  "Pemeliharaan Mesin (NB)",
  "Bahasa Indonesia",
  "Bahasa Indonesia",
  "WIRAUSAHA", 
  "WIRAUSAHA", 
  "WIRAUSAHA",
  "WIRAUSAHA",
  "WIRAUSAHA",
  ],
"Rabu": [
  "PKN",
  "PKN",
  "Bahasa Inggris",
  "Bahasa Inggris",
  "Pemeliharaan Kelistrikan (UD)",
  "Pemeliharaan Kelistrikan (UD)",
  "Pemeliharaan Kelistrikan (UD)",
  "WIRAUSAHA",
  "WIRAUSAHA",
  "WIRAUSAHA",
],
"Kamis": [
  "Bahasa Inggris",
  "Bahasa Inggris",
  "SEJARAH",
  "SEJARAH",
  "Matematika",
  "Matematika",
  "Matematika",
  "Pemeliharaan Chasis (RD)",
  "Pemeliharaan Chasis (RD)",
  "Pemeliharaan Chasis (RD)",
],
"Jumat": [
  "Pemeliharaan Kelistrikan (UD)",
  "Pemeliharaan Kelistrikan (UD)",
  "Pemeliharaan Kelistrikan (UD)",
  "Pemeliharaan Chasis (RD)",
  "Pemeliharaan Chasis (RD)",
  "Pemeliharaan Chasis (RD)",
  ],

}

let jadwalInner = document.getElementById('jadwal').innerHTML;
document.getElementById('jadwal').innerHTML = null


let str = ""



for (let day in schedule) {
  str = ""
  
  for (let hrs = 0; hrs < schedule[day].length; hrs++ ) {
    str += `${schedule[day][hrs]} <br>`
    
    if (hrs == schedule[day].length - 1) {
      document.getElementById('jadwal').innerHTML += jadwalInner.replace('harii', day).replace('jdwll', str)
    }
  }
}

/**
for (let h = 0; h < schedule.senin.length; h++) {
  str += `${schedule.senin[h]} <br>`
  if (h == schedule.senin.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Senin')
  document.getElementById('jadwal').innerHTML = tmp
}

str = ""
for (let h = 0; h < schedule.selasa.length; h++) {
  str += `${schedule.selasa[h]} <br>`
  if (h == schedule.selasa.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Selasa')
  document.getElementById('jadwal').innerHTML = tmp
}


**/
