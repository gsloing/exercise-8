// // String Literal

// let fullName = "John Doe"
// let age = 33
// let address = "Manado"

// // Hallo nama saya John Doe, umur saya 33 tahun
// // dan saya tinggal di Manado


// let kalimat5 = "Halo nama saya " + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address
// console.log(kalimat5) // cara lama

// let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}`
// console.log(kalimat6) // string literall


// Arrow Function

function sayGreetings() {
    return `Hello ${nama}`  // cara lama
}
console.log(sayGreetings("John"));


const sayGreetings6 = () => {
    return `Hello $(nama)`
};
console.log(sayGreetings6)