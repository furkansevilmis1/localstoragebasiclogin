const usernameKayit = document.getElementById('usernameKayit')
const passKayit = document.getElementById('passKayit')
const btnKayit = document.getElementById('btnKayit')

const usernameGiris = document.getElementById('usernameGiris')
const passGiris = document.getElementById('passGiris')
const btnGiris = document.getElementById('btnGiris')

function ilkcalisacak(){
    let kayitlilar = JSON.parse(localStorage.getItem('kayit'))
    if(!kayitlilar){
        localStorage.setItem('kayit','[]')
    }
}
ilkcalisacak()
btnKayit.onclick = kayit
function kayit (){
    if(usernameKayit.value.trim() != '' && passKayit.value.trim() != '' ){
        let kayitlilar = JSON.parse(localStorage.getItem('kayit'))
        let kullanici = {
            username:usernameKayit.value,
            pass:passKayit.value
        }
        kayitlilar.push(kullanici)
        localStorage.setItem('kayit',JSON.stringify(kayitlilar))
    }
}
function giris () {
    let kayitlilar = JSON.parse(localStorage.getItem('kayit'))

    let eslesme = kayitlilar.filter(uye => uye.username == usernameGiris.value && uye.pass == passGiris.value)

    if(eslesme.length != 0){
        console.log('GİRİŞ BAŞARILI!')
    }
}